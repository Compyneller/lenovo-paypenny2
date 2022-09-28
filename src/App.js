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
import { useEffect } from "react";
import DocCse from "./Pages/Docs/DocCse/DocCse";
import DocsLegal from "./Pages/Docs/DocsLegalDocuments/DocsLegal";
import PayPennyDocuments from "./Pages/Business/PayPennyDocument/PayPennyDocuments";
import CompanyLegalDocument from "./Pages/Business/CompanyLegalDocument/CompanyLegalDocument";
import CompanyPolicy from "./Pages/Business/CompanyPolicy/CompanyPolicy";
import MinutesBooks from "./Pages/Business/MinutesBooks/MinutesBooks";
import Policies from "./Pages/Business/Policies/Policies";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
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
        </Routes>
        {/* <Qr />
        <div className="divider container"></div>
        {window.location.href === "https://paypenny.io/uk" ? (
          <MoneySubFooter />
        ) : (
          <SubFooter />
        )}

        <div className="divider container"></div>
        <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
