import {AppBar, Toolbar, Typography} from "@mui/material";
import {Box} from "@mui/system";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
});

export default function Footer() {
    return (
        <AppBar position="static">
            <Typography variant="body2" component="div" align="center">Powered by</Typography>
            <Toolbar sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Box sx={{display: "flex", alignItems: "center"}}>
                    <Typography variant="h6" component="div" align="center" fontSize={25} fontFamily={bebasNeue.style.fontFamily}>Lama</Typography>
                    <Image
                        src="/images/logo.png"
                        width={50}
                        height={50}
                        alt="Lamashop"
                    />
                    <Typography variant="h6" component="div" align="center" fontSize={25} fontFamily={bebasNeue.style.fontFamily}>Shop</Typography>
                </Box>
            </Toolbar>
            <Typography variant="body2" align="center" sx={{flexGrow: 1}}>
                &copy; {new Date().getFullYear()}
            </Typography>
        </AppBar>
    )

}