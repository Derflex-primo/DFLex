const url = 'https://api.reservoir.tools/collections/top-selling/v1';
const options = {
	method: 'GET',
	headers: {
     accept: '*/*',
     'x-api-key': process.env.DATA_KEY
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