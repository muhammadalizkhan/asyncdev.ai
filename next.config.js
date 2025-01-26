/** @type {import('next').NextConfig} */
 

const nextConfig = {
  sassOptions: {
    implementation: 'sass-embedded',
  },
  reactStrictMode: true,
  images: {
    domains: ['asyncdev.vercel.app', 
              "upload.wikimedia.org",
              'echoinnovateit.com',
              'www.pptssolutions.com',
              'www.intellectsoft.net',
              'www.addevice.io',
              'cdn.prod.website-files.com',
               "developer.apple.com",
              'res.cloudinary.com'],
  },
}
 
module.exports = nextConfig