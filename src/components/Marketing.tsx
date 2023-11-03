import {Grid, Typography} from "@mui/material";
import Image from "next/image";
import React from "react";
import {DescriptionsType, ImageContent, VideoContent} from "@/utils/types";
import {useProductStore} from "@/stores/productStore";


interface Props {
    media: {
        node: ImageContent | VideoContent
    }[]
}

export default function Marketing({media}: Props) {

    const {
        marketingTexts
    }: DescriptionsType = useProductStore.getState().descriptions

    const order = (index: number, position: 1 | 2) => {
        const num = index * 2;
        const xs = 1 + num;
        const md = index % 2 === 0 ? 1 + num : 2 + num;

        return position === 1 ? {xs, md} : {xs, md: 1 + num};
    };

    const videoData = (index: number, height = 480) => {
        const video = media[index].node as VideoContent

        const videoAtResolution = video.sources.find((item) => item.height === height);

        return {
            url: videoAtResolution?.url || video.sources[0]?.url || '',
            mimeType: videoAtResolution?.mimeType || video.sources[0]?.mimeType || '',
            poster: "https://cdn.shopify.com/s/files/1/0784/8584/8392/files/preview_images/314846e6aefe4ef0a79b2ac202101d2b.thumbnail.0000000000.jpg?v=1698653074"
        };
    }

    return (
        <Grid container sx={{py: 2}} spacing={{xs: 2, md: 3}}>

            {(marketingTexts.map((item, index) => (
                <React.Fragment key={index}>

                    <Grid item xs={12} md={6} order={order(index, 1)}>
                        {media[index].node.mediaContentType === "IMAGE" ? (
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
                                src={media[index].node.image!.url}
                                alt={media[index].node.image!.altText}
                            />
                        ) : (
                            <video
                                style={{
                                    borderRadius: 16,
                                    width: '100%',
                                }}
                                controls
                                poster={videoData(index).poster}
                            >
                                <source
                                    src={videoData(index).url}
                                    type={videoData(index).mimeType}
                                />
                                Your browser does not support the video tag.

                            </video>
                        )
                        }

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

        </Grid>
    );
}