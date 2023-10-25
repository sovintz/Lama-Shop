"use client"
import {storefront} from "@/utils/shopfy-gql";
import {Button} from "@mui/material";
import {useProductStore} from "@/stores/productStore";
import {checkoutCreateMutation} from "@/utils/queries";

export default function CheckoutCreate() {


    const createCheckoutLink = async () => {
        console.log(checkoutCreateMutation)

        const {data} = await createCheckout()
        const checkoutLink = data.checkoutCreate.checkout.webUrl

        window.open(checkoutLink, '_blank');
    }
    const variantSelected: boolean = !!useProductStore(state => state.variant)


    return (

        <Button variant="contained" disabled={!variantSelected} onClick={createCheckoutLink} sx={{width:'100%', mb:2}}>test</Button>

    )
}

async function createCheckout() {

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

    return await storefront(checkoutCreateMutation, variables)
}