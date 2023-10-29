/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.shopify.com'],
    },
    async redirects() {
        return [
            {
                source: '/_not-found', // Capture any path
                destination: '/', // Redirect to the root path
                permanent: true, // Set to true for a permanent redirect (301)
            },
            {
                source: '/:any/:any*', // Capture any path
                destination: '/', // Redirect to the root path
                permanent: true, // Set to true for a permanent redirect (301)
            },
        ]
    },
}

module.exports = nextConfig
