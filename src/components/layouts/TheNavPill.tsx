import { useState } from "react";

export default function NavPill() {
  const [items, setItems] = useState([
    'All',
    'Men',
    'Women'
  ])
  return (
    <>
      <div className="w-full">
        <div className="container mx-auto">
          <div className="w-50 flex">
            {
              items.map((item, index) => {
                return (
                  <button className="bg-black text-white rounded px-4 font-semibold py-1.5 mr-4 text-center" key={index}>{item}</button>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}