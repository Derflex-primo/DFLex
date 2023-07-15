const url =
'https://opensea13.p.rapidapi.com/assets/?collection_slug=cryptopunks&order_direction=desc&limit=200&include_orders=false';
const options = {
headers: {
  'X-RapidAPI-Key': process.env.BLOCK_API_KEY,
  'X-RapidAPI-Host': 'opensea13.p.rapidapi.com',
},
};

export default async function getUSerData(){
  const response = await fetch(url, options, {
    cache: "no-cache"
  })

  const data = await response.json()
  if(!data){
    throw Error("failed")
  }
  return data
}