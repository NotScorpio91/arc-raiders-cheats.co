/** Edge redirect layer: force HTTPS + apex host before static assets. */
interface Env {
  ASSETS: Fetcher;
}

const CANONICAL_HOST = 'arcraiderscheats.co';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname === `www.${CANONICAL_HOST}`) {
      url.hostname = CANONICAL_HOST;
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }

    if (url.protocol === 'http:') {
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
