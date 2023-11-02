"use client"

import {Grid, Typography} from "@mui/material";
import {Box} from "@mui/system";
import Image from "next/image";
import React, {useEffect} from "react";
import {useProductStore} from "@/stores/productStore";
import {Variant} from "@/utils/types";

interface Props {
    raw_variants: {
        node: Variant
    }[]
}
 interface LocalVariant {
    id: string,
    imgSrc: string,
    price: string,
    selectedOptions: {
        name: string,
        value: string
    }
}

export default function VariantSelector({raw_variants}: Props) {

    const [activeVariant, setActiveVariant] = React.useState(0);

    const variants = raw_variants.map((cur_variant: {node:Variant}) => {
        return {
            id: cur_variant.node.id,
            imgSrc: cur_variant.node.image.url,
            price: cur_variant.node.price.amount,
            selectedOptions: cur_variant.node.selectedOptions[0],
        }
    })

    const changeVariant = (step: number) => {
        setActiveVariant(step);
        useProductStore.getState().setVariant(variants[step].id)
        useProductStore.getState().setVariantIndex(step)
    }

    const handleVariantChange = (step: number) => {
        useProductStore.getState().setVariantClicked(true)
        changeVariant(step)
    };


    useEffect(() => {
        changeVariant(0)
    }, [])


    return (
        <Grid container spacing={2} mb={2}>
            {variants.map((variant: LocalVariant, index: number) => (
                <Grid item key={index}>
                    <Box onClick={() => handleVariantChange(index)}
                         sx={{
                             overflow: 'hidden',
                             borderRadius: 4,
                             position: 'relative',
                             backgroundColor: 'white',
                             display: 'flex',
                             justifyContent: 'center',
                             alignItems: 'center',
                             p: 0.7,
                             cursor: 'pointer',
                         }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                zIndex: 50,
                                backgroundColor: activeVariant === index ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
                                pointerEvents: 'none', // Allow click through
                            }}
                        />
                        <Image src={variant.imgSrc}
                               width={55}
                               height={55}
                               alt={`Product variant ${index}`}
                               style={{margin: 5}}
                        />
                    </Box>

                    <Typography variant="subtitle2" align="center">
                        {variant.selectedOptions.value}
                    </Typography>
                </Grid>
            ))}
        </Grid>
    )
}