"use client";

import { useRef } from "react";

import { useProductStore } from "@/stores/productStore";
import {ProductType} from "@/utils/types";

function StoreInitializer({ product }: { product: ProductType }) {
    const initialized = useRef(false);
    if (!initialized.current) {
        useProductStore.setState({ product });
        initialized.current = true;
    }
    return null;
}

export default StoreInitializer;