import Image from 'next/image'
import styles from './page.module.css'
import {useEffect, useState} from "react";
import {headers} from 'next/headers';
import {storefront} from "@/app/_utils/shopfy-gql";
import CheckoutCreate from "@/app/_components/checkoutCreate";


/**
 * Create Checkout Function
 * Creates a shopify checkout url and redirects customer
 * to the Shopify checkout page.
 * @param {string} variantId
 */
/*async function createCheckout(variantId) {

    const gql = String.raw
    const mutation = gql`
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

    const variables = {
        input: {
            lineItems: [
                {
                    variantId,
                    quantity: 1,
                },
            ],
        },
    };

    const res = await graphQLClient.request(mutation, variables);

    if (res.checkoutCreate.checkoutUserErrors.length > 0) {
        alert("There was a problem processing the request.");
    } else {
        router.push(res.checkoutCreate.checkout.webUrl);
    }
}*/


export default async function Home() {

    const {data} = await storefront(productQuery)
    const headersList = headers();
    const hostname = headersList.get('host'); // to get domain


    return (
        <main className={styles.main}>


            <h1>{hostname}</h1>

            <div>{JSON.stringify(data)}</div>

            <CheckoutCreate/>

        </main>
    )
}




const gql = String.raw
const productQuery = gql`
     query Products{
       products(first: 10) {
         edges {
           node {
             id
             title
             priceRange{
               minVariantPrice{
                 amount
               }
             }
             description
             images(first: 10){
               edges{
                 node{
                   url
                   altText
                 }
               }
             }
           }
         }
       }
     }`



