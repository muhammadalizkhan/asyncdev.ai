/** @type {import('next').NextConfig} */
 

const nextConfig = {
  sassOptions: {
    implementation: 'sass-embedded',
  },
  reactStrictMode: true,
  images: {
    domains: ['asyncdev.vercel.app', 'res.cloudinary.com'],
  },
}
 
module.exports = nextConfig