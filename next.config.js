/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.shopify.com'],
    },
    async redirects() {
        return [
            {
                source: '/images/*',
                destination: '/images/*',
                permanent: true,
            },
            {
                source: '/:path',
                destination: '/',
                permanent: true,
            },
            {
                source: '/:path1/:path2*',
                destination: '/',
                permanent: true,
            }
        ]
    },
}

module.exports = nextConfig
