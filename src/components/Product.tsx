import {Button, Grid, Typography} from "@mui/material";

export default function Product({product_data}) {

    const {product} = product_data
    console.log(product)

    return (
        <Grid container>
            <Grid item xs={12} justifyContent={"start"} >
                <Typography variant="h4" component="h2" align="left">
                    {product.title}
                </Typography>
            </Grid>
            <Grid item xs={12} justifyContent={"start"} >
                <Typography variant="h6" component="h3" align="left">
                    {product.priceRange.minVariantPrice.amount}
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography variant="body1" align="left">
                    {product.description}
                </Typography>
            </Grid>
        </Grid>
    )
}