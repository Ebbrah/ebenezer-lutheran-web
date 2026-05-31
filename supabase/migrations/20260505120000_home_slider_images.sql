-- Jedwali la picha za slider kwenye ukurasa wa mwanzo.
-- Ufunguo wa huduma (service role) hutumika kwa kuongeza/kufuta kutoka Next.js;
-- watumiaji wa umma wasome tu kupitia ufunguo wa anon.

create table if not exists public.home_slider_images (
  id uuid primary key default gen_random_uuid(),
  image_url text not null,
  alt_text text not null default '',
  caption text,
  sort_order int not null default 0,
  created_at timestamptz default now()
);

create index if not exists home_slider_images_sort_idx
  on public.home_slider_images (sort_order);

alter table public.home_slider_images enable row level security;

drop policy if exists "Public read home_slider_images" on public.home_slider_images;

create policy "Public read home_slider_images"
  on public.home_slider_images
  for select
  to anon, authenticated
  using (true);
