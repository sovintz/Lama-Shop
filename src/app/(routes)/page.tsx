import {headers} from 'next/headers';
import Product from "@/components/Product";
import Header from "@/components/Header";
import Marketing from "@/components/Marketing";
import Guarantees from "@/components/Guarantees";
import {useProductStore} from "@/stores/productStore"
import FAQ from "@/components/FAQ";
import pageDict from "@/utils/pageConfig";
import {DescriptionsType, ImageContent, ProductType} from "@/utils/types";
import {Container} from "@mui/material";
import StoreInitializer from "@/components/StoreInitializer";

export default async function Home() {
    const headersList = headers();
    const hostname = headersList.get('host') ?? 'test.localhost:3000'
    const productId = pageDict[hostname].productId

    await useProductStore.getState().setProductID(productId)

    await useProductStore.getState().setProduct()
    const product: ProductType = useProductStore.getState().product
   const descriptionJSON: DescriptionsType = JSON.parse(product.descriptionHtml)

    await useProductStore.getState().setDescriptions(descriptionJSON)

    const media = product.media.edges

    return (
        <main>
            <StoreInitializer product={product} descriptions={descriptionJSON}/>

            <Header {...media[0].node as ImageContent}/>

            <Container maxWidth="lg">
                <Marketing media={media.slice(1)}/>
                <Product product={product}/>
                <Guarantees/>
                <FAQ/>
            </Container>
        </main>
    )
}





