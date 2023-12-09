import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import styles from "../../styles";

function EditProfileForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/users/me");
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const updateUserInfo = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("/api/users/me", user);
      toast.success("Profile updated successfully");
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      <div className={`${styles.container}`}>
        <div className="bg-white md:w-1/3 py-6 px-6">
          <h1 className="text-headingColor font-[600] text-[1.2rem] mb-5">
            Edit Profile
          </h1>
          <div className="md:flex justify-between items-center">
            <form className="w-full space-y-4" onSubmit={updateProfile}>
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
                    value={user.name}
                    onChange={updateUserInfo}
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
                    placeholder="email"
                    required
                    value={user.email}
                    onChange={updateUserInfo}
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
                    name="phoneNumber"
                    type="phone"
                    placeholder="phone"
                    required
                    value={user.phoneNumber}
                    onChange={updateUserInfo}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-300 sm:text-sm"
                  />
                </div>
              </div>

              <button type="submit" className={`${styles.button} mt-4`}>
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditProfileForm;
