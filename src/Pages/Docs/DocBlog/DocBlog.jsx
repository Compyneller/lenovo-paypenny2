import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogSec2 from "../../../DocsComponents/DocBlogSections/BlogSec2";
import BlogSec3 from "../../../DocsComponents/DocBlogSections/BlogSec3";
import BlogSec4 from "../../../DocsComponents/DocBlogSections/BlogSec4";
import BlogSec5 from "../../../DocsComponents/DocBlogSections/BlogSec5";
import BlogSec6 from "../../../DocsComponents/DocBlogSections/BlogSec6";
import Section1 from "../../../DocsComponents/DocBlogSections/Section1";
import DocNav from "../../../DocsComponents/DocNavBar/DocNav";
import DocsMobileNavBar from "../../../DocsComponents/DocNavBar/DocsMobileNavBar";

const DocBlog = () => {
  return (
    <>
      {window.innerWidth > 950 ? <DocNav /> : <DocsMobileNavBar />}
      <div className="w-100 bg-light py-5" style={{ minHeight: "100vh" }}>
        <Container>
          <h1>Crypto the future?</h1>
          <br />
          <h5 className="text-secondary">
            Bitcoin | crypto | cryptocurrency | crypto market 2022 | blockchain
            technology | digital money | Ethereum value | bitcoin value |
            cryptocurrency in India | cryptocurrency mining | cryptocurrency
            future | cryptocurrency
          </h5>
          <br />
          <Section1 />
          <br />
          <br />
          <br />
          <BlogSec2 />
          <br />
          <br />
          <br />
          <BlogSec3 />
          <br />
          <br />
          <br />
          <BlogSec4 />
          <br />
          <br />
          <br />
          <BlogSec5 />
          <br />
          <br />
          <br />
          <BlogSec6 />
          <br />
          <br />
          <br />
        </Container>
      </div>
    </>
  );
};

export default DocBlog;
