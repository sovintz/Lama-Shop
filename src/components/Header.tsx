import Image from "next/image";
import {Box} from "@mui/system";
import {Button, Grid, Typography} from "@mui/material";

interface Props {
    title: string
    image:{
        url:string
    }
}
export default function Header({title, image}:Props) {
    console.log(title)
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
                    <Button variant={"contained"} sx={{ mt: 3 }}>Discover more</Button>
                </Grid>
            </Grid>
        </Box>
    )
}