import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import styles from "../../styles";

function BookingNew() {
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newBooking, setNewBooking] = useState("");

  const addNewButtonClick = () => {
    setIsAddingNew(!isAddingNew);
  };

  const addNewBooking = async (e) => {
    e.preventDefault();
    if (newBooking.length <= 0) {
      toast.error("Booking is empty");
      return;
    }
    try {
      const { data } = await axios.post("/api/booking/", {
        title: newBooking,
      });
      toast.success("New booking added");
      setIsAddingNew(false);
      setNewBooking("");
      setBookingList([{ ...data }, ...bookingList]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1 className="flex items-center justify-start text-xl font-semibold ml-4 mb-4">
        Advertisement Booking System
      </h1>

      <form onSubmit={addNewBooking}>
        <div className="flex flex-col justify-center p-4">
          <article className="md:grid grid-cols-7 gap-6">
            <div className="flex flex-col">
              <label htmlFor="text">Booking ID</label>
              <input type="text" placeholder="" className="p-2 mb-5" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="text">Order Dt.</label>
              <input type="date" className="p-2 mb-5" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="text">Item</label>
              <input type="text" className="p-2 mb-5" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="text">Advt Size</label>
              <input className="p-2 mb-5" type="text" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="text">Rate</label>
              <input className="p-2 mb-5" type="text" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="text">Gross</label>
              <input className="p-2 mb-5" type="text" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="text">Net Value</label>
              <input className="p-2 mb-5" type="text" />
            </div>
          </article>

          <article className="md:grid grid-cols-5 gap-6">
            <div className="flex flex-col">
              <label htmlFor="text">Gst (5%)</label>
              <input className="p-2 mb-5" type="text" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="text">Publication Dt.</label>
              <input type="date" className="p-2 mb-5" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="text">Net Payable</label>
              <input className="p-2 mb-5" type="text" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="text">Advt Category</label>
              <select className="p-2 mb-5">
                <option>Choose -- </option>
                <option>Name Change</option>
                <option>Marksheet Lost</option>
                <option>Matrimonial</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="text">Edition</label>
              <select className="p-2 mb-5">
                <option>Choose -- </option>
                <option>Ayodhya</option>
                <option>Kanpur</option>
                <option>Lucknow</option>
                <option>Pragyagraj</option>
                <option>Varanasi</option>
              </select>
            </div>
          </article>

          <article className="md:grid grid-cols-3 gap-6">
            <div className="flex flex-col">
              <label htmlFor="text">Client Name</label>
              <input
                type="text"
                value={newBooking}
                onChange={(e) => setNewBooking(e.target.value)}
                className="p-2 mb-5"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="text">Client Address</label>
              <input type="text" className="p-2 mb-5" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="text">Client Mobile</label>
              <input type="text" className="p-2 mb-5" />
            </div>
          </article>
        </div>

        <button type="submit" className={`${styles.button} ml-4 mb-4`}>
          Submit
        </button>
      </form>
    </>
  );
}

export default BookingNew;
