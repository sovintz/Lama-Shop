"use client"

import {Button} from "@mui/material";
import {DescriptionsType} from "@/utils/types";
import {useProductStore} from "@/stores/productStore";


export default function CallToActionButton({ callToActionButtonText }: { callToActionButtonText: string }) {

    const goTo = () => {
        const element = document.querySelector('#scrollToId');
        if (element) {
            const offset = element.getBoundingClientRect().top + window.scrollY - 60;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    };

    return (
        <Button variant={"contained"} sx={{mt: 3}} onClick={goTo}>{callToActionButtonText}</Button>
    )
}