import styles from '@/styles/Home.module.css'
import BellIcon from '../icons/Bell'
import FilterIcon from '../icons/Filter'

export default function Header() {
  return (
    <>
    <nav className="w-full">
      <div className="container flex justify-between lg:px-0 px-4 py-5 m-auto">
        <div className="brand flex self-center">
          <span className="font-semibold font-sans-medium text-3xl">Discover</span>
        </div>
        <div className="search lg:relative absolute px-4 left-0 lg:top-0 top-20 flex justify-between w-full lg:w-4/12">
          <div className="w-full">
            <input type="text" className="bg-[#F2F2F2] text-zinc-300 focus-visible:text-zinc-600 text-justify h-full w-full pl-3" placeholder="Seach anything"/>
          </div>
          <div className="h-14 w-1/5 ml-3 bg-black flex justify-center items-center rounded-lg">
            {/* <FilterIcon /> */}
          </div>
        </div>
        <div className="right relative flex self-center">
          {/* <BellIcon /> */}
          <div className={`${styles.count} bg-black text-white rounded-full text-center w-5 h-5 text-xs absolute`}>1</div>
        </div>
      </div>
    </nav>
    </>
  )
}