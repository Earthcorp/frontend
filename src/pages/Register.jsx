import React from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/layout/Header";
import Register from "../components/auth/NewUser";

function Signup() {
  return (
    <Layout>
      <Header />
      <Register />
    </Layout>
  );
}

export default Signup;
