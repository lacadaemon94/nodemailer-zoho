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
    value: "Content-Type, X-Auth-Token, Origin",
  },
];

async function headers() {
  return [
    {
      source: "/(.*)",
      headers: [...corsHeaders],
    },
  ];
}

const nextConfig = {
  async headers() {
    return headers();
  },
};

module.exports = nextConfig;
