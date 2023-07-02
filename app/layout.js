'use client'
import NavBar from '@/components/Navbar'
import './globals.css'
import { SessionProvider } from "next-auth/react"
import Footer from '@/components/Footer'



export default function RootLayout({session, children }) {
  return (
    <html lang="en">
      <body>
      <SessionProvider session={session}>
          <NavBar/>
          {children}
          <Footer/>
      </SessionProvider>
      </body>
     
    </html>
  )
}
