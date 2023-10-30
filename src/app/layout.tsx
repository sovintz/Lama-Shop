import './globals.css'
import ThemeRegistry from "@/theme/ThemeRegistry";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/Footer";
import {headers} from "next/headers";

export default async function RootLayout({children}: { children: React.ReactNode }) {
    const headersList = headers();
    const hostname = headersList.get('host') ?? 'test.localhost:3000'

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
