import React, { useState } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import styles from "../../styles";
import Banner from "../../assets/images/banner-1.jpg";
import TOI from "../../assets/images/toi.jpg";
import DJ from "../../assets/images/dj.png";
import HH from "../../assets/images/hh.png";
import AU from "../../assets/images/au.png";
import NBT from "../../assets/images/nbt.png";
import NewBooking from "../booking/BookingNew";

function Summary() {
  const [isAddingNew, setIsAddingNew] = useState(false);

  const addNewButtonClick = () => {
    setIsAddingNew(!isAddingNew);
  };

  const workSpace = [
    {
      imgUrl: TOI,
      alt: "times of india",
    },
    {
      imgUrl: HH,
      alt: "hindustan",
    },
    {
      imgUrl: AU,
      alt: "amar ujala",
    },
    {
      imgUrl: NBT,
      alt: "navbharat times",
    },
    {
      imgUrl: DJ,
      alt: "dj",
    },
  ];

  const data = [
    {
      title: "Total Booking",
      desc: "2",
    },
    {
      title: "Booking Amount",
      icon: <BsCurrencyRupee />,
      desc: "1499.00",
    },
    {
      title: "Pending Booking",
      desc: "23",
    },
    {
      title: "Received Amount",
      icon: <BsCurrencyRupee />,
      desc: "3462.00",
    },
    {
      title: "Balance Amount",
      icon: <BsCurrencyRupee />,
      desc: "0.00",
    },
  ];

  return (
    <section>
      <div className={`${styles.container}`}>
        <img src={Banner} alt="Welcome" />
        <h1 className="flex items-center justify-center py-5 text-[2rem] font-bold">
          Welcome to WorkSpace
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {workSpace.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 relative group border border-gray-300 cursor-pointer ease-in duration-150 rounded shadow"
            >
              <h4 className="text-black text-md font-semibold group-hover:text-blue-950">
                {item.title}
              </h4>
              <img src={item.imgUrl} alt={item.alt} />
              <span className="flex items-center justify-center text-xl font-bold text-black group-hover:text-headingColor">
                {item.icon}
                {item.desc}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center p-2 mb-4 mt-5">
          <button
            type="button"
            className={`${styles.button}`}
            onClick={addNewButtonClick}
          >
            Book Advertisement
          </button>
        </div>
        {isAddingNew && (
          <div className="md:w-full border border-gray-300 py-5 rounded">
            <NewBooking />
          </div>
        )}
      </div>

      <div className={`${styles.container}`}>
        <h1 className="flex items-center justify-center mb-5 text-[1.5rem] font-bold">
          Advertising summary
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-buttonColor p-6 relative group hover:bg-gray-300 cursor-pointer ease-in duration-150 rounded shadow"
            >
              <h4 className="text-white text-md font-semibold group-hover:text-blue-950">
                {item.title}
              </h4>
              <span className="flex items-center justify-center text-xl font-bold text-white group-hover:text-headingColor">
                {item.icon}
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Summary;
