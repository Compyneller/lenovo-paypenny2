import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Footer from "./Components/Footer/Footer";
import TC from "./Pages/TC";
import ContactUs from "./Pages/ContactUs";
import Earn from "./Pages/Earn";
import CustomerJourney from "./Pages/CustomerJourney";
import PaypennyUK from "./Pages/PaypennyUK";
import PaypennyEU from "./Pages/PaypennyEU";
import NavBar from "./Components/NavBar/NavBar";
import SubFooter from "./Components/SubFooter/SubFooter";
import Qr from "./Components/Qr/Qr";
import Blogs from "./Pages/Blog/Blogs";
import Blog2 from "./Pages/Blog2/Blog2";
import MoneySubFooter from "./Components/MoneySubFooter/MoneySubFooter";
import ContactUsUk from "./Pages/ContactUsUk";
import TCUk from "./Pages/TCUk";
import TCUk2 from "./Pages/TCUk2";
import PrivacyPolicyUk from "./Pages/PrivacyPolicyUk";
import Docs from "./Pages/Docs/HomeScreen/Docs";
import DocBlog from "./Pages/Docs/DocBlog/DocBlog";
import OurStory from "./Pages/Docs/DocsAboutUs/OurStory";
import AOS from "aos";
import { useEffect, useState } from "react";
import DocCse from "./Pages/Docs/DocCse/DocCse";
import DocsLegal from "./Pages/Docs/DocsLegalDocuments/DocsLegal";
import PayPennyDocuments from "./Pages/Business/PayPennyDocument/PayPennyDocuments";
import CompanyLegalDocument from "./Pages/Business/CompanyLegalDocument/CompanyLegalDocument";
import CompanyPolicy from "./Pages/Business/CompanyPolicy/CompanyPolicy";
import MinutesBooks from "./Pages/Business/MinutesBooks/MinutesBooks";
import Policies from "./Pages/Business/Policies/Policies";
import PersonalDocuments from "./Pages/Business/PersonalDocuments/PersonalDocuments";
import Passport from "./Pages/Business/Passport/Passport";
import DrivingLicense from "./Pages/Business/DrivingLicense/DrivingLicense";
import AddressProof from "./Pages/Business/AddressProof/AddressProof";
import FintracLicense from "./Pages/Business/FincracLicense/FintracLicense";
import HR from "./Pages/Business/HR/HR";
import AccountTax from "./Pages/Business/AccountTax/AccountTax";
import Employees from "./Pages/Business/Employees/Employees";
import Incorporation from "./Pages/Business/Incorporation/Incorporation";
import Marketing from "./Pages/Business/Marketing/Marketing";
import DirectMarketing from "./Pages/Business/Marketing/DirectMarketing/DirectMarketing";
import DigitalMarketing from "./Pages/Business/Marketing/DigitalMarketing/DigitalMarketing";
import RingCentral from "./Pages/Business/RingCentral/RingCentral";
import BankAccount from "./Pages/Business/BankAccount/BankAccount";
import CV from "./Pages/Business/CV/CV";
import KD from "./Pages/Business/KnowledgeDoc/KD";
import Partnership from "./Pages/Business/Partnership/Partnership";
import Partner2020 from "./Pages/Business/2020-21/Partner2020";
import AccountActivitySheet from "./Pages/Business/AccountActivitySheet/AccountActivitySheet";
import AllActiveAccount from "./Pages/Business/2020-21/AllActivityAccountSheet/AllActiveAccount";
import Feb21 from "./Pages/Business/2020-21/Feb21/Feb21";
import March21 from "./Pages/Business/2020-21/March21/March21";
import April21 from "./Pages/Business/2020-21/April/April21";
import May21 from "./Pages/Business/2020-21/May21/May21";
import June21 from "./Pages/Business/2020-21/June21Data/June21";
import July21 from "./Pages/Business/2020-21/July/July21";
import Aug21 from "./Pages/Business/2020-21/Aug21/Aug21";
import Sept21 from "./Pages/Business/2020-21/Sept21/Sept21";
import BankStateMent21 from "./Pages/Business/BankStatement21/BankStateMent21";
import JanBank21 from "./Pages/Business/BankStatement21/Jan21/JanBank21";
import FebBank21 from "./Pages/Business/BankStatement21/Feb21/FebBank21";
import Mar21 from "./Pages/Business/BankStatement21/Mar21/Mar21";
import BankApril21 from "./Pages/Business/BankStatement21/April/BankApril21";
import BankMay21 from "./Pages/Business/BankStatement21/May21/BankMay21";
import BankJune21 from "./Pages/Business/BankStatement21/June21/BankJune21";
import BankJuly21 from "./Pages/Business/BankStatement21/July21/BankJuly21";
import BankAug21 from "./Pages/Business/BankStatement21/Aug21/BankAug21";
import BankSep21 from "./Pages/Business/BankStatement21/Sep21/BankSep21";
import BankOct from "./Pages/Business/BankStatement21/Oct21/BankOct";
import BankNov21 from "./Pages/Business/BankStatement21/Nov21/BankNov21";
import BankDec21 from "./Pages/Business/BankStatement21/Dec21/BankDec21";
import FInalReconciliation from "./Pages/Business/Final Reconciliation/FInalReconciliation";
import Jan21 from "./Pages/Business/Final Reconciliation/Jan21/Jan21";
import FinalFeb21 from "./Pages/Business/Final Reconciliation/FinalFeb21/FinalFeb21";
import FinalMar21 from "./Pages/Business/Final Reconciliation/FinalMar21/FinalMar21";
import FinalApril21 from "./Pages/Business/Final Reconciliation/FinalApril21/FinalApril21";
import FinalMay21 from "./Pages/Business/Final Reconciliation/FinalMay21/FinalMay21";
import FinalJune21 from "./Pages/Business/Final Reconciliation/FinalJune21/FinalJune21";
import FinalJuly21 from "./Pages/Business/Final Reconciliation/FinalJuly21/FinalJuly21";
import FinalAug21 from "./Pages/Business/Final Reconciliation/FinalAugust21/FinalAug21";
import FinalSept21 from "./Pages/Business/Final Reconciliation/FinalSep21/FinalSept21";
import FinalOct21 from "./Pages/Business/Final Reconciliation/FinalOct21/FinalOct21";
import FinalNov21 from "./Pages/Business/Final Reconciliation/FinalNov21/FinalNov21";
import FinalDec21 from "./Pages/Business/Final Reconciliation/FinalDec21/FinalDec21";
import Partner22 from "./Pages/Business/2021-22/Partner22";
import AccActivitySheet22 from "./Pages/Business/2021-22/Account Activity Sheet/AccActivitySheet22";
import Nov22 from "./Pages/Business/2021-22/Account Activity Sheet/Nov22/Nov22";
import CorporateContracts from "./Pages/Business/Partnership/CorporateContracts/CorporateContracts";
import Affle from "./Pages/Business/Partnership/CorporateContracts/Affle/Affle";
import AffleDoc1 from "./Pages/Business/Partnership/CorporateContracts/Affle/AffleDoc1/AffleDoc1";
import Apaylo from "./Pages/Business/Partnership/CorporateContracts/Apaylo/Apaylo";
import Compliance from "./Pages/Business/Partnership/CorporateContracts/Compliance/Compliance";
import ComplyAdvantage from "./Pages/Business/Partnership/CorporateContracts/Compliance/Complyadvantage/ComplyAdvantage";
import Remitone from "./Pages/Business/Partnership/CorporateContracts/Compliance/Remitone/Remitone";
import CryptoStableCoin from "./Pages/Business/Partnership/CorporateContracts/CryptoStableCoin/CryptoStableCoin";
import IT from "./Pages/Business/Partnership/CorporateContracts/IT/IT";
import Kiwitech from "./Pages/Business/Partnership/CorporateContracts/Kiwitech/Kiwitech";
import Onfido from "./Pages/Business/Partnership/CorporateContracts/Onfido/Onfido";
import Payment from "./Pages/Business/Partnership/CorporateContracts/PaymentGateway/Payment";
import axios from "axios";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    const fetchIP = async () => {
      const data = await axios.get("https://api.ipify.org?format=json");
      localStorage.setItem("ip", JSON.stringify(data?.data?.ip));
    };
    fetchIP();
  }, []);

  return (
    <div className="App">
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/privacypolicy-uk" element={<PrivacyPolicyUk />} />
          <Route path="/tc" element={<TC />} />
          <Route path="/tc-uk" element={<TCUk2 />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/contactusUk" element={<ContactUsUk />} />
          <Route path="/earns" element={<Earn />} />
          <Route path="/processflow" element={<CustomerJourney />} />
          <Route path="/uk" element={<PaypennyUK />} />
          <Route path="/eu" element={<PaypennyEU />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/docs/blog" element={<DocBlog />} />
          <Route path="/docs/our-story" element={<OurStory />} />
          <Route path="/docs/cse" element={<DocCse />} />
          <Route path="/docs/legal" element={<DocsLegal />} />
          <Route path="/documents" element={<PayPennyDocuments />} />
          <Route path="/cld" element={<CompanyLegalDocument />} />
          <Route path="/company-policy" element={<CompanyPolicy />} />
          <Route path="/minutebooks" element={<MinutesBooks />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/personal-documents" element={<PersonalDocuments />} />
          <Route path="/passport" element={<Passport />} />
          <Route path="/driving-license" element={<DrivingLicense />} />
          <Route path="/address-proof" element={<AddressProof />} />
          <Route path="/fintrac-license" element={<FintracLicense />} />
          <Route path="/hr" element={<HR />} />
          <Route path="/account-tax" element={<AccountTax />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/incorporation" element={<Incorporation />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/direct-marketing" element={<DirectMarketing />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/ring-central" element={<RingCentral />} />
          <Route path="/bank-account" element={<BankAccount />} />
          <Route path="/employees-cv" element={<CV />} />
          <Route path="/knowledge-document" element={<KD />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/2020-21" element={<Partner2020 />} />
          <Route
            path="/account-activity-sheet"
            element={<AccountActivitySheet />}
          />
          <Route
            path="/all-activity-account-sheet"
            element={<AllActiveAccount />}
          />
          <Route path="/feb21" element={<Feb21 />} />
          <Route path="/march21" element={<March21 />} />
          <Route path="/April21" element={<April21 />} />
          <Route path="/May21" element={<May21 />} />
          <Route path="/June21" element={<June21 />} />
          <Route path="/July21" element={<July21 />} />
          <Route path="/August21" element={<Aug21 />} />
          <Route path="/September21" element={<Sept21 />} />
          <Route path="/bank-statement" element={<BankStateMent21 />} />
          <Route
            path="/final-reconciliation"
            element={<FInalReconciliation />}
          />
          <Route path="/final-reconciliation-jan21" element={<Jan21 />} />
          <Route path="/final-reconciliation-feb21" element={<FinalFeb21 />} />
          <Route
            path="/final-reconciliation-march21"
            element={<FinalMar21 />}
          />
          <Route
            path="/final-reconciliation-April21"
            element={<FinalApril21 />}
          />
          <Route path="/final-reconciliation-May21" element={<FinalMay21 />} />
          <Route
            path="/final-reconciliation-July21"
            element={<FinalJune21 />}
          />
          <Route
            path="/final-reconciliation-June21"
            element={<FinalJuly21 />}
          />
          <Route
            path="/final-reconciliation-August21"
            element={<FinalAug21 />}
          />
          <Route
            path="/final-reconciliation-September21"
            element={<FinalSept21 />}
          />
          <Route
            path="/final-reconciliation-October21"
            element={<FinalOct21 />}
          />
          <Route
            path="/final-reconciliation-November21"
            element={<FinalNov21 />}
          />
          <Route
            path="/final-reconciliation-December21"
            element={<FinalDec21 />}
          />
          <Route path="/2021-22" element={<Partner22 />} />
          <Route
            path="/account-activity-sheet-22"
            element={<AccActivitySheet22 />}
          />
          <Route path="/November22" element={<Nov22 />} />
          <Route path="/corporate-contracts" element={<CorporateContracts />} />
          <Route path="/affle" element={<Affle />} />
          <Route path="/affle-doc1" element={<AffleDoc1 />} />
          <Route path="/apaylo" element={<Apaylo />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/Complyadvantage" element={<ComplyAdvantage />} />
          <Route path="/Remitone" element={<Remitone />} />
          <Route path="/crypto-stablecoin" element={<CryptoStableCoin />} />
          <Route path="/it" element={<IT />} />
          <Route path="/kiwitech" element={<Kiwitech />} />
          <Route path="/Onfido" element={<Onfido />} />
          <Route path="/payment-gateways" element={<Payment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
