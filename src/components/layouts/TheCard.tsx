import Image from 'next/image'
import images from '@/constants/images'
import { url } from 'inspector'

export default function Card () {
  return (
    <>
    <div className="card">
      <div className="image">
        <div 
          style={{ backgroundImage: 'url(https://i.dummyjson.com/data/products/1/4.jpg)', backgroundBlendMode: 'ligthen' }}
          className="bg-cover bg-center w-[200px] h-[250px]"></div>
      </div>
    </div>
    </>
  )
}