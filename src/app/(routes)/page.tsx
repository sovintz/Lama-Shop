import Image from 'next/image'
import styles from './page.module.css'
import {headers} from 'next/headers';
import {storefront} from "@/utils/shopfy-gql";
import CheckoutCreate from "@/components/checkoutCreate";
import Product from "@/components/Product";
import Header from "@/components/Header";
import Marketing from "@/components/Marketing";
import Guarantees from "@/components/Guarantees";
import {useProductStore} from "@/stores/productStore"


const dataTest = {
    "mainTitle": "The Best Product",
    "marketingTitle": "Marketing",
    "marketingDescription": "marketing description",
    "productDescription": "product description",
}

export default async function Home() {

    const variables = {
        product_id: "gid://shopify/Product/8621599228232"
    };

    const {data} = await storefront(productQuery, variables)
    const headersList = headers();
    const hostname = headersList.get('host'); // to get domain

    const descriptionJSON = JSON.parse(data.product.description)
    const images = data.product.images.edges
    console.log(images)
    useProductStore.setState(state => state.setProduct("test"))
    useProductStore.getState().setVariant("3333")

    return (
        <main className={styles.main}>


            {/*<h1>{hostname}</h1>

            <div>{JSON.stringify(data)}</div>

            <CheckoutCreate/>*/}
            {/*Server-rendered component state access*/}
            <h1>{JSON.stringify(useProductStore.getState().product)}</h1>
            <h1>{useProductStore.getState().variant}</h1>
            <Header title={descriptionJSON.mainTitle} image={images[0].node}/>
            <Marketing marketingTitle={descriptionJSON.marketingTitle} marketingDescription={descriptionJSON.marketingDescription} image={images[1].node}/>
            <Product product_data={data}/>
            <Guarantees/>

        </main>
    )
}


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



