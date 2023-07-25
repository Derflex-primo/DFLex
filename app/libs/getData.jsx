"use client";

// INTRO - DATA API
import { useQuery } from "react-query";

const url = "https://api.reservoir.tools/collections/top-selling/v1";
const option = {
  method: "GET",
  headers: {
    accept: "*/*",
    "x-api-key": process.env.DATA_KEY,
  },
};

const fetchUserData = async () => {
  const response = await fetch(url, option, {
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

const useUserData = () => {
  return useQuery("userData", fetchUserData);
};

export default useUserData;
