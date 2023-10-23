import {Button, Grid, Typography} from "@mui/material";
import ImageCarousel from "@/components/ImageCarousel";
import VariantSelector from "@/components/VariantSelector";
import CheckoutCreate from "@/components/checkoutCreate";
import QuantityInput from "@/components/QuantityInput";
import AmountCalculator from "@/components/AmountCalculator";

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

            <Grid item xs={12} justifyContent={"start"} sx={{mb:1, display:'inline-flex', justifyContent:'space-between', alignItems: 'center'}}>
                <AmountCalculator defaultAmount={product.priceRange.minVariantPrice.amount} raw_variants={product.variants.edges}/>
                <QuantityInput/>
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