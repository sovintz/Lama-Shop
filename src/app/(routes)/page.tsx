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
    const data:any = useProductStore.getState().product

    console.log("data", data)
    console.log("productId", useProductStore.getState().productID)

    const descriptionJSON:DescriptionsType = JSON.parse(data.product.description)
    const images = data.product.images.edges
    //console.log(images)

    await useProductStore.getState().setDescriptions(descriptionJSON)



    return (
        <main >

            {/*<h1>{hostname}</h1>

            <div>{JSON.stringify(data)}</div>

            <CheckoutCreate/>*/}
            {/*Server-rendered component state access*/}
            {/*<h1>{JSON.stringify(useProductStore.getState().product)}</h1>
            <h1>{useProductStore.getState().variant}</h1>*/}
            <Header image={images[0].node}/>
            <Marketing image={images[1].node}/>
            <Product product_data={data}/>
            <Guarantees/>
            <FAQ/>

        </main>
    )
}





