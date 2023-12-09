import React from "react";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Invoice from "../../invoice/Invoice";

function PrintInvoice() {
  return (
    <>
      <Header />
      <Invoice />
      <Footer />
    </>
  );
}

export default PrintInvoice;
