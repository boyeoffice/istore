import styles from '@/styles/Home.module.css'
import BellIcon from '../icons/Bell'
import FilterIcon from '../icons/Filter'

export default function Header() {
  return (
    <>
    <nav className="w-full">
      <div className="container flex justify-between lg:px-0 px-4 py-5 m-auto">
        <div className="brand">
          <span className="leading-3 font-semibold text-2xl">Discover</span>
        </div>
        <div className="search lg:relative absolute px-4 left-0 lg:top-0 top-20 flex justify-between w-full lg:w-4/12">
          <div className="w-full">
            <input type="text" className="bg-transparent text-justify h-full w-full pl-3" placeholder="Seach anything"/>
          </div>
          <div className="h-14 w-1/5 ml-3 bg-black flex justify-center items-center rounded-lg">
            <FilterIcon />
          </div>
        </div>
        <div className="right relative">
          <BellIcon />
          <div className={`${styles.count} bg-black text-white rounded-full text-center w-5 h-5 text-xs absolute`}>1</div>
        </div>
      </div>
    </nav>
      {/* <div className="h-full max-w-lg ml-auto mr-auto pl-4 pr-4 pt-8 pb-8 border border-slate-300">
        <nav className="flex w-full justify-between h-auto item-center pb-4 pt-4 relative">
            <h4 className="text-2xl  leading-3 font-semibold flex self-center">Discover</h4>
          <div className="relative top-1">
            <BellIcon />
            <div className={`${styles.count} bg-black text-white rounded-full text-center w-5 h-5 text-xs absolute`}>1</div>
          </div>
        </nav>
        <div className="flex justify-between h-auto pt-4 pb-4">
          <div className="bg-slate-200 h-14 rounded-lg w-4/5">
            <div></div>
            <div className="h-full">
              <input type="text" className="bg-transparent text-justify h-full" placeholder="Seach anything"/>
            </div>
          </div>
          <div className="h-14 w-1/5 ml-3 bg-black flex justify-center items-center rounded-lg">
            <FilterIcon />
          </div>
        </div>
      </div> */}
    </>
  )
}