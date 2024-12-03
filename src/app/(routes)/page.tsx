import { Container } from '@mui/material'
import { headers } from 'next/headers'

import FAQ from '@/components/FAQ'
import Guarantees from '@/components/Guarantees'
import Header from '@/components/Header'
import Marketing from '@/components/Marketing'
import Product from '@/components/Product'
import Reviews from '@/components/Reviews/Reviews'
import StoreInitializer from '@/components/StoreInitializer'
import { useProductStore } from '@/stores/productStore'
import pageDict from '@/utils/pageConfig'
import { DescriptionsType, ImageContent, ProductType } from '@/utils/types'

export default async function Home() {
  const headersList = headers()
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
      <StoreInitializer product={product} descriptions={descriptionJSON} />

      <Header {...(media[0].node as ImageContent)} />

      <Container maxWidth='lg'>
        <Marketing media={media.slice(1)} />
        <Product product={product} />
        <Guarantees />
        <Reviews />
        <FAQ />
      </Container>
    </main>
  )
}
