import {Box} from "@mui/system";
import {AppBar, Toolbar, Typography} from "@mui/material";

export default function NavBar() {
    return (
        <Box sx={{flexGrow: 1, mb:2}}>
            <AppBar position="static" elevation={1}>
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{flexGrow: 1}} align="center">
                        LamaShop
                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>
    );
}