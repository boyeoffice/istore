import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import BellIcon from '../components/icons/Bell'


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
      <div className="h-full max-w-lg ml-auto mr-auto pl-4 pr-4 pt-8 pb-8 border border-slate-300">
        <nav className="flex w-full justify-between h-auto item-center pb-4 pt-4 relative">
            <h4 className="text-2xl  leading-3 font-semibold flex self-center">Discover</h4>
          <div className="relative top-1">
            <BellIcon />
            <div className={`${styles.count} bg-black text-white rounded-full text-center w-5 h-5 text-xs absolute`}>1</div>
          </div>
        </nav>
      </div>
    </>
  )
}