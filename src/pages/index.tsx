import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Intercity</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full max-w-lg ml-auto mr-auto pl-4 pr-4 mt-8 border border-slate-300">
        <nav className="flex w-full justify-between h-10 item-center">
          <h4 className="text-2xl font-sans font-semibold">Discover</h4>
          <div className="flex self-center relative">
            <Image width="32" height="32" src="icons/bell-icon.svg" alt="" />
            <div className={`${styles.count} bg-black text-white rounded-full text-center w-4 text-xs absolute`}>1</div>
          </div>
        </nav>
      </div>
    </>
  )
}