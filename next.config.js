/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DATA_KEY: '2a7e5476-c80d-58af-b601-a58d8f3c8abd',
    MARKET_KEY: '744b45fd88msh35118922d91f9bcp1969a9jsn8ed76d755a3e'
  }

}

module.exports = {
  // ...other Next.js configuration options

  images: {
    domains: ['i.seadn.io', 'sentinel-nft', 'mkpcdn.com', 'gateway.pinata.cloud', 'storage.googleapis.com', 'res.cloudinary.com', 'ipfs.io', 'ipfs.pixura.io',
     'sothebys-md.brightspotcdn.com', 'www.christies.com', 'f8n-ipfs-production.imgix.net', 
     'assets.phillips.com', 'sothebys-com.brightspotcdn.com', 'd2ybmb80bbm9ts.cloudfront.net'],
  },
};