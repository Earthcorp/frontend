import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import styles from "../../styles";

function Users() {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUser, setFilteredUser] = useState([]);

  const getUser = async () => {
    try {
      const response = await axios.get(`/api/users/all`);
      setUser(response.data);
      setFilteredUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    const result = user.filter((user) => {
      return user.name.toLowerCase().match(search.toLowerCase());
    });

    setFilteredUser(result);
  }, [search]);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Phone",
      selector: (row) => row.phoneNumber,
      sortable: true,
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
          className="bg-gray-200 text-black font-semibold border border-gray-300 hover:bg-white py-1 px-2"
          onClick={() => alert(row._id)}
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <div className={`${styles.container}`}>
      <div className="w-full">
        <DataTable
          title="All Users List"
          columns={columns}
          data={filteredUser}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="450px"
          selectableRows
          selectableRowsHighlight
          highlightOnHover
          actions={
            <button className="flex justify-center py-1 px-2 border border-transparent text-sm font-medium text-white bg-buttonColor hover:bg-hoverColor">
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
              className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          }
        />
      </div>
    </div>
  );
}

export default Users;
