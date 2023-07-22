/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DATA_KEY: '2a7e5476-c80d-58af-b601-a58d8f3c8abd',
    MARKET_KEY: '8da86061-0623-54d7-8b12-87866a11aa15'
  }

}

module.exports = {
  // ...other Next.js configuration options

  images: {
    domains: ['i.seadn.io', 'storage.googleapis.com', 'lh3.googleusercontent.com'],
  },
};