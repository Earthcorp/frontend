import React from "react";
import Login from "../components/auth/Login";
import Layout from "../components/layout/Layout";

function Auth() {
  return (
    <Layout>
      <div>
        <Login />
      </div>
    </Layout>
  );
}

export default Auth;
