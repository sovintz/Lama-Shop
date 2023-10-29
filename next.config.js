/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.shopify.com'],
    },
    async redirects() {
        return [
            // TODO: exclude /images/* from redirects
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
