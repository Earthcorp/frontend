import axios from "axios";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import BookingItem from "./BookingItem";

function BookingList() {
  const [bookingList, setBookingList] = useState([]);

  const getBooking = async () => {
    try {
      const { data } = await axios.get("/api/booking/mybooking");
      setBookingList(
        data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBooking();
  }, []);

  const deleteBooking = async (id) => {
    try {
      await axios.delete(`/api/booking/${id}`);
      toast.success("Booking deleted");
      setBookingList(bookingList.filter((booking) => booking._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-semibold">Status</td>
            <td className="font-semibold">Ro dt</td>
            <td className="font-semibold">Client Name</td>
            <td className="font-semibold">Item</td>
            <td className="font-semibold">Edition</td>
            <td className="font-semibold">Publish dt</td>
            <td className="font-semibold">Actions</td>
          </tr>
        </thead>

        {bookingList.length > 0 ? (
          <tbody>
            {bookingList.map((booking) => (
              <BookingItem
                key={booking._id}
                booking={booking}
                deleteBooking={deleteBooking}
              />
            ))}
          </tbody>
        ) : (
          "No Booking Found. Create a new booking"
        )}
      </table>
    </>
  );
}

export default BookingList;
