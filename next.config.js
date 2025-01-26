/** @type {import('next').NextConfig} */
 

const nextConfig = {
  sassOptions: {
    implementation: 'sass-embedded',
  },
  reactStrictMode: true,
  images: {
    domains: ['asyncdev.vercel.app', 'www.intellectsoft.net', 'www.addevice.io', 'cdn.prod.website-files.com', 'res.cloudinary.com'],
  },
}
 
module.exports = nextConfig