import {Grid, Typography} from "@mui/material";
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import {useProductStore} from "@/stores/productStore";

export default function Guarantees(){
    return(

        <Grid container sx={{mx:2}}>
            <Grid item xs={4} sx={{display: 'flex', }}>

                <EmojiEventsOutlinedIcon fontSize={'large'}/>
                <Typography variant={'subtitle1'} align={'center'}>Best Quality</Typography>

            </Grid>

        </Grid>
    );
}