Logo & favicon
==============

Header logo (2:1 width:height)
-------------------------------
Default file: Logo.png

Replace this file with your artwork, or change `siteConfig.logo.src` in
src/lib/site-config.ts. Keep a 2:1 aspect ratio (e.g. 48×24 display units).
The header shows the logo at height 32px (mobile) / 36px (desktop); width
scales automatically.

Favicon (browser tab icon)
--------------------------
1. Add your icon file under this folder, e.g. favicon.ico or favicon.png
2. Set the path in src/lib/site-config.ts → siteConfig.favicon

Default in site-config.ts uses Logo.png until you add a dedicated icon.
Example after adding favicon.ico:
  favicon: "/images/logo/favicon.ico",

Supported formats: .ico, .png, .svg
