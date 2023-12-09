import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import styles from "../../styles";

function BookingDetail() {
  const [search, setSearch] = useState("");
  const [booking, setBooking] = useState([]);
  const [filteredBooking, setFilteredBooking] = useState([]);

  const getBooking = async () => {
    try {
      const response = await axios.get(`/api/booking/all`);
      setBooking(response.data);
      setFilteredBooking(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Mode",
      selector: (row) => row.mode,
    },
    {
      name: "Created At",
      selector: (row) => row.createdAt,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          onClick={() => alert(row.title)}
          className="bg-gray-200 text-black font-semibold border border-gray-300 hover:bg-white py-1 px-2"
        >
          Delete
        </button>
      ),
    },
  ];

  useEffect(() => {
    getBooking();
  }, []);

  useEffect(() => {
    const result = booking.filter((booking) => {
      return booking.title.toLowerCase().match(search.toLowerCase());
    });

    setFilteredBooking(result);
  }, [search]);

  return (
    <section>
      <div className={`${styles.container}`}>
        <DataTable
          title="All Booking List"
          columns={columns}
          data={filteredBooking}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="450px"
          selectableRows
          selectableRowsHighlight
          highlightOnHover
          actions={
            <button className="flex justify-center py-1 px-3 border border-transparent text-sm font-medium text-white bg-buttonColor hover:bg-hoverColor">
              Export
            </button>
          }
          subHeader
          subHeaderComponent={
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="appearance-none block w-[300px] px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-300 sm:text-sm"
            />
          }
        />
      </div>
    </section>
  );
}

export default BookingDetail;
