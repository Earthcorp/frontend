import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import styles from "../../styles";
import AllUsers from "./AllUsers";

function NewUser() {
  const register = async (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      phoneNumber: e.target.phone.value,
    };
    try {
      await axios.post("/api/auth/register", user);
      toast.success("Registered successful");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <section>
      <div className={`${styles.container}`}>
        <h1 className="text-headingColor font-[600] text-[1.2rem] mb-5">
          Register
        </h1>
        <div className="col w-1/3 md:flex justify-between items-center">
          <form className="w-full space-y-4" onSubmit={register}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name:
              </label>
              <div className="mt-1">
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-300 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email:
              </label>
              <div className="mt-1">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-300 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone:
              </label>
              <div className="mt-1">
                <input
                  name="phone"
                  type="phone"
                  placeholder="Phone"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-300 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password:
              </label>
              <div className="mt-1">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-300 sm:text-sm"
                />
              </div>
            </div>

            <button type="submit" className={`${styles.button} mt-4`}>
              Register
            </button>
          </form>
        </div>

        <div className="bg-white w-1/2 col">
          <AllUsers />
        </div>
      </div>
    </section>
  );
}

export default NewUser;
