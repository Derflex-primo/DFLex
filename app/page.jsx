import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div className="container_row container_color grid_2">
      <div className="portrait_home">
        <Image
          src="/assets/images/dfx.png"
          width={500}
          height={500}
          alt="dfx_logo"
          className="portrait_home_design card-zoom-img"
        />
      </div>
      <div>
        <div className="text-center pb-5">
          <h1 className="home_title">Virtual Showcase: Exquisite NFTs</h1>
        </div>
        <div className="form_option">
          <img src="/assets/icons/figma.svg" alt="google logo" class="design" />
          <h1>Figma</h1>
        </div>
        <div className="form_option">
          <img
            src="/assets/icons/github-mark.svg"
            alt="google logo"
            class="design"
          />
          <h1>Github</h1>
        </div>
        <div className="form_option">
          <img
            src="/assets/icons/blender.svg"
            alt="google logo"
            class="design"
          />
          <h1>Blender</h1>
        </div>
        <div className="text-center text-slate-50">or</div>
        <div className="form_otherOption">
          <Link href='/intro'><h1 className="from_otherOptionSignInUp">Sign in</h1> </Link>
          <h1 className="from_otherOptionSignInUp">Sign up</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
