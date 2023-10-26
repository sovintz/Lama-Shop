import {Avatar, Grid, SvgIcon, SvgIconTypeMap, Typography} from "@mui/material";
import {EmojiEventsOutlined, LocalShippingOutlined, FavoriteBorderOutlined} from  '@mui/icons-material'
import {OverridableComponent} from "@mui/types";
import {Box} from "@mui/system";
import {DescriptionsType, GuaranteeObject} from "@/utils/types";
import {useProductStore} from "@/stores/productStore";


const icons = [EmojiEventsOutlined,FavoriteBorderOutlined,LocalShippingOutlined]

export default function Guarantees() {

    const {guarantees = []}:DescriptionsType = useProductStore.getState().descriptions

    return (

        <Grid container sx={{px: 2, py:2}}>
            {guarantees.map((c:GuaranteeObject, index:number) => (

                <Grid item xs={4} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} key={index}>
                    <Avatar sx={{backgroundColor:'primary.light', width: 56, height: 56}}>
                        <SvgIcon component={icons[index]} sx={{ color:'primary.dark', }}  fontSize="large"/>
                    </Avatar>

                    <Typography variant={'subtitle2'} align={'center'} fontSize={'x-small'}>
                        {c.text}
                    </Typography>
                </Grid>
            ))}

        </Grid>
    );
}