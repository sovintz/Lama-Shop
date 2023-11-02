"use client";

import { useRef } from "react";

import { useProductStore } from "@/stores/productStore";
import {DescriptionsType, ProductType} from "@/utils/types";

function StoreInitializer({ product, descriptions }: { product: ProductType , descriptions: DescriptionsType}) {
    const initialized = useRef(false);
    if (!initialized.current) {
        useProductStore.setState({ product });
        useProductStore.setState({ descriptions });
        initialized.current = true;
    }
    return null;
}

export default StoreInitializer;