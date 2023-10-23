import {AppBar, Toolbar, Typography} from "@mui/material";

export default function Footer() {
    return (
        <AppBar position="static" sx={{ background: '#202020' }}>
            <Toolbar>
                <Typography variant="body2" color="white" align="center" sx={{flexGrow: 1}}>
                    Lama Shop &copy; {new Date().getFullYear()}
                </Typography>
            </Toolbar>
        </AppBar>
    )

}