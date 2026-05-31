Slider images — how to add your photos
========================================

1) Put your THREE original photos in this folder:
   public/images/slider/sources/

   Name them EXACTLY:
   - 1-church.jpg          (building / exterior)
   - 2-worship-bw.jpg      (black & white worship)
   - 3-worship-color.jpg   (colour worship / community)

   JPG or PNG are fine; keep the originals as large as you have (the script will resize).

2) From the project root, run:
   npm install
   npm run optimize:slider

   This writes compressed WebP files to public/images/slider/:
   slide-1.webp, slide-2.webp, slide-3.webp
   Target display ratio matches the site slider: wide banner (~21:9), 1920px wide.

3) Refresh the site. The home page uses those WebP files automatically.
   (If a file is missing, the site temporarily uses a remote fallback from home-slider.json.)
