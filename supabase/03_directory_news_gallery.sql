-- Directory (people), News & Blog (posts), Fashion gallery. Applied 2026-11-09.
create table if not exists public.people  (id text primary key, data jsonb not null, created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table if not exists public.posts   (id text primary key, data jsonb not null, created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table if not exists public.gallery (id text primary key, data jsonb not null, created_at timestamptz not null default now(), updated_at timestamptz not null default now());
do $$ declare tb text; begin
  foreach tb in array array['people','posts','gallery'] loop
    execute format('drop trigger if exists trg_touch on public.%I', tb);
    execute format('create trigger trg_touch before update on public.%I for each row execute function public.touch_updated_at()', tb);
    execute format('alter table public.%I enable row level security', tb);
    execute format('drop policy if exists "admin write" on public.%I', tb);
    execute format('create policy "admin write" on public.%I for all to authenticated using (public.is_admin()) with check (public.is_admin())', tb);
  end loop;
end $$;
grant select on public.people, public.posts, public.gallery to anon;
grant select, insert, update, delete on public.people, public.posts, public.gallery to authenticated;
drop policy if exists "public read" on public.people;
create policy "public read" on public.people for select to anon, authenticated using (true);
drop policy if exists "public read" on public.gallery;
create policy "public read" on public.gallery for select to anon, authenticated using (true);
drop policy if exists "public read published" on public.posts;
create policy "public read published" on public.posts for select to anon, authenticated using (coalesce(data->>'published','yes') <> 'no');
