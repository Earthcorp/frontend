import axios from "axios";
import React, { useState, useEffect } from "react";
import CreateRoItem from "./createRoItem";
import Swal from "sweetalert2";
import styles from "../../styles";

function CreateRoList() {
  const [createRoList, setCreateRoList] = useState([]);

  const getCreateRo = async () => {
    try {
      const response = await axios.get("/api/advt/mycreatero");
      setCreateRoList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCreateRo();
  }, []);

  const deleteCreateRo = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showConfirmButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/api/advt/${id}`);
        setCreateRoList(createRoList.filter((createRo) => createRo._id !== id));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <main className={`${styles.container}`}>
        <h1 className="flex items-center justify-start text-xl font-semibold ml-4 mb-4">
          Release order list
        </h1>
        <table className="text-sm">
          <thead>
            <tr className="bg-[#10555a] text-white p-1">
              <th className="text-center">RoNo</th>
              <th className="text-center">RoDt</th>
              <th className="text-center">Client</th>
              <th className="text-center">PubDt</th>
              <th className="text-center">Edition</th>
              <th className="text-center">Category</th>
              <th className="text-center">Lines</th>
              <th className="text-center">Net</th>
              <th className="text-center">Gst(5%)</th>
              <th className="text-center">Payable</th>
              <th className="text-center">Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          {createRoList.length > 0 ? (
            <tbody>
              {createRoList.map((createRo) => (
                <CreateRoItem
                  key={createRo._id}
                  createRo={createRo}
                  deleteCreateRo={deleteCreateRo}
                />
              ))}
            </tbody>
          ) : (
            "No release order found. Create a new release order"
          )}
        </table>
      </main>
    </>
  );
}

export default CreateRoList;
