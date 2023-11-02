const gql = String.raw
const productQuery2: string = gql`
     query SingleProduct($product_id: ID) {
       product(id: $product_id) {
         title
         descriptionHtml
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

const productQuery: string = gql`
     query SingleProduct($product_id: ID) {
       product(id: $product_id) {
         title
         descriptionHtml
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
         media(first: 20) {
          edges {
            node {
              mediaContentType
              ...mediaFieldsByType
            }
          }
        }
       }
     }
 
 fragment mediaFieldsByType on Media {
  ... on MediaImage {
    image {
      url
      altText
    }
  }
  ... on Video {
    sources {
      url
      mimeType
      height
    }
  }
}
     
     
   `

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
