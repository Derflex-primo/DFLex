
import { Nav } from "@components/Nav";
import Image from "next/image";
import getUSerData from "@app/libs/getData";


const LandingPage = async () => {
  const showDataUSer = await getUSerData()

   {showDataUSer.map(data => {
    return (
      <div>
        
        <Nav></Nav>
         <div className="container-row container_color  text-stone-300 ">
            <div>
               <ul className="flex ml-12 pt-6 space-x-10  text-stone-300">
                <li>All</li>
                <li>Collectibles</li>
                <li>Gamified</li>
                <li>Music</li>
                <li>Virtual Fashion</li>
                <li>PFPs</li>
                <li>One-of-one</li>
               </ul>
            </div>       
         
            <div className="metaverse">
                 <Image
                 src='/assets/images/metaverse.png'
                 width={1380}
                 height={80}
                 className="rounded-lg opacity-9"
                 priority>
                 </Image>
                 <div className="absolute left-20 bottom-24">
                  <Image
                  src='https://i.seadn.io/gcs/files/3fbc6b14d29824d3a100245245a182ea.png?w=500&auto=format'
                  width={60}
                  height={60}
                  className="bg-white rounded-lg"
                  alt="tae"></Image>
                  <h1 className="text-4xl font-semibold mt-6">MULTIVERSE</h1>
                   <h1>By Deogracias_Daryl</h1>
                   <h1>10,2003 items - 0.16 ETH</h1>
                   <h1 className="text-xl mt-6 py-4 rounded-xl bg-slate-500 text-center text-black font-semibold">16 items left</h1>
                  </div>
                  <h1 className="absolute right-20 mt-12 text-sm">COLLECTION</h1>
            </div>    
            <div className="flex justify-between mx-12 mt-12 spc">
                <ul className="flex space-x-10">
                    <li>Trends</li>
                    <li>Top NFT's</li>
                </ul>
                <ul className="flex space-x-10">
                    <li>Area</li>
                    <li>Pool</li>
                </ul>
            </div>
            <div>
        <div className="flex justify-between mx-12 mt-8 text-sm font-thin text-slate-500">
        <div className="flex space-x-96">
          <div className="flex space-x-4">
            <h3>Rank</h3>
            <h3>Collection</h3>
          </div>
          <div className="flex space-x-20">
            <h3>Floor Price</h3>
            <h3>Volume</h3>
          </div>
        </div>
      </div>
    
          <div className="flex space-x-96 mx-12 mt-8 " >
          <div className="flex space-x-10 items-center">
            <h1>{data.name}</h1>
            <Image
              src=""  
              width={60}
              height={60}
              alt="Nft-logo"
              className="bg-white rounded-lg"
            />
          </div>
          <div className="flex space-x-16 items-center">
            <h1>09.1 ETH</h1>
            <h1>0.98 ETH</h1>
          </div>
        </div> 

        
          

    </div>     
    </div>
    </div>
  )


   })}
    
}

export default LandingPage;

