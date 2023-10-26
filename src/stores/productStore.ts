import { create } from 'zustand'
import {storefront} from "@/utils/shopfy-gql";
import {productQuery} from "@/utils/queries";
import {DescriptionsType} from "@/utils/types";

interface ProductState {
    product: Object
    productID: string
    variant: string
    quantity: number
    descriptions: DescriptionsType
    setVariant: (variant: string) => void
    setQuantity: (quantity: number) => void
    setProduct: () => Object
    setProductID: (productID: string) => void
    setDescriptions: (descriptions: DescriptionsType) => void
}

export const useProductStore = create<ProductState>((set, get) => ({
    variant: "",
    setVariant: (newVariant: string) => set({ variant: newVariant }),

    quantity: 1,
    setQuantity: (newQuantity: number) => set(() => ({ quantity: newQuantity })),

    descriptions: {},
    setDescriptions: (newDescriptions: DescriptionsType) => set(() => ({ descriptions: newDescriptions })),

    product: {},
    productID: "",
    setProductID: (new_product_id: string) => set(() => ({ productID: new_product_id })),
    setProduct: async () => {

        const variables = {
            product_id: get().productID
        }

        const {data} = await storefront(productQuery, variables)
        console.log("store", data)
        await set({ product:  data})
    },
}))
