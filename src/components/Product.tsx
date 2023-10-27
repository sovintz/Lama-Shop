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
        buyButtonText = "Buy Now",
        errorMessages,
    }: DescriptionsType = useProductStore.getState().descriptions


    return (
        <Grid container spacing={3}>

            <Grid item xs={12} justifyContent={"start"}>
                <Typography variant="h4" component="h2" align="left" id="scrollToId">
                    {product.title}
                </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
                <Grid item>
                    <ImageCarousel raw_images={product.images.edges}/>
                </Grid>

                <Grid item>
                    <VariantSelector raw_variants={product.variants.edges}/>
                </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
                <Grid container>
                    <Grid item xs={12} justifyContent={"start"} order={{xs:1, md:2}}
                          sx={{
                              mb: 1,
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              flexGrow: 1
                          }}>
                        <AmountCalculator defaultAmount={product.priceRange.minVariantPrice.amount}
                                          raw_variants={product.variants.edges}/>
                        <QuantityInput amountText={amountText}/>
                    </Grid>


                    <Grid item xs={12} order={{xs:2, md:3}}>
                        <CheckoutCreate buyButtonText={buyButtonText} snackbarText={errorMessages?.noCheckout ?? 'Error'}/>
                    </Grid>

                    <Grid item xs={12} sx={{mb: 2}} order={{xs:3, md:1}}>
                        <Typography variant="body1" align="left">
                            {productDescription}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} order={{xs:4, md:4}}>
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
            </Grid>
        </Grid>
    )
}