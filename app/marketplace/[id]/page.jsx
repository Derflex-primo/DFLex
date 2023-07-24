import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NavMarket } from "@components/NavMarket";
import { formatDate } from "@app/libs/formatter";
import { options } from "@app/libs/getData";



export async function getNftData(id) {
  const response = await fetch(
    `https://api.reservoir.tools/collections/v6?id=${id}`,
    options,
    { cache: "no-cache" }
  );

  if (!response.ok) {
    throw Error("Failed to fetch data");
  }

  return response.json();
}

const returnMarketValue = async ({ params: { id } }) => {
  const showDataUser = await getNftData(id);
  const data = Object.values(showDataUser);
  return (
    <div>
      <NavMarket></NavMarket>
      <h1>
        {data[0] &&
          data[0].map((d) => {
            return (
              <div className="relative">
                <div className="bg-black relative h-80 w-full ">
                  {d.image ? (
                    <Image
                      src={d.banner}
                      fill
                      sizes="100vh"
                      quality={75}
                      alt="Product banner"
                      className="object-cover"
                      priority={true}
                    />
                  ) : null}
                </div>
                <div className="">
                  {d.image ? (
                    <Image
                      src={d.image}
                      width={300}
                      height={300}
                      alt="Product img"
                      className="nft_img  absolute top-16 left-12 border-4 border-slate-100  drop-shadow-lg rounded-lg"
                    />
                  ) : null}
                </div>
                <div className="mt-20 flex justify-between mx-12 ">
                  <div className="flex">
                    <h1 className="text-3xl font-bold">{d.name}</h1>
                    <Image
                      src="/assets/icons/verified.svg"
                      width={18}
                      height={18}
                      className="ml-4 text-white"
                      alt="product"
                    />
                  </div>
                  <span className="flex text-baseline space-x-4 text-2xl">
                    <Link href="#">
                      <Image
                        src="/assets/icons/favorite.svg"
                        width={24}
                        height={24}
                        className="ml-2 mt-2 text-white"
                        alt="product"
                      />
                    </Link>
                    <Link href="#">
                      <Image
                        src="/assets/icons/cart.svg"
                        width={24}
                        height={24}
                        className="ml-2 mt-2 text-white"
                        alt="product"
                      />
                    </Link>
                    <Link href="#">
                      <Image
                        src="/assets/icons/share.svg"
                        width={24}
                        height={24}
                        className="ml-2 mt-2 text-white"
                        alt="product"
                      />
                    </Link>
                  </span>
                </div>
                <div className="ml-12 mt-4">
                  <h1>By {d.slug}</h1>
                  <span className="flex mt-2 text-lg space-x-4 ">
                    <h3>
                      Items <strong>{d.onSaleCount}</strong>
                    </h3>
                    <span>·</span>
                    <h3>
                      Created <strong>{formatDate(d.createdAt)}</strong>
                    </h3>
                    <span>·</span>
                    <h3>
                      Chain <strong>Ethereum</strong>
                    </h3>
                    <span>·</span>
                    <h3>
                      Category <strong>Art</strong>
                    </h3>
                  </span> 
                </div>
              </div>
            );
          })}
      </h1>
    </div>
  );
};

export default returnMarketValue;
