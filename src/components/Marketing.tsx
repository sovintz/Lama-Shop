import {Grid, Typography} from "@mui/material";
import Image from "next/image";
import React from "react";
import {DescriptionsType} from "@/utils/types";
import {useProductStore} from "@/stores/productStore";
import {Box} from "@mui/system";

interface ImageData {
    node: {
        url: string;
        altText: string;
    }
}

interface Props {
    images: ImageData[];
}

export default function Marketing({images}: Props) {

    const {
        marketingTexts
    }: DescriptionsType = useProductStore.getState().descriptions

    const order = (index: number, position: 1 | 2) => {
        const num = index * 2;
        const xs = 1 + num;
        const md = index % 2 === 0 ? 1 + num : 2 + num;

        return position === 1 ? {xs, md} : {xs, md: 1 + num};
    };

    return (
        <Grid container sx={{py: 2}} spacing={{xs: 2, md: 3}}>

            {(marketingTexts.map((item, index) => (
                <React.Fragment key={index}>

                    <Grid item xs={12} md={6} order={order(index, 1)}>

                        <Image
                            width={1000}
                            height={1000}
                            style={{
                                objectFit: "cover",
                                top: 0,
                                right: 0,
                                zIndex: 0,
                                width: '100%',
                                height: '100%',
                                borderRadius: 16,
                            }}
                            src={images[index].node.url}
                            alt={images[index].node.altText}
                        />
                    </Grid>

                    <Grid item xs={12} md={6} order={order(index, 2)}
                          sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: {xs: "start", md: "center"},
                              pb: 2
                          }}>
                        <Typography variant="h5" component="h2" align="left">
                            {item.title}
                        </Typography>
                        <Typography variant="body1" align="left">
                            {item.description}
                        </Typography>
                    </Grid>


                </React.Fragment>
            )))}
            <Grid item xs={12} md={6} order={order(marketingTexts.length, 1)}>
                <video
                    style={{
                        borderRadius: 16,
                        width: '100%',
                    }}
                    controls
                    src="https://cdn.shopify.com/videos/c/vp/314846e6aefe4ef0a79b2ac202101d2b/314846e6aefe4ef0a79b2ac202101d2b.HD-720p-4.5Mbps-20029571.mp4"
                />
            </Grid>

        </Grid>
    );
}