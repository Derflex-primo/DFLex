const url = 'https://api.reservoir.tools/collections/top-selling/v1';
const options = {
	method: 'GET',
	headers: {
     accept: '*/*',
     'x-api-key': '2a7e5476-c80d-58af-b601-a58d8f3c8abd'
	}
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