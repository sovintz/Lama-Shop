"use client"
import {storefront} from "@/utils/shopfy-gql";
import {Button} from "@mui/material";
import {useProductStore} from "@/stores/productStore";

export default function CheckoutCreate() {


    const createCheckoutLink = async () => {
        const {data} = await createCheckout()
        const checkoutLink = data.checkoutCreate.checkout.webUrl
        console.log(checkoutLink)
    }

    return (

        <Button variant="contained" onClick={createCheckoutLink} sx={{width:'100%', mb:2}}>test</Button>

    )
}

async function createCheckout() {
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
                    variantId: useProductStore.getState().variant,
                    quantity: useProductStore.getState().quantity,
                },
            ],
        },
    };

    return await storefront(mutation, variables)
}