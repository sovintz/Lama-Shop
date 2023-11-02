import Image from "next/image";
import {Box} from "@mui/system";
import {Grid, Typography} from "@mui/material";
import CallToActionButton from "@/components/CallToActionButton";
import {useProductStore} from "@/stores/productStore";
import {DescriptionsType, ImageContent} from "@/utils/types";



export default function Header({image}:ImageContent) {

    const {mainTitle = "Title", subtitle = "Subtitle", callToActionButtonText = "Button"}:DescriptionsType = useProductStore.getState().descriptions

    return (
        <Box sx={{height: '100vh', position: 'relative', display:'flex'}}>

            <Image src={image.url}
                   alt={'Header image'}
                   fill
                   style={{
                       position: "absolute",
                       objectFit: "cover",
                       top: 0,
                       right: 0,
                       zIndex:0,
                       width: '100%',
                       height: '100%',
                   }}
            />
            <Grid container zIndex={20} sx={{position: "absolute", top: "25%"}}>
                <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant={'h2'} component={'h1'} align={'center'}>
                        {mainTitle}
                    </Typography>
                    <Typography variant={'subtitle1'} align={'center'}>
                        {subtitle}
                    </Typography>
                    <CallToActionButton callToActionButtonText={callToActionButtonText}/>
                </Grid>
            </Grid>
        </Box>
    )
}