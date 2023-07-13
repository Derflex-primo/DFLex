
export async function GET(request) {
   
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'X-API-KEY': 'WQpOVxthN4EjraGINDVk4lrjXJOab27M'}
      };
      
      fetch('https://api.blockspan.com/v1/collections?chain=eth-main', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));  

    return new Response (options)
}
