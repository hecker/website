const nextConfig = {
  images: {
    domains: ["ddragon.leagueoflegends.com"],
  },
  headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/yt",
        destination: "https://www.youtube.com/@janhecker00",
        permanent: true,
      },
      {
        source: "/ig",
        destination: "https://www.instagram.com/janhecker00/",
        permanent: true,
      },
      {
        source: "/tt",
        destination: "https://www.tiktok.com/@janhecker",
        permanent: true,
      },
      {
        source: "/gh",
        destination: "https://github.com/hecker",
        permanent: true,
      },
      {
        source: "/li",
        destination: "https://www.linkedin.com/in/janhecker/",
        permanent: true,
      },
      {
        source: "/wa",
        destination: "https://chat.whatsapp.com/LhFGMUMgsylHwZF5Irfh8l",
        permanent: true,
      },
      {
        source: "/br",
        destination: "https://bere.al/janhecker",
        permanent: true,
      },
      {
        source: "/cr",
        destination:
          "https://link.clashroyale.com/invite/friend/de?tag=2YJCG20LL&token=8myh8tjx&platform=iOS",
        permanent: true,
      },
      {
        source: "/pp",
        destination: "https://paypal.me/llllllllllllllllllI",
        permanent: true,
      },
      {
        source: "/threads",
        destination: "https://www.threads.net/@janhecker00",
        permanent: true,
      },
    ];
  },
};

// https://nextjs.org/docs/advanced-features/security-headers
const ContentSecurityPolicy = `
    default-src 'self' vercel.live;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com vercel.live;
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src 'self' 'unsafe-eval' 'unsafe-inline' vercel.live;
    connect-src *;
    font-src 'self';
`;

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

module.exports = nextConfig;
