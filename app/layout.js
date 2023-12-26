import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'
import Header1 from './components/Header1'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OYO: India Best Online Hotel Booking Site for Sanitized Stays',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
      {/* <Header1 /> */}
      {children}
      {/* <Footer /> */}
      </body>
    </html>
  )
}
