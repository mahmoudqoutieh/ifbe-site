-- Members update (2026-11-21): trainees + videos tables, certificate kinds, member certificate list.
create table if not exists public.trainees (id text primary key, data jsonb not null, created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table if not exists public.videos   (id text primary key, data jsonb not null, created_at timestamptz not null default now(), updated_at timestamptz not null default now());
do $$ declare tb text; begin
  foreach tb in array array['trainees','videos'] loop
    execute format('drop trigger if exists trg_touch on public.%I', tb);
    execute format('create trigger trg_touch before update on public.%I for each row execute function public.touch_updated_at()', tb);
    execute format('alter table public.%I enable row level security', tb);
    execute format('drop policy if exists "admin write" on public.%I', tb);
    execute format('create policy "admin write" on public.%I for all to authenticated using (public.is_admin()) with check (public.is_admin())', tb);
    execute format('drop policy if exists "public read" on public.%I', tb);
    execute format('create policy "public read" on public.%I for select to anon, authenticated using (true)', tb);
  end loop;
end $$;
grant select on public.trainees, public.videos to anon;
grant select, insert, update, delete on public.trainees, public.videos to authenticated;

-- verification ignores spaces in the number and returns the certificate kind and title
create or replace function public.verify_certificate(p_no text) returns jsonb
language sql stable security definer set search_path = public as $$
  select jsonb_build_object('no', c.id,'name', c.data ->> 'name','prog', c.data ->> 'prog','kind', coalesce(c.data ->> 'kind','certificate'),
    'ctar', c.data ->> 'ctar','cten', c.data ->> 'cten','issued', c.data ->> 'issued','expires', c.data ->> 'expires','status', c.data ->> 'status','office', c.data -> 'office')
  from public.certificates c
  where upper(replace(c.id,' ','')) = upper(replace(trim(p_no),' ','')) and c.id <> ''
  order by (c.id = trim(p_no)) desc
  limit 1;
$$;
grant execute on function public.verify_certificate(text) to anon, authenticated;

-- public list of a member's certificates for their profile page
create or replace function public.member_certificates(p_sid text) returns jsonb
language sql stable security definer set search_path = public as $$
  select coalesce(jsonb_agg(jsonb_build_object('no', c.id,'prog', c.data ->> 'prog','kind', coalesce(c.data ->> 'kind','certificate'),
    'ctar', c.data ->> 'ctar','cten', c.data ->> 'cten','issued', c.data ->> 'issued','expires', c.data ->> 'expires','status', c.data ->> 'status') order by c.data ->> 'issued' desc), '[]'::jsonb)
  from public.certificates c
  where c.data ->> 'sid' = p_sid and c.id <> '';
$$;
revoke all on function public.member_certificates(text) from public;
grant execute on function public.member_certificates(text) to anon, authenticated;
