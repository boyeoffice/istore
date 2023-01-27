import Image from 'next/image'
import styles from '../../assets/styles/Home.module.css'
import images from '../../constants/images'

export default function Header() {
  return (
    <>
    <nav className="w-full border border-zinc-300 fixed top-0">
      <div className="container flex justify-between lg:px-0 px-4 py-5 mx-auto">
        <div className="brand">
          <span className="font-semibold font-sans-medium text-3xl">Discover</span>
        </div>
        <div className="search lg:relative mx-auto absolute px-4 md:px-9 lg:px-0 left-0 lg:top-0 top-[90px] flex w-full justify-between lg:w-4/12">
          <div className="container mx-auto flex">
            <div className="w-full">
              <input type="text" className="bg-[#F2F2F2] text-zinc-300 rounded-lg focus-visible:text-zinc-600 text-justify h-11 w-full pl-3" placeholder="Seach anything"/>
            </div>
            <div className="h-11 lg:w-[14%] w-[18%] ml-3 bg-black flex justify-center items-center rounded-lg">
              <Image src={images.FilterIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="right relative top-[5px]">
          <Image src={images.BellIcon} alt="" />
          <div className={`${styles.count} bg-black text-white rounded-full text-center w-5 h-5 text-xs absolute`}>1</div>
        </div>
      </div>
    </nav>
    </>
  )
}