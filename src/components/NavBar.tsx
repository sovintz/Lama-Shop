import {Box} from "@mui/system";
import {AppBar, Toolbar, Typography} from "@mui/material";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
});

export default function NavBar() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="fixed" elevation={2}>
                <Toolbar sx={{display: "flex", justifyContent: "center"}}>
                    <Typography variant="h6" component="div" align="center" fontSize={25} fontFamily={bebasNeue.style.fontFamily}>Lama
                    </Typography>
                    <Image
                        src="/images/logo.png"
                        width={50}
                        height={50}
                        alt="Lamashop"
                    />
                    <Typography variant="h6" component="div" align="center" fontSize={25} fontFamily={bebasNeue.style.fontFamily}>Shop
                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>
    );
}