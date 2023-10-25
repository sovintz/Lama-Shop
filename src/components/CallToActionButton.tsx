"use client"

import {Button} from "@mui/material";


export default function CallToActionButton() {
    const goTo = () => {
        const element = document.querySelector('#scrollToId');
        if (element) {
            const offset = element.getBoundingClientRect().top + window.scrollY - 60;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    };

    return (
        <Button variant={"contained"} sx={{mt: 3}} onClick={goTo}>Discover more</Button>
    )
}