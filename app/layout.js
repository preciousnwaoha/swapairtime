import './globals.css'
import { Inter } from 'next/font/google'
import AppContextProvider from "@/context/app-context"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SwapAirtime',
  description: 'Convert your airtime to cash from any network, hassle free.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      {/* <head></head> */}
      
      <body className={inter.className}>
    
       
       <AppContextProvider>
            {children}
       </AppContextProvider>
      
      </body>

    </html>
  )
}
