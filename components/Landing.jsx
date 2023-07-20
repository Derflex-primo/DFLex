import Image from "next/image";
import Link from "next/link";

export const Landing = () => {
  return (
    <div className="container-row container_color  text-stone-300 ">
      <div className="metaverse">
        <Image
          src="/assets/images/metaverse.png"
          width={1380}
          height={80}
          className="rounded-lg opacity-9"
          priority
        ></Image>
        <div className="absolute left-20 bottom-24">
          <Image
            src="https://storage.googleapis.com/opensea-static/opensea-profile/3.png"
            width={60}
            height={60}
            className="bg-white rounded-lg"
            alt="tae"
          ></Image>
          <h1 className="text-4xl font-semibold mt-6">MULTIVERSE</h1>
          <h1>By Deogracias_Daryl</h1>
          <h1>10,2003 items - 0.16 ETH</h1>
          <h1 className="text-xl mt-6 py-4 rounded-xl bg-slate-500 text-center text-black font-semibold">
           <Link href='/marketplace'>16 items left</Link>  
          </h1>
        </div>
        <h1 className="absolute right-20 mt-12 text-sm">COLLECTION</h1>
      </div>
      <h1 className="ml-12 mt-14 text-2xl text-slate-200">New Trends</h1>
    </div>
  );
};
