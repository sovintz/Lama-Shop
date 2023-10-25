import Image from "next/image";
import {Box} from "@mui/system";
import {Button, Grid, Typography} from "@mui/material";
import CallToActionButton from "@/components/CallToActionButton";

interface Props {
    title: string
    image:{
        url:string
    }
}
export default function Header({title, image}:Props) {



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
            <Grid container zIndex={20} sx={{height: '100vh'}}>
                <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant={'h1'} align={'center'}>
                        {title}
                    </Typography>
                    <CallToActionButton/>
                </Grid>
            </Grid>
        </Box>
    )
}