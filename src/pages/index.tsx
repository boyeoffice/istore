import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '../components/layouts/TheHeader'
import NavPill from '@/components/layouts/TheNavPill'
import Card from '@/components/layouts/TheCard'


const inter = Inter({ subsets: ['latin'] })

const items = [1,2,3,4,5,6,7,8,9]

export default function Home() {
  return (
    <>
      <Head>
        <title>Discover</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <NavPill />
      <div className="mt-5 container mx-auto">
        <div className="grid gap-4 grid-cols-2">
          {
            items.map((item,index) => {
              return (
                <article key={index} className="">
                  <a><Card /></a>
                </article>
              )
            })
          }
        </div>
      </div>
    </>
  )
}