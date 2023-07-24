'use client'

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Nav } from "@components/Nav";
import YourComponent from "@components/Nfts";
import { Landing } from "@components/Landing";
import { NavMarket } from "@components/NavMarket";
import Footer from "@components/Footer";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container_color">
      <Nav />
      <NavMarket />
      <Landing />
      <YourComponent />     
      </div>
      <Footer />
      <ReactQueryDevtools /> 
    </QueryClientProvider>
  );
}

export default MyApp;
