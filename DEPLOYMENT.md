# Deployment — canonical host & Search Console

## Cloudflare (required once per zone)

1. **SSL/TLS → Edge Certificates → Always Use HTTPS** — ON
2. **DNS** — Add a proxied `www` CNAME to the same Worker/Pages target as the apex (orange cloud). The Worker redirects `www` → `https://arcraiderscheats.co`.
3. **Search Console** — Verify `https://arcraiderscheats.co`, submit `https://arcraiderscheats.co/sitemap.xml`, then request indexing for priority URLs in small batches.

## Deploy from repo

```bash
npm run deploy
```

The Worker in `src/worker.ts` issues **301** redirects for HTTP and `www` before serving static assets from `dist/`. Path redirects and security headers live in `public/_redirects` and `public/_headers`.
