import Image from 'next/image'
import images from '@/constants/images'
import { url } from 'inspector'

export default function Card () {
  return (
    <>
      <div className="card hover:shadow-lg"> 
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://i.dummyjson.com/data/products/1/2.jpg" alt="stew" className="h-32 sm:h-48 w-full object-cover" />
        <div className="m-4">
          <span className="font-bold">5 Bean Chili Stew</span>
          <span className="block text-gray-500 text-sm">Recipe by Mario</span>
        </div>
        <div className="badge">
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>       */}
          <span>25 mins</span>
        </div>
      </div>
    </>
  )
}