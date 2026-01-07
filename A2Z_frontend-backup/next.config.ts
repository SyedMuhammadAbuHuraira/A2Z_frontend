// next.config.ts - YE KARO:
const nextConfig = {
  // REMOVE output: 'export' - Vercel doesn't need it
  // basePath bhi remove karo Vercel ke liye
  
  // Optional: Agar static export chahiye toh
  output: process.env.NEXT_OUTPUT_MODE === 'export' ? 'export' : undefined,
  
  images: {
    domains: ['vercel.app', 'github.com'],
  },
}

export default nextConfig