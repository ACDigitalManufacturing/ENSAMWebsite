/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BACKEND_API_URI:
      "https://ensam-casa-server.herokuapp.com/api/v1",
  },
};
