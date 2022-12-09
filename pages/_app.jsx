import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'
import '../styles/main.css'
import { Inter } from '@next/font/google'

const normal = Inter({
  style: ['normal'],
  subsets: ['latin'],
  weight: ['100', '900'],
  variable: '--inter-font'
})

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
