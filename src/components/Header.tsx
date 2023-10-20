import Image from "next/image";
import {Box} from "@mui/system";
import {Grid, Typography} from "@mui/material";

export default function Header() {
    return (
        <Box sx={{height: '100vh', position: 'relative', display:'flex'}}>

            <Image src={'https://cdn.shopify.com/s/files/1/0784/8584/8392/files/tshirt.jpg?v=1697797666'}
                   fill
                   alt={'Header image'}
                   layout={'cover'}
                   style={{
                       position: "absolute",
                       objectFit: "cover",
                       top: 0,
                       right: 0,
                       zIndex:0,
                   }}
            />
            <Grid container zIndex={20} alignItems={'center'} justifyContent={'center'} sx={{height: '100vh'}}>
                <Grid item xs={12} >
                    <Typography variant={'h1'} align={'center'}>Hero</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}