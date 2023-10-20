"use client"
import styles from "@/app/(routes)/page.module.css";
import {storefront} from "@/utils/shopfy-gql";
import {Button} from "@mui/material";

export default function CheckoutCreate() {


    const test = async () => {
        console.log(await createCheckout("gid://shopify/ProductVariant/47668530512200"))
    }

    return (

        <Button variant="contained" onClick={test} sx={{width:'100%'}}>test</Button>

    )
}

async function createCheckout(variantId) {
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

    const data = await storefront(mutation, variables)
    return data
}