export async function storefront(query, variables = {}){

    return await fetch('https://3ddb8b.myshopify.com/api/2023-10/graphql.json', {
            method: "POST",
            body: JSON.stringify({
                query,
                variables
            }),
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN
            },
        }
    ).then(res => res.json())

}