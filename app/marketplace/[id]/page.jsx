import React from "react";
import { Nav } from "@components/Nav";
import { options } from "../page";


export async function getNftData({id}) {
  const response = await fetch(`https://api.reservoir.tools/collections/v6?id=${id}`, options, { cache: "no-cache" });

  if (!response.ok) {
    throw Error("Failed to fetch data");
  }

  return response.json();
}

const returnMarketValue = async ({params: {id}}) => {
  const data = await getNftData(id);
  
  return (
    <div>
      <Nav />
      <div>
        <h1>{data.name}</h1>
      </div>
    </div>
  );
};

export default returnMarketValue;
