# Deployment — canonical host & Search Console

## Cloudflare (required once per zone)

1. **SSL/TLS → Edge Certificates → Always Use HTTPS** — ON
2. **DNS** — Add a proxied `www` CNAME to the same Worker/Pages target as the apex (orange cloud). The Worker redirects `www` → `https://arcraiderscheats.co`.
3. **Search Console** — Verify `https://arcraiderscheats.co`, submit `https://arcraiderscheats.co/sitemap.xml`, then request indexing for priority URLs in small batches.

## Deploy from repo

```bash
npm run deploy
```

Or push to `main` to trigger the GitHub Actions workflow (requires `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets).

The Worker in `src/worker.ts` issues **301** redirects for HTTP and `www` before serving static assets from `dist/`. Path redirects and security headers live in `public/_redirects` and `public/_headers`.

## Post-deploy verification

Run these checks after deployment:

```bash
curl -I http://arcraiderscheats.co/          # expect 301 → https://arcraiderscheats.co/
curl -I https://arcraiderscheats.co/sitemap.xml
curl -I https://arcraiderscheats.co/sitemap-index.xml  # expect 301 → /sitemap.xml
```

Confirm product pages expose visible pricing and JSON-LD `Offer` objects with `price` and `priceCurrency` (e.g. Cloud DMA `$50.00` USD).

## Search Console follow-up

1. Submit **`https://arcraiderscheats.co/sitemap.xml`** (replace the old sitemap-index URL).
2. **URL Inspection** — request indexing for priority URLs in small batches (home, `/cheats/`, `/products/cloud-dma/`, top blog posts).
3. **Blog batch indexing (25 posts)** — after deploy, request indexing for **5–10 new blog URLs per week** in Search Console (do not submit all 22 new slugs at once). Suggested week-one batch:
   - `/blog/arc-raiders-esp-guide/`
   - `/blog/arc-raiders-aimbot-guide/`
   - `/blog/arc-raiders-cheats-guide/`
   - `/blog/arc-raiders-cheat-setup-checklist/`
   - `/blog/arc-raiders-xray-tier-review/`
   Week-two: loot ESP, pro tier, EAC guide, spoofer guides, season meta. Continue until all 25 post URLs are submitted.
4. **Product snippets / Merchant listings** — open the failed validation report and click **Validate fix** after live pages show priced offers.
5. Re-check indexing status in 1–2 weeks; “Discovered — currently not indexed” pages need recrawl time and authority beyond technical fixes.
