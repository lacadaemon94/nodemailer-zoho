/** @type {import('next').NextConfig} */

const corsHeaders = [
  {
    key: "Access-Control-Allow-Origin",
    value: "*", // Allow requests from any origin
  },
  {
    key: "Access-Control-Allow-Methods",
    value: "GET,POST,PUT,DELETE,OPTIONS",
  },
  {
    key: "Access-Control-Allow-Headers",
    value: "Content-Type, Authorization, x-localhost-origin",
  },
  {
    key: "Access-Control-Allow-Credentials",
    value: "true",
  },
];

async function headers() {
  return [
    {
      source: "/(.*)",
      headers: [
        ...corsHeaders,
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "X-Frame-Options",
          value: "DENY",
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
        {
          key: "Permissions-Policy",
          value: "geolocation=(), microphone=(), camera=()",
        },
        {
          key: "Content-Security-Policy",
          value:
            "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://www.gstatic.com; img-src 'self' https://translate.google.com https://translate.googleapis.com https://www.google.com https://fonts.gstatic.com https://www.gstatic.com data:; connect-src https://translate.googleapis.com 'self'; manifest-src 'self'; script-src-elem 'self' 'unsafe-inline' https://translate.google.com https://translate.googleapis.com https://translate-pa.googleapis.com",
        },
      ],
    },
  ];
}

const nextConfig = {
  async headers() {
    return headers();
  },
};

module.exports = nextConfig;
