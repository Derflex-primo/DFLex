const url =
'https://opensea13.p.rapidapi.com/assets/?collection_slug=cryptopunks&order_direction=desc&limit=20&include_orders=false';
const options = {
headers: {
  'X-RapidAPI-Key': "a7322f9585mshdafccf8759bd704p1f29a3jsne58ed93219f1",
  'X-RapidAPI-Host': 'opensea13.p.rapidapi.com',
},

};

export default async function getUSerData(){
  const response = await fetch(url, options, {
    cache: "no-cache"
  })
  if(!response){
    throw Error("failed")
  }

  return response.json()
}