import { create } from 'zustand'

interface ProductState {
    product: Object
    variant: string
    setVariant: (variant: string) => void
    setProduct: (productSubdomain: string) => Object
}

export const useProductStore = create<ProductState>((set) => ({
    variant: "",
    setVariant: (newVariant: string) => set(() => ({ variant: newVariant })),
    product: {},
    setProduct: async (productSubdomain: string) => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        set({ product: await response.json() })
    }
}))
