import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import SiteLogo from "../../components/sitelogo/siteLogo";
import styles from "../../styles";

function Login() {
  const [visible, setVisible] = useState(false);
  const [passwordRecovery, setPasswordRecovery] = useState(false);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await axios.post("/api/auth/login", {
        email,
        password,
      });
      navigate("/");
      toast.success("Login Success");
      e.target.email.value = "";
      e.target.password.value = "";
    } catch (err) {
      console.log(err);
      toast.error("Login Failed");
    }
  };

  return (
    <>
      <div className="min-h-[100vh] flex justify-center items-center">
        {passwordRecovery ? (
          <>
            <div className={`${styles.cart}`}>
              <div className="w-[300px]">
                <SiteLogo />
                <div className="text-xl font-medium text-black mb-4">
                  Password recovery
                </div>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Enter your Email
                    </label>
                    <div className="mt-1">
                      <input
                        name="email"
                        type="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-buttonColor hover:bg-hoverColor"
                      onClick={() => setPasswordRecovery(false)}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={`${styles.cart}`}>
              <div className="w-[300px]">
                <SiteLogo />
                <div className="text-xl font-medium text-black mb-4">
                  Login to account
                </div>
                <form className="space-y-4" onSubmit={login}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <div className="mt-1">
                      <input
                        name="email"
                        type="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type={visible ? "text" : "password"}
                        name="password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                      {visible ? (
                        <AiOutlineEye
                          className="absolute right-2 top-2 cursor-pointer"
                          size={25}
                          onClick={() => setVisible(false)}
                        />
                      ) : (
                        <AiOutlineEyeInvisible
                          className="absolute right-2 top-2 cursor-pointer"
                          size={25}
                          onClick={() => setVisible(true)}
                        />
                      )}
                    </div>
                  </div>
                  <div className="text-sm cursor-pointer">
                    <a
                      className="font-medium text-primaryColor hover:text-headingColor"
                      onClick={() => setPasswordRecovery(true)}
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-buttonColor hover:bg-hoverColor"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Login;
