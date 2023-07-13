import Image from "next/image" 

export const Rankin = () => {
  return (
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

        <div className="flex space-x-96 mx-12 mt-8 ">
          <div className="flex space-x-10 items-center">
          <h1>1</h1>
          <Image
          src=''
          width={60}
          height={60}
          className="bg-white rounded-lg"></Image>
          </div>
          <div className="flex space-x-16 items-center">
          <h1>0.48 ETH</h1>
          <h1>0.98 ETH</h1>
          </div>
        </div> 
    </div>
  )
}
