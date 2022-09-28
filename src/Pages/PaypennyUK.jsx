import React from "react";
import First from "../Components/UKPageComponents/FirstCardSection/First";
import Second from "../Components/UKPageComponents/SecondCardSection/Second";
import UKHero from "../Components/UKPageComponents/UKHero/UKHero";
import video from "../Assets/Untitled (1).mp4";
import MoneySubFooter from "../Components/MoneySubFooter/MoneySubFooter";
import Qr from "../Components/Qr/Qr";
import Footer from "../Components/Footer/Footer";
import NavBarUk from "../Components/NavBarUk/NavBarUk";
const PaypennyUK = () => {
  const heading = "Send Money to India with Paypenny";

  return (
    <div>
      <NavBarUk />
      <UKHero video={video} heading={heading} />
      <First />
      <Second />
      <Qr />
      <div className="divider container"></div>
      <MoneySubFooter />
      <div className="divider container"></div>
      <Footer
        link="contactUsUk"
        linkTC="tc-uk"
        linkPP="privacypolicy-uk"
        text="Trackon Canada private limited is registered in England and Wales with registration number 13791797."
      />
    </div>
  );
};

export default PaypennyUK;
