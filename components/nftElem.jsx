 


export const elemUser = async ({ data }) => {
    try {
      const url =
        'https://opensea13.p.rapidapi.com/assets/?collection_slug=cryptopunks&order_direction=desc&limit=200&include_orders=false';
      const options = {
        headers: {
          'X-RapidAPI-Key': 'a7322f9585mshdafccf8759bd704p1f29a3jsne58ed93219f1',
          'X-RapidAPI-Host': 'opensea13.p.rapidapi.com',
        },
      };
  
      const response = await fetch(url, options);
  
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      if(data)
        return {
          props:  {data}
        };
      } else {
        throw new Error('Error fetching data');
      }
    } catch (error) {
      console.error(error);
      return {
        props: {
          data: [],
        },
      };
    }
  }

export const userElem = ({ data }) => {
     return (
        <>
         {
         data.map((item, index) => {
            return (
                <div className="flex space-x-96 mx-12 mt-8 ">
        <div className="flex space-x-10 items-center">
          <h1>{item.token_id}</h1>
          <Image
            src={item.image_thumbnail_url} // Replace with the actual image URL
            width={60}
            height={60} alt='Nft-logo'
            className="bg-white rounded-lg"
          />
        </div>
        <div className="flex space-x-16 items-center">
          <h1>0.48 ETH</h1>
          <h1>0.98 ETH</h1>
        </div>
       </div>
            )
         })
         }
        </>
     )
  }

