import React from "react";
import { Nav } from "@components/Nav";
import Link from "next/link";
import Image from "next/image";
import "styles/global.css";

function truncateText(text, limit) {
  if (text.length > limit) {
    return text.slice(0, limit) + "...";
  }
  return text;
}
function formatUSDWithComma(number) {
  return number.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

export const options = {
  method: "GET",
  headers: {
    accept: "*/*",
    "x-api-key": process.env.MARKET_KEY,
  },
};

export async function getNftData() {
  const response = await fetch(
    "https://api.reservoir.tools/collections/v6",
    options,
    { cache: "no-cache" }
  );

  if (!response.ok) {
    throw Error("Failed to fetch data");
  }

  return response.json();
}

const marketPlace = async () => {
  const showDataUSer = await getNftData();
  const data = Object.values(showDataUSer);
  const date = data[0];
  console.log(date);

  return (
    <>
      <Nav></Nav>
      <div className="">
        <div className="container_color flex-wrap flex flex-row pb-16 justify-center ">
          {date &&
            date.map((d) => {
              return (
                <div key={d.id}>
                  <div className="nft max-w-xs max-h-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-x-1 mb-4 mx-4 mt-4 ">
                    <div className="min-h-fit mt-2 mx-2  ">
                      <Link
                        href={`/marketplace/${d.id}`}
                        className="image-container   overflow-hidden">
                        {d.image ? (
                          <Image
                            src={d.image}
                            width={300}
                            height={300}
                            alt="Product image"
                            className="nft_img  rounded-t-lg"
                          />
                        ) : null}
                      </Link>
                    </div>
                    <div className="px-2 pb-5">
                      <div className="mb-3">
                        <a href="#" className="flex">
                          <h1 class="text-lg mt-2 font-semibold tracking-tight text-gray-900 dark:text-white">
                            {truncateText(d.name, 20)}
                          </h1>
                          <Image
                            src="/assets/icons/verified.svg"
                            width={18}
                            height={18}
                            className="ml-2 mt-2 text-white"
                            alt="product"
                          />
                        </a>
                      </div>

                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-stone-300 text-xs/[3px]">
                            Floor price
                          </h3>
                          <div className="flex">
                            <h3 className="text-white font-semibold mt-2">
                              0.034 ETH
                            </h3>
                            <Image
                              src="/assets/icons/ethh.svg"
                              width={10}
                              height={10}
                              className="ml-2 mt-2 text-white"
                              alt="product"
                            />
                          </div>
                          <div className="flex">
                            <h3 className="text-white font-semibold">
                              {formatUSDWithComma(d.ownerCount)}
                            </h3>
                            <Image
                              src="/assets/icons/tether.svg"
                              width={16}
                              height={16}
                              className="ml-2 mx-1 text-white"
                              alt="product"
                            />
                          </div>
                        </div>

                        <div className="flex-col mt-2">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white justify-end flex">
                            {d.ownerCount}
                          </h3>
                          <h3 className="bg-blue-100 text-blue-800 text-xs font-semibold  px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">
                            collections
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default marketPlace;
