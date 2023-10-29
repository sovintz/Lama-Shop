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
import {DescriptionsType, ProductType} from "@/utils/types";
import {Container} from "@mui/material";
import StoreInitializer from "@/components/StoreInitializer";


export default async function Home() {

    const headersList = headers();
    const hostname = headersList.get('host') ?? 'test.localhost:3000'
    const productId = pageDict[hostname].productId
    //console.log(productId)
    //const productId = "gid://shopify/Product/8621599228232"

    await useProductStore.getState().setProductID(productId)
    await useProductStore.getState().setProduct()
    const product:ProductType = useProductStore.getState().product

    const descriptionJSON: DescriptionsType = JSON.parse(product.description)
    const images = product.images.edges

    await useProductStore.getState().setDescriptions(descriptionJSON)


    return (
        <main>
            <StoreInitializer product={product} descriptions={descriptionJSON}/>

            <Header image={images[0].node}/>

            <Container maxWidth="lg">
                <Marketing images={images.slice(1)}/>
                <Product product={product}/>
                <Guarantees/>
                <FAQ/>
            </Container>
        </main>
    )
}





