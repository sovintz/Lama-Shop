import {Grid, Typography} from "@mui/material";
import Image from "next/image";
import React from "react";
import {DescriptionsType} from "@/utils/types";
import {useProductStore} from "@/stores/productStore";

interface ImageData {
    url: string;
    altText: string;
}

interface Props {
    images: ImageData[];
}
export default function Marketing({images}:Props) {

    const {marketingDescription1, marketingDescription2, marketingTitle}:DescriptionsType = useProductStore.getState().descriptions

    return (
        <Grid container sx={{py:2}} spacing={{ xs: 2, md: 3 }}>

            <Grid item xs={12} md={6}>
                <Typography variant="body1" align="left">
                    {marketingDescription1}
                </Typography>
            </Grid>

            <Grid item xs={12} md={6}>

                <Image
                    width={1000}
                    height={1000}
                    style={{
                        objectFit: "contain",
                        top: 0,
                        right: 0,
                        zIndex: 0,
                        width: '100%',
                        height: '100%',
                        borderRadius:16,
                    }}
                    src={images[0].url}
                    alt={images[0].altText}
                />
            </Grid>

            <Grid item xs={12}>
                <Typography variant="h4" component="h2" align="left">
                    {marketingTitle}
                </Typography>
            </Grid>

            <Grid item xs={12} md={6}>

                <Image
                    width={1000}
                    height={1000}
                    style={{
                        objectFit: "contain",
                        top: 0,
                        right: 0,
                        zIndex: 0,
                        width: '100%',
                        height: '100%',
                        borderRadius:16,
                    }}
                    src={images[1].url}
                    alt={images[1].altText}
                />
            </Grid>

            <Grid item xs={12} md={6}>
                <Typography variant="body1" align="left">
                    {marketingDescription2}
                </Typography>
            </Grid>
        </Grid>
    );
}