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
         variants(first: 10) {
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
               compareAtPrice {
                 amount
               }
               selectedOptions {
                 name
                 value
               }
             }
           }
         }
         images(first: 20) {
           edges {
             node {
               url
               altText
             }
           }
         }
       }
     }`

const checkoutCreateMutation = gql`
    mutation checkoutCreate($input: CheckoutCreateInput!) {
      checkoutCreate(input: $input) {
        checkout {
          id
          webUrl
        }
        checkoutUserErrors {
          code
          field
          message
        }
      }
    }
  `;

export {productQuery, checkoutCreateMutation};
