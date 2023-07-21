import "styles/global.css"
import Image from "next/image"

export const Nav = () => {
  return (
  <div className="nav_container container_color ">
    <ul className="nav_layout mb-12">
        <h1 className='nav_logo text-2xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient'>DFLex</h1>
        <li>Cart</li>
        <li>Wallet</li>
        <li>Stocks</li>
        <li>Premium</li>
         <Image
         src=''
         width={40}
         height={40}
         className="bg-white rounded-full"
         alt="deo"></Image>
         
    </ul>
    <div className="border-gray-800 border-t-2 flex justify-between ">
        <ul className="flex ml-12 pt-8 space-x-10 text-baseline  text-stone-300">
          <li>All</li>
          <li>Collectibles</li>
          <li>Gamified</li>
          <li>Music</li>
          <li>Virtual Fashion</li>
          <li>PFPs</li>
          <li>One-of-one</li>
        </ul>
        <ul className="space-x-1 pt-6 mr-12 ">
      
          <form className="">
              <select className="px-4 py-2 rounded-lg" name="nft" id="nft">
                <option value="image">Image</option>
                <option value="meme">Meme</option>
                <option value="art">Art</option>
                <option value="PFPs">PFPs</option>
                <option value="music">music</option>
              </select>
            <input
              className=" ml-4 placeholder-gray-700 rounded-lg px-4 py-2 w-96 "
              placeholder="your value..."
              type="email"
              value=''
              required
            />
            <button
              className="text-white rounded-lg hover:bg-slate-700  bg-slate-600 ml-2 px-5 py-2"
              type="submit"
            >
              Search
            </button>
          </form>
       
        </ul>
      </div>
  </div>
  )
}
