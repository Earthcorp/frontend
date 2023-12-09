import React from "react";
import Layout from "../components/layout/Layout";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Summary from "../components/summary/Summary";

function Home() {
  return (
    <Layout>
      <Header />
      <Summary />
      <Footer />
    </Layout>
  );
}

export default Home;
