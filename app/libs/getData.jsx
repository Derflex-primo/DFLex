const url =
'https://opensea13.p.rapidapi.com/assets/?collection_slug=cryptopunks&order_direction=desc&limit=20&include_orders=false';
const options = {
headers: {
  'X-RapidAPI-Key': "e6c31a0ab3mshd6395521b46f35bp11e78fjsnfe0185b1a93a",
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