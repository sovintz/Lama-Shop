import {Button, Grid, Typography, Accordion, AccordionSummary, AccordionDetails} from "@mui/material";
import ImageCarousel from "@/components/ImageCarousel";
import VariantSelector from "@/components/VariantSelector";
import CheckoutCreate from "@/components/checkoutCreate";
import QuantityInput from "@/components/QuantityInput";
import AmountCalculator from "@/components/AmountCalculator";
import {ExpandMoreOutlined} from '@mui/icons-material'
import {DescriptionsType} from "@/utils/types";
import {useProductStore} from "@/stores/productStore";


export default function Product({product_data}: any) {

    const {product} = product_data
    const {
        productDescription,
        productSpecifications,
        specificationsTitle,
        amountText = "Amount",
        buyButtonText = "Buy Now"
    }: DescriptionsType = useProductStore.getState().descriptions


    return (
        <Grid container sx={{p: 2}}>
            <Grid item xs={12} justifyContent={"start"}>
                <Typography variant="h4" component="h2" align="left" id="scrollToId">
                    {product.title}
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <ImageCarousel raw_images={product.images.edges}/>
            </Grid>

            <Grid item xs={12}>
                <VariantSelector raw_variants={product.variants.edges}/>
            </Grid>

            <Grid item xs={12} justifyContent={"start"}
                  sx={{mb: 1, display: 'inline-flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <AmountCalculator defaultAmount={product.priceRange.minVariantPrice.amount}
                                  raw_variants={product.variants.edges} />
                <QuantityInput amountText={amountText}/>
            </Grid>


            <Grid item xs={12}>
                <CheckoutCreate buyButtonText={buyButtonText}/>
            </Grid>

            <Grid item xs={12} sx={{mb: 2}}>
                <Typography variant="body1" align="left">
                    {productDescription}
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreOutlined/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{specificationsTitle}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {productSpecifications}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid>


        </Grid>
    )
}