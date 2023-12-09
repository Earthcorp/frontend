import React, { useState } from "react";
import moment from "moment";
import axios from "axios";
import toast from "react-hot-toast";

function BookingItem({ booking, deleteBooking }) {
  const [isCompleted, setIsCompleted] = useState(booking.completed);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckboxClick = async () => {
    try {
      setIsLoading(true);
      await axios.put(`/api/booking/${booking._id}`, {
        completed: !isCompleted,
      });
      setIsCompleted(!isCompleted);
      toast.success("Booking updated successfully");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <tr>
        <td>
          <div onChange={handleCheckboxClick} role="checkbox" aria-checked>
            <input
              type="checkbox"
              checked={isCompleted}
              disabled={isLoading}
              readOnly
              tabIndex={-1}
              className="mr-2"
            />
            {isCompleted ? "Complete" : "Incomplete"}
          </div>
        </td>

        <td>{moment(booking.createdAt).format("DD MMM YYYY")}</td>
        <td>{booking.title}</td>
        <td>Name Change</td>
        <td>Lucknow</td>
        <td>{moment(booking.createdAt).format("DD MMM YYYY")}</td>
        <td>
          <button
            type="button"
            className="bg-gray-200 font-semibold px-2 shadow rounded-sm text-sm hover:bg-gray-300 border border-gray-300"
          >
            Edit
          </button>
          <button
            type="button"
            className="bg-gray-200 font-semibold px-2 shadow rounded-sm text-sm hover:bg-gray-300 border border-gray-300 ml-1"
            onClick={() => deleteBooking(booking._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default BookingItem;
