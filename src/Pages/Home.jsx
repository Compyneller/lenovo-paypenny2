import React from "react";
import Ambassador from "../Components/Ambassador/Ambassador";
import Benefits from "../Components/Benfits/Benefits";
import BlogComp from "../Components/BlogComp/BlogComp";
import CreateAccount from "../Components/CreateAccount/CreateAccount";
import HeroArea from "../Components/HeroArea/HeroArea";
import NavBar from "../Components/NavBar/NavBar";
import Qr from "../Components/Qr/Qr";
import Section1 from "../Components/Section1/Section1";
import Section2 from "../Components/Section2/Section2";
import Why from "../Components/Why/Why";
import SubFooter from "../Components/SubFooter/SubFooter";
import Footer from "../Components/Footer/Footer";
import DocNav from "../DocsComponents/DocNavBar/DocNav";
import DocsMobileNavBar from "../DocsComponents/DocNavBar/DocsMobileNavBar";

const Home = () => {
  return (
    <>
      {window.innerWidth > 950 ? <DocNav /> : <DocsMobileNavBar />}

      <HeroArea />
      <Section1 />
      <CreateAccount />
      <Benefits />
      <Why />
      <Section2 />
      {/* <Qr /> */}

      <Ambassador />
      <Qr />
      <div className="divider container"></div>
      <SubFooter />
      <div className="divider container"></div>
      <Footer
        link="contactus"
        linkTC="tc"
        linkPP="privacypolicy"
        text="Trackon Canada Private Limited registered in Alberta,Canada."
      />
    </>
  );
};

export default Home;
