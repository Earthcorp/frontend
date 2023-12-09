import React, { useState } from "react";
import moment from "moment";
import axios from "axios";
import toast from "react-hot-toast";

function CreateRoItem({ createRo, deleteCreateRo }) {
  const [isCompleted, setIsCompleted] = useState(createRo.completed);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckboxClick = async () => {
    try {
      setIsLoading(true);
      await axios.put(`/api/advt/${createRo._id}`, {
        completed: !isCompleted,
      });
      setIsCompleted(!isCompleted);
      toast.success("Release order updated successfully");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <tr>
        <td className="text-center">{createRo.roNo}</td>
        <td className="text-center">
          {moment(createRo.roDt).format("DD MMM YYYY")}
        </td>
        <td>{createRo.clientName}</td>
        <td className="text-center">
          {moment(createRo.pubDt).format("DD MMM YYYY")}
        </td>
        <td className="text-center">{createRo.edition}</td>
        <td className="text-center">{createRo.category}</td>
        <td className="text-center">{createRo.lines}</td>
        <td className="text-center">{createRo.netValue.toFixed(2)}</td>
        <td className="text-center">{createRo.gst.toFixed(2)}</td>
        <td className="text-center">{createRo.netPayable.toFixed(2)}</td>
        <td className="text-center">
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
        <td className="text-center">
          <button
            type="button"
            className="bg-green-600 text-white px-2 shadow rounded-sm text-[0.8rem] hover:bg-green-700"
            onClick={() => alert(createRo._id)}
          >
            Edit
          </button>
          <button
            type="button"
            className="bg-orange-600 text-white px-2 shadow rounded-sm text-[0.8rem] hover:bg-orange-700 ml-1"
            onClick={() => deleteCreateRo(createRo._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default CreateRoItem;
