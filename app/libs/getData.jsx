const url =
  "https://opensea13.p.rapidapi.com/assets/?collection_slug=cryptopunks&order_direction=desc&limit=20&include_orders=false";
const options = {
  headers: {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY,
    "X-RapidAPI-Host": "opensea13.p.rapidapi.com",
  },
};

export default async function getUSerData() {
  // const response = await fetch(url, options, {
  //   cache: "no-cache",
  // });
  // if (!response) {
  //   throw Error("failed");
  // }

  // mock 1 second delay
  await new Promise((res) => setTimeout(res, 1000));
  return {
    data: [
      {
        id: 1,
        name: "Foo Bar",
        image_thumbnail_url: "/images/dfx.png",
      },
      {
        id: 2,
        name: "John Doe",
        image_thumbnail_url: "/images/dfx.png",
      },
      {
        id: 3,
        name: "Jane Doe",
        image_thumbnail_url: "/images/dfx.png",
      },
    ],
  };
}
