import React from "react";

import book from "../../../PayPennyDocument/112-book-morph-flat.gif";
import BusinessComp from "../BusinessComp/BusinessComp";
import { MinuteBookData } from "./MinuteBookData";
const MinutesBooks = () => {
  return (
    <>
      <BusinessComp data={MinuteBookData} heading="Minutes Books" book={book} />
    </>
  );
};

export default MinutesBooks;
