'use client'

import Image from "next/image";
import Link from "next/link";
import "styles/global.css";
import useUserData from "@app/libs/getData";

 

const YourComponent = () => {
  const { data, isLoading, error } = useUserData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const showDataUser = Object.values(data);
  const date = showDataUser[0];

  return (
    <div className="flex-wrap flex flex-row pb-16">
      {date &&
        date.map((d) => {
          if (!d.image) {
            return null;
          }
          return (
            <div key={d.id}>
              <div className="nft  w-full max-w-xs max-h-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-12 mt-6">
                <Link href="#">
                  <div className="flex justify-center">
                    {d.image ? (
                      <Image
                        src={d.image}
                        width={300}
                        height={380}
                        alt="Product image"
                        className="nft_img mt-2 rounded-t-lg"
                      />
                    ) : null}
                  </div>
                </Link>
                <div className="px-2 pb-5">
                  <div className="mb-3">
                    <a href="#" className="flex">
                      <h5 className="text-lg mt-2 font-semibold tracking-tight text-gray-900 dark:text-white">
                        {d.name}
                      </h5>
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
                      <h3 className="text-stone-300 text-xs/[3px]">Floor price</h3>
                      <div className="flex">
                        <h3 className="text-white font-semibold mt-2">0.034 ETH</h3>
                        <Image
                          src="/assets/icons/ethh.svg"
                          width={10}
                          height={10}
                          className="ml-2 mt-2 text-white"
                          alt="product"
                        />
                      </div>
                      <div className="flex">
                        <h3 className="text-white font-semibold">0.099 USDT</h3>
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
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white ml-6">
                        {d.count}
                      </h3>
                      <h3 className="bg-blue-100 text-blue-800 text-xs font-semibold  px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
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
  );
};

export default YourComponent