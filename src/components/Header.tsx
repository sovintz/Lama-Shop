import Image from "next/image";
import {Box} from "@mui/system";
import {Grid, Typography} from "@mui/material";
import CallToActionButton from "@/components/CallToActionButton";
import {useProductStore} from "@/stores/productStore";
import {DescriptionsType} from "@/utils/types";


interface Props {
    image:{
        url:string
    }
}
export default function Header({image}:Props) {

    const {mainTitle = "Title", callToActionButtonText = "Button"}:DescriptionsType = useProductStore.getState().descriptions

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
                   }}
            />
            <Grid container zIndex={20} sx={{position: "absolute", top: "25%"}}>
                <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant={'h2'} component={'h1'} align={'center'}>
                        {mainTitle}
                    </Typography>
                    <CallToActionButton callToActionButtonText={callToActionButtonText}/>
                </Grid>
            </Grid>
        </Box>
    )
}