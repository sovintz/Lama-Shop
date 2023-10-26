import { create } from 'zustand'
import {storefront} from "@/utils/shopfy-gql";
import {productQuery} from "@/utils/queries";

interface ProductState {
    product: Object
    productID: string
    variant: string
    quantity: number
    setVariant: (variant: string) => void
    setQuantity: (quantity: number) => void
    setProduct: () => Object
    setProductID: (productID: string) => void
}

export const useProductStore = create<ProductState>((set, get) => ({
    variant: "",
    setVariant: (newVariant: string) => set({ variant: newVariant }),
    quantity: 1,
    setQuantity: (newQuantity: number) => set(() => ({ quantity: newQuantity })),
    product: {},
    productID: "",
    setProductID: (new_product_id: string) => set(() => ({ productID: new_product_id })),
    setProduct: async () => {

        const variables = {
            product_id: get().productID
        }

        const {data} = await storefront(productQuery, variables)
        set({ product:  data})
    },
}))
