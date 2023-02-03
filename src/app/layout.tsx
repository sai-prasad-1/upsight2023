import Footer from '@/components/_partials/Footer'
import './globals.css'
import Navbar from '@/components/_partials/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <head />

      <body className=''>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
