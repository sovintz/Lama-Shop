"use client"
import {storefront} from "@/utils/shopfy-gql";
import {Alert, Button, Snackbar} from "@mui/material";
import {useProductStore} from "@/stores/productStore";
import {cartCheckoutMutation, checkoutCreateMutation} from "@/utils/queries";
import {useState} from "react";

interface Props {
    buyButtonText: string
    snackbarText: string
}

export default function CheckoutCreate({buyButtonText, snackbarText}: Props) {
    const [open, setOpen] = useState(false);

    const createCheckoutLink = async () => {
        const {data} = await createCheckout()
        try {
            const checkoutLink = data.cartCreate.cart.checkoutUrl + '&locale=sl-SI'

            window.open(checkoutLink, '_blank');
        } catch (e) {
            setOpen(true)
            setTimeout(() => setOpen(false), 5000)
        }

    }
    const variantSelected: boolean = !!useProductStore(state => state.variant)

    return (
        <>
            <Button variant="contained" size={"large"} disabled={!variantSelected} onClick={createCheckoutLink}
                    sx={{width: '100%', mb: 2}}>{buyButtonText}</Button>

            <Snackbar open={open} anchorOrigin={{horizontal: 'center', vertical: 'bottom'}}
            >
                <Alert severity="error">
                    {snackbarText}
                </Alert>
            </Snackbar>
        </>
    )
}

async function createCheckout() {

    /*const variables = {
        input: {
            lineItems: [
                {
                    variantId: useProductStore.getState().variant,
                    quantity: useProductStore.getState().quantity,
                },
            ],
        },
    };*/

    const variables = {
        cartInput: {
            lines: [
                {
                    merchandiseId: useProductStore.getState().variant,
                    quantity: useProductStore.getState().quantity,
                },
            ],
        },
    };

    return await storefront(cartCheckoutMutation, variables)
}

