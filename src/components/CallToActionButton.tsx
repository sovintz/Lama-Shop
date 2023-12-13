"use client"

import {Button} from "@mui/material";
import {DescriptionsType} from "@/utils/types";
import {useProductStore} from "@/stores/productStore";
import * as gtag from "../../gtag.js"

export default function CallToActionButton({ callToActionButtonText }: { callToActionButtonText: string }) {

    const goTo = () => {
        gtag.event({action: 'click', category: 'Button', label: 'Discovered Now Clicked', value: 1})

        const element = document.querySelector('#scrollToId');
        if (element) {
            const offset = element.getBoundingClientRect().top + window.scrollY // - 60 to add offset
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    };

    return (
        <Button variant={"contained"} size={"large"} sx={{mt: 2}} onClick={goTo}>{callToActionButtonText}</Button>
    )
}