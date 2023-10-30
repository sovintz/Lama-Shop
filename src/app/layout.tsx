import './globals.css'
import ThemeRegistry from "@/theme/ThemeRegistry";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/Footer";
import {headers} from "next/headers";
import pageDict from "@/utils/pageConfig";
import {useProductStore} from "@/stores/productStore";
import {DescriptionsType, ProductType} from "@/utils/types";

export default async function RootLayout({children}: { children: React.ReactNode }) {
    const headersList = headers();
    const hostname = headersList.get('host') ?? 'test.localhost:3000'
    const productId = pageDict[hostname].productId

    await useProductStore.getState().setProductID(productId)


    return (
        <html lang="en">
        <body>
        <GoogleAnalytics/>
        <ThemeRegistry options={{key: 'mui'}} hostname={hostname}>
            {children}
            <Footer/>
        </ThemeRegistry>
        </body>
        </html>
    )
}
