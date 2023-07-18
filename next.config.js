/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_URI: 'mongodb://localhost:27017/dflex'
  }
}

module.exports = {
    // ...other Next.js configuration options
  
    images: {
      domains: ['storage.googleapis.com', 'i.seadn.io','lh3.googleusercontent.com'],
    },
  };