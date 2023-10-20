import {Box} from "@mui/system";
import {AppBar, Toolbar, Typography} from "@mui/material";

export default function NavBar() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="fixed" elevation={2}>
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{flexGrow: 1}} align="center">
                        LamaShop
                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>
    );
}