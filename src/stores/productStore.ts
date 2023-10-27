import { create } from 'zustand'
import {storefront} from "@/utils/shopfy-gql";
import {productQuery} from "@/utils/queries";
import {DescriptionsType, ProductType} from "@/utils/types";

interface ProductState {
    product: ProductType
    productID: string
    variant: string
    variantIndex: number
    quantity: number
    descriptions: DescriptionsType
    setVariant: (variant: string) => void
    setVariantIndex: (variantIndex: number) => void
    setQuantity: (quantity: number) => void
    setProduct: () => void
    setProductID: (productID: string) => void
    setDescriptions: (descriptions: DescriptionsType) => void
}

export const useProductStore = create<ProductState>((set, get) => ({
    variant: "",
    setVariant: (newVariant: string) => set({ variant: newVariant }),

    variantIndex: 0,
    setVariantIndex: (newVariantIndex: number) => set(() => ({ variantIndex: newVariantIndex })),

    quantity: 1,
    setQuantity: (newQuantity: number) => set(() => ({ quantity: newQuantity })),

    descriptions: {} as DescriptionsType,
    setDescriptions: (newDescriptions: DescriptionsType) => set(() => ({ descriptions: newDescriptions })),

    product: {} as ProductType,
    productID: "",
    setProductID: (new_product_id: string) => set(() => ({ productID: new_product_id })),
    setProduct: async () => {

        const variables = {
            product_id: get().productID
        }

        const {data} = await storefront(productQuery, variables)
        await set({ product:  data.product})
    },
}))
