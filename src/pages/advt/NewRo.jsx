import React from "react";
import CreateRo from "../../components/booking/CreateRo";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Layout from "../../components/layout/Layout";

function NewRo() {
  return (
    <Layout>
      <Header />
      <CreateRo />
      <Footer />
    </Layout>
  );
}

export default NewRo;
