import {Avatar, Grid, SvgIcon, SvgIconTypeMap, Typography} from "@mui/material";
import {EmojiEventsOutlined, LocalShippingOutlined, FavoriteBorderOutlined} from  '@mui/icons-material'
import {OverridableComponent} from "@mui/types";
import {Box} from "@mui/system";

interface GuaranteeObject {
    icon: OverridableComponent<SvgIconTypeMap>,
    text: string
}


const content: GuaranteeObject[] = [
    {
        icon: EmojiEventsOutlined,
        text: "No Compromises in Quality"
    },
    {
        icon: FavoriteBorderOutlined,
        text: "100% Satisfaction Guarantee"
    },
    {
        icon: LocalShippingOutlined,
        text: "Free Worldwide Shipping"
    },
]

export default function Guarantees() {
    return (

        <Grid container sx={{px: 2, py:2}}>
            {content.map((c:GuaranteeObject, index:number) => (

                <Grid item xs={4} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} key={index}>
                    <Avatar sx={{backgroundColor:'primary.light', width: 56, height: 56}}>
                        <SvgIcon component={c.icon} sx={{ color:'primary.dark', }}  fontSize="large"/>
                    </Avatar>

                    <Typography variant={'subtitle2'} align={'center'} fontSize={'x-small'}>
                        {c.text}
                    </Typography>
                </Grid>
            ))}

        </Grid>
    );
}