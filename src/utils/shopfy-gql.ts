export async function storefront(query:string, variables:object = {}){

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("X-Shopify-Storefront-Access-Token", process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || '');

    return await fetch('https://3ddb8b.myshopify.com/api/2023-10/graphql.json', {
            method: "POST",
            body: JSON.stringify({
                query,
                variables
            }),
            headers: headers,
        }
    ).then(res => res.json())

}