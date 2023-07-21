'use client'

import React from "react";
import { Nav } from "@components/Nav";
import { options } from "../page";

async function getNftData(id) {
  const response = await fetch(
    `https://most-expensive-nft-artworks.p.rapidapi.com/artworks?page=2&sort=usd_price`,
    options,
    { next: { revalidate: 10 } }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}
console.log(getNftData)

const returnMarketValue = ({ params }) => {
  const d = getNftData(params.id);
  
  return (
    <div>
      <Nav />
      <div>
        <h1>{d.name}</h1>k
      </div>
    </div>
  );
};

export default returnMarketValue;
