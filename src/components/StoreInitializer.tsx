"use client";

import { useRef } from "react";

import { useThemeStore } from "@/stores/themeStore";

function StoreInitializer({ theme }: { theme: number }) {
    const initialized = useRef(false);
    if (!initialized.current) {
        useThemeStore.setState({ theme });
        initialized.current = true;
    }
    return null;
}

export default StoreInitializer;