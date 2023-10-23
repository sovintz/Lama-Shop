"use client"
import {Typography} from "@mui/material";
import {useProductStore} from "@/stores/productStore";
import {Variant} from "@/utils/types";
import {useEffect, useState} from "react";

interface Props {
    defaultAmount: string
    raw_variants: object[]
}

export default function AmountCalculator({defaultAmount, raw_variants}:Props) {

    const [varAmount, setVarAmount] = useState(Number(defaultAmount));

    const variants = raw_variants.map((cur_variant: any) => {
        return {
            id: cur_variant.node.id,
            imgSrc: cur_variant.node.image.url,
            price: cur_variant.node.price.amount,
            selectedOptions: cur_variant.node.selectedOptions[0],
        }
    })

    const quantity = useProductStore((state) => state.quantity)
    const variant_id = useProductStore((state) => state.variant)

    useEffect(() => {

        const variant = variants.find((variant:Variant) => variant.id === variant_id)
        setVarAmount(variant ? variant.price : Number(defaultAmount))

    }, [variant_id]);

    return (
        <Typography variant="h6" component="h3" align="left">
            {varAmount * quantity} €
        </Typography>
    )
}