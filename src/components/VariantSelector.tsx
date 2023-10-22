"use client"

import {Grid, Typography} from "@mui/material";
import {Box} from "@mui/system";
import Image from "next/image";
import React from "react";

export default function VariantSelector({raw_variants}) {

    const [activeVariant, setActiveVariant] = React.useState(-1);
    const maxVariants = raw_variants.length;

    const variants = raw_variants.map((cur_variant: any) => {
        return {
            id: cur_variant.node.id,
            imgSrc: cur_variant.node.image.url,
            price: cur_variant.node.price.amount,
            selectedOptions: cur_variant.node.selectedOptions[0],
        }
    })

    const handleVariantChange = (step: number) => {
        setActiveVariant(step);
    };

    return (
        <Grid container spacing={2} mb={4}>
            {variants.map((variant, index: number) => (
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
                            p:0.7,
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: activeVariant === index ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
                                pointerEvents: 'none', // Allow click through
                            }}
                        />
                        <Image src={variant.imgSrc}
                               width={60}
                               height={60}
                               alt={`Product variant ${index}`}

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