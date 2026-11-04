-- =====================================================================
-- IFBE — International Federation of Beauty Experts
-- Database schema + security rules (Row Level Security) for Supabase.
-- Run this whole file once in: Supabase → SQL Editor → New query → Run
-- =====================================================================

-- ---------- 1. Tables ------------------------------------------------
-- Every collection uses the same shape: a text id + a JSON document.
create table if not exists public.site_config  (id text primary key, data jsonb not null default '{}'::jsonb, created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table if not exists public.programs     (id text primary key, data jsonb not null, created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table if not exists public.services     (id text primary key, data jsonb not null, created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table if not exists public.offices      (id text primary key, data jsonb not null, created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table if not exists public.students     (id text primary key, data jsonb not null, created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table if not exists public.certificates (id text primary key, data jsonb not null, created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table if not exists public.applications (id text primary key, data jsonb not null, created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table if not exists public.inquiries    (id text primary key, data jsonb not null, created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table if not exists public.payments     (id text primary key, data jsonb not null, created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table if not exists public.admins       (id text primary key, data jsonb not null, created_at timestamptz not null default now(), updated_at timestamptz not null default now());

create index if not exists students_email_idx on public.students ((lower(data->>'email')));
create index if not exists certificates_sid_idx on public.certificates ((data->>'sid'));
create index if not exists payments_sid_idx on public.payments ((data->>'sid'));

-- keep updated_at fresh
create or replace function public.touch_updated_at() returns trigger language plpgsql as $$
begin new.updated_at := now(); return new; end $$;
do $$ declare tb text; begin
  foreach tb in array array['site_config','programs','services','offices','students','certificates','applications','inquiries','payments','admins'] loop
    execute format('drop trigger if exists trg_touch on public.%I', tb);
    execute format('create trigger trg_touch before update on public.%I for each row execute function public.touch_updated_at()', tb);
  end loop;
end $$;

-- table privileges (Row Level Security below decides which rows each person can touch)
grant usage on schema public to anon, authenticated;
grant select on public.site_config, public.programs, public.services, public.offices to anon;
grant insert on public.applications, public.inquiries to anon;
grant select, insert, update, delete on public.site_config, public.programs, public.services, public.offices,
  public.students, public.certificates, public.applications, public.inquiries, public.payments, public.admins to authenticated;

-- ---------- 2. Helper functions -------------------------------------
-- Is the signed-in user an administrator? (their email is listed in public.admins)
create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.admins a
    where lower(a.id) = lower(coalesce(auth.jwt() ->> 'email', ''))
  );
$$;

-- Student record ids that belong to the signed-in user (matched by email)
create or replace function public.my_student_ids() returns setof text
language sql stable security definer set search_path = public as $$
  select s.id from public.students s
  where lower(s.data ->> 'email') = lower(coalesce(auth.jwt() ->> 'email', ''))
    and coalesce(s.data ->> 'status', '') <> 'suspended';
$$;

-- Public certificate verification: returns ONE certificate by its number, never a list
create or replace function public.verify_certificate(p_no text) returns jsonb
language sql stable security definer set search_path = public as $$
  select jsonb_build_object(
    'no', c.id,
    'name', c.data ->> 'name',
    'prog', c.data ->> 'prog',
    'issued', c.data ->> 'issued',
    'expires', c.data ->> 'expires',
    'status', c.data ->> 'status',
    'office', c.data -> 'office')
  from public.certificates c
  where upper(c.id) = upper(trim(p_no))
  limit 1;
$$;

-- Students may update only their own name and country
create or replace function public.update_my_profile(p_name text, p_country text) returns void
language plpgsql security definer set search_path = public as $$
begin
  update public.students
     set data = data || jsonb_build_object('name', left(trim(p_name), 120), 'country', left(trim(p_country), 80))
   where id in (select public.my_student_ids());
end $$;

revoke all on function public.is_admin() from public;
revoke all on function public.my_student_ids() from public;
revoke all on function public.update_my_profile(text, text) from public;
grant execute on function public.is_admin() to authenticated;
grant execute on function public.my_student_ids() to authenticated;
grant execute on function public.update_my_profile(text, text) to authenticated;
grant execute on function public.verify_certificate(text) to anon, authenticated;

-- ---------- 3. Row Level Security -----------------------------------
alter table public.site_config  enable row level security;
alter table public.programs     enable row level security;
alter table public.services     enable row level security;
alter table public.offices      enable row level security;
alter table public.students     enable row level security;
alter table public.certificates enable row level security;
alter table public.applications enable row level security;
alter table public.inquiries    enable row level security;
alter table public.payments     enable row level security;
alter table public.admins       enable row level security;

-- Public website content: everyone can read, only admins can change
do $$ declare tb text; begin
  foreach tb in array array['site_config','programs','services','offices'] loop
    execute format('drop policy if exists "public read" on public.%I', tb);
    execute format('drop policy if exists "admin write" on public.%I', tb);
    execute format('create policy "public read" on public.%I for select to anon, authenticated using (true)', tb);
    execute format('create policy "admin write" on public.%I for all to authenticated using (public.is_admin()) with check (public.is_admin())', tb);
  end loop;
end $$;

-- Private data: admins see everything
do $$ declare tb text; begin
  foreach tb in array array['students','certificates','applications','inquiries','payments','admins'] loop
    execute format('drop policy if exists "admin all" on public.%I', tb);
    execute format('create policy "admin all" on public.%I for all to authenticated using (public.is_admin()) with check (public.is_admin())', tb);
  end loop;
end $$;

-- Students see only their own record, certificates and invoices
drop policy if exists "student own record" on public.students;
create policy "student own record" on public.students for select to authenticated
  using (id in (select public.my_student_ids()));
drop policy if exists "student own certificates" on public.certificates;
create policy "student own certificates" on public.certificates for select to authenticated
  using (data ->> 'sid' in (select public.my_student_ids()));
drop policy if exists "student own payments" on public.payments;
create policy "student own payments" on public.payments for select to authenticated
  using (data ->> 'sid' in (select public.my_student_ids()));

-- Visitors can submit applications and contact messages (insert only, cannot read them back)
drop policy if exists "public submit" on public.applications;
create policy "public submit" on public.applications for insert to anon, authenticated
  with check (coalesce(data ->> 'status', 'new') = 'new' and length(data::text) < 8000);
drop policy if exists "public submit" on public.inquiries;
create policy "public submit" on public.inquiries for insert to anon, authenticated
  with check (length(data::text) < 8000);

-- ---------- 4. First administrator ----------------------------------
-- ⚠️ Change the email below to YOUR email before running.
-- Then open the website → Sign in → Create account with this same email.
insert into public.admins (id, data)
values ('info@theifbe.com', '{"name":"IFBE Admin","email":"info@theifbe.com"}')
on conflict (id) do nothing;
