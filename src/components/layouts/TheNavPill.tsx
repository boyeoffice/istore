import { useState } from "react";

export default function NavPill() {
  const [items, setItems] = useState([
    'All',
    'Men',
    'Women',
    'Kids'
  ]);

  const [indexItem, setIndex] = useState(0);

  const handleButton = (e: any, index: number) => {
    e.preventDefault();
    setIndex(index);
  }

  return (
    <>
      <div className="w-full">
        <div className="container mx-auto">
          <div className="px-4 lg:px-0 flex w-full justify-between lg:justify-start">
            {
              items.map((item, index) => {
                return (
                  <button
                    className={`${index === indexItem ? 'bg-black text-white':'bg-[#F2F2F2]'} text-base rounded px-4 font-[400] py-1.5 mr-4 text-center`}
                    key={index}
                    onClick={(e) => handleButton(e, index)}>
                      {item}
                  </button>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}