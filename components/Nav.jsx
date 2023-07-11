import "styles/global.css"
import Link from 'next/link'
import Image from "next/image"

export const Nav = () => {
  return (
  <div className="nav_container container_color">
    <ul className="nav_layout ">
        <h1 className='nav_logo text-2xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient'>DFLex</h1>
        <li>Cart</li>
        <li>Wallet</li>
        <li>Stocks</li>
        <li>Premium</li>
         <Image
         src=''
         width={40}
         height={40}
         className="bg-white rounded-full"></Image>
    </ul>
  </div>
  )
}
