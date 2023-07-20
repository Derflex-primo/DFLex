import React from 'react'
import { Nav } from '@components/Nav'


const url =
  'https://most-expensive-nft-artworks.p.rapidapi.com/artworks?page=2&sort=usd_price'
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "744b45fd88msh35118922d91f9bcp1969a9jsn8ed76d755a3e",
    "X-RapidAPI-Host": "most-expensive-nft-artworks.p.rapidapi.com",
  },
};

async function getNftData(id) {
    const response = await fetch(`url/${id}`, options, {
      cache: "no-cache",
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return response.json();
  }


const returnMarketValue = () => {
const data = getNftData(id)
  return (
    <div>
        <Nav></Nav>
        <div>
            <h1>
                {data.description}
                {data.name}
            </h1>
        </div>
   
    </div>
  )
}

export default returnMarketValue