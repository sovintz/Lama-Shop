"use client"
import {Typography} from "@mui/material";
import {useProductStore} from "@/stores/productStore";
import {Variant} from "@/utils/types";
import {useEffect, useState} from "react";
import {Box} from "@mui/system";

interface Props {
    defaultAmount: string
    raw_variants: object[]
}

export default function AmountCalculator({defaultAmount, raw_variants}: Props) {

    const [varAmount, setVarAmount] = useState(Number(defaultAmount));
    const [varPrevAmount, setVarPrevAmount] = useState(Number(defaultAmount));

    const variants = raw_variants.map((cur_variant: any) => {
        return {
            id: cur_variant.node.id,
            imgSrc: cur_variant.node.image.url,
            price: cur_variant.node.price.amount,
            prevPrice: cur_variant.node.compareAtPrice.amount,
            selectedOptions: cur_variant.node.selectedOptions[0],
        }
    })

    const variant_id = useProductStore((state) => state.variant)

    useEffect(() => {

        const variant = variants.find((variant: Variant) => variant.id === variant_id)
        setVarAmount(variant ? variant.price : Number(defaultAmount))
        setVarPrevAmount(variant ? variant.prevPrice : Number(defaultAmount))

    }, [variant_id]);

    return (
        <Box>
            {varPrevAmount !== varAmount &&(<Typography variant="h6" component="h3" align="left" sx={{ textDecoration: 'line-through', color:'text.secondary' }}>
                {varPrevAmount}€
            </Typography>)}
            <Typography variant="h4" component="h3" align="left">
                {varAmount}€
            </Typography>
        </Box>
    )
}