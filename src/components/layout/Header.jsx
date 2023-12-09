import axios from "axios";
import React, { useEffect, useState } from "react";
import logoImg from "../../assets/images/logo.png";
import { RiMenu4Line, RiCloseFill } from "react-icons/ri";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { navItems } from "../../static/data";

export default function Header() {
  const [active, setActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getUser = async () => {
    try {
      const { data } = await axios.get("/api/users/me");
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get("/api/auth/logout");
      setUser(null);
      toast.success("Logged out successfully");
      navigate("/auth");
    } catch (err) {
      console.log(err);
    }
  };

  if (!user) return null;

  return (
    <>
      <header
        className={`${
          active === true
            ? "fixed shadow-md top-0 left-0 right-0 bg-white z-10"
            : null
        } bg-white md:px-4 px-4 p-2 max-w-full mx-auto border-b-[1px]`}
      >
        <div className="flex items-center justify-between max-w-full mx-auto py-2">
          <Link to="/">
            <div className="flex items-center gap-[10px]">
              <span className="w-[36px] h-[auto] flex items-center justify-center">
                <figure>
                  <img src={logoImg} alt="logo" />
                </figure>
              </span>
              <div className="leading-[20px]">
                <h2 className="text-xl text-headingColor font-[700]">
                  Earthcorp
                </h2>
                <p className="text-headingColor text-sm font-[500]">
                  IT Support & Services
                </p>
              </div>
            </div>
          </Link>

          <ul className="md:flex space-x-10 hidden">
            {navItems.map(({ link, path }) => (
              <a
                key={link}
                href={path}
                className="block text-primaryColor text-md font-[600] hover:text-gray-400"
              >
                {link}
              </a>
            ))}
          </ul>

          <div className="flex items-center justify-center gap-4">
            <div className="leading-[20px] px-4">
              <Link to="/profile">
                <span className="text-sm mr-1">Profile</span>|{" "}
              </Link>
              <span
                className="text-sm mr-1 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </span>

              <span className="block text-headingColor text-md font-semibold">
                {user.name}
              </span>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none focus:text-gray-400"
              >
                {isMenuOpen ? (
                  <RiCloseFill className="text-2xl text-headingColor" />
                ) : (
                  <RiMenu4Line className="text-2xl text-headingColor" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`space-y-4 w-[230px] h-screen px-4 pt-5 pb-5 bg-white bg-opacity-100 shadow-2xl duration-300 z-10 ${
          isMenuOpen ? "block fixed top-[80px] right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <a
            key={link}
            href={path}
            className="block text-primaryColor text-md font-[600] hover:text-gray-400"
          >
            {link}
          </a>
        ))}
      </div>
    </>
  );
}
