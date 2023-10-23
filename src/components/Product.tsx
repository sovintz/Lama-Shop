import {Button, Grid, Typography} from "@mui/material";
import ImageCarousel from "@/components/ImageCarousel";
import VariantSelector from "@/components/VariantSelector";
import CheckoutCreate from "@/components/checkoutCreate";

export default function Product({product_data}:any) {

    const {product} = product_data
    const {productDescription} = JSON.parse(product.description)
    console.log(product)

    return (
        <Grid container sx={{p:2}}>
            <Grid item xs={12} justifyContent={"start"} >
                <Typography variant="h4" component="h2" align="left">
                    {product.title}
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <ImageCarousel raw_images={product.images.edges}/>
            </Grid>

            <Grid item xs={12}>
                <VariantSelector raw_variants={product.variants.edges}/>
            </Grid>

            <Grid item xs={12} justifyContent={"start"} mb={1}>
                <Typography variant="h6" component="h3" align="left">
                    {product.priceRange.minVariantPrice.amount} €
                </Typography>
            </Grid>

            <Grid item xs={12} justifyContent={"start"} mb={1}>
                <Typography variant="h6" component="h3" align="left">
                    {product.priceRange.minVariantPrice.amount} €
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <CheckoutCreate/>
            </Grid>

            <Grid item xs={12}>
                <Typography variant="body1" align="left">
                    {productDescription}
                </Typography>
            </Grid>


        </Grid>
    )
}