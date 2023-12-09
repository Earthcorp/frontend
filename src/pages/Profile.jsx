import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Layout from "../components/layout/Layout";
import EditProfileForm from "../components/profile/EditProfileForm";

function Profile() {
  return (
    <Layout>
      <Header />
      <EditProfileForm />
      <Footer />
    </Layout>
  );
}

export default Profile;
