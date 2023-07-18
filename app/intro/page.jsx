

import { Nav } from "@components/Nav";
import { NFTs } from "@components/Nfts";
import { Landing } from "@components/Landing";
import Footer from "@components/Footer";
const LandingPage = async () => {
  return (
    <>
    <div className="container_color">
      <Nav></Nav>
      <Landing></Landing>
      <NFTs></NFTs>
     </div>
    <Footer></Footer>
    </>
  );
};

export default LandingPage;
