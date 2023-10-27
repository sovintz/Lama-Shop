import Image from 'next/image'
import styles from './page.module.css'
import {headers} from 'next/headers';
import {storefront} from "@/utils/shopfy-gql";
import CheckoutCreate from "@/components/checkoutCreate";
import Product from "@/components/Product";
import Header from "@/components/Header";
import Marketing from "@/components/Marketing";
import Guarantees from "@/components/Guarantees";
import {useProductStore} from "@/stores/productStore"
import FAQ from "@/components/FAQ";
import pageDict from "@/utils/pageConfig";
import {DescriptionsType} from "@/utils/types";
import {Container} from "@mui/material";


const fallbackDescription = {
    "mainTitle": "The Best Product",
    "marketingTitle": "Marketing Title",
    "marketingDescription1": "marketing description1",
    "marketingDescription2": "marketing description2",
    "productDescription": "Product description",
    "productSpecifications": "This are the product specifications"
}

export default async function Home() {

    const headersList = headers();
    const hostname = headersList.get('host') ?? 'test.localhost:3000'
    const productId = pageDict[hostname].productId
    console.log(productId)
    //const productId = "gid://shopify/Product/8621599228232"

    await useProductStore.getState().setProductID(productId)
    await useProductStore.getState().setProduct()
    const data: any = useProductStore.getState().product

    console.log("data", data)
    console.log("productId", useProductStore.getState().productID)

    const descriptionJSON: DescriptionsType = JSON.parse(data.product.description)
    const images = data.product.images.edges
    //console.log(images)

    await useProductStore.getState().setDescriptions(descriptionJSON)


    return (
        <main>

            <Header image={images[0].node}/>

            <Container maxWidth="lg">
                {/*TODO marketing images add from index 2*/}
                <Marketing images={[images[1].node, images[0].node]}/>
                <Product product_data={data}/>
                <Guarantees/>
                <FAQ/>
            </Container>
        </main>
    )
}





