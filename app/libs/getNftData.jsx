

// MARKETPLACE - DATA API
export const options = {
    method: "GET",
    headers: {
      accept: "*/*",
      "x-api-key": process.env.MARKET_KEY,
    },
  };
  
  export async function getNftData() {
    const response = await fetch(
      "https://api.reservoir.tools/collections/v6",
      options,
      { cache: "no-cache" }
    );
  
    if (!response.ok) {
      throw Error("Failed to fetch data");
    }
  
    return response.json();
  }
  