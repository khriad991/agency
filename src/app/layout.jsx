
import './globals.css'
import Footer from "@/components/home/Footer";
import NextTopLoader from 'nextjs-toploader';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <NextTopLoader
          color="#20B15A"
          height={3}
          showSpinner={false}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
      />
      {children}
      <Footer/>
      </body>
    </html>
  )
}
