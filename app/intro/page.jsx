

import { Nav } from "@components/Nav";
import { NFTs } from "@components/Nfts";
import { Landing } from "@components/Landing";

const LandingPage = async () => {
  return (
    <div className="container_color">
      <Nav></Nav>
      <Landing></Landing>
      <h1 className="ml-12 mt-14 text-2xl text-slate-200">New Trends</h1>
      <div className="flex-wrap flex flex-row"> 
      <NFTs></NFTs>
      </div>
    </div>
  );
};

export default LandingPage;
