const gql = String.raw
const productQuery: string = gql`
     query SingleProduct($product_id: ID) {
      product(id: $product_id) {
        title
        description
        updatedAt
        priceRange {
          minVariantPrice {
            amount
          }
        }
        variants(first: 5) {
          edges {
            node {
              id
              image {
                url
                altText
              }
              price {
                amount
              }
              selectedOptions {
                name
                value
              }
            }
          }
        }
        images(first: 10) {
          edges {
            node {
              url
              altText
            }
          }
        }
      }
    }`

export {productQuery};
