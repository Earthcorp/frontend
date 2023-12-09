import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import React from "react";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import PrivateRoutes from "./components/PrivateRoutes";
import BookingDetail from "./components/booking/BookingDetail";
import Register from "./pages/register";
import Summary from "./components/summary/Summary";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
import NewRo from "./pages/advt/NewRo";
import RoList from "./pages/advt/RoList";
import Invoice from "./pages/advt/PrintInvoice";

function App() {
  return (
    <>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            fontSize: "1rem",
          },
        }}
      />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/booking-detail" element={<BookingDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/advt/create-release-order" element={<NewRo />} />
          <Route path="/advt/release-order-list" element={<RoList />} />
          <Route path="/advt/print-invoice" element={<Invoice />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin/" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
