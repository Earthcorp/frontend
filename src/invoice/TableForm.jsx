import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import moment from "moment";

export default function TableForm({
  description,
  setDescription,
  quantity,
  setQuantity,
  publishDt,
  setPublishDt,
  newsPaper,
  setNewsPaper,
  edition,
  setEdition,
  lines,
  setLines,
  price,
  setPrice,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal,
  gst,
  setGst,
  netPayable,
  setNetPayable,
}) {
  const [isEditing, setIsEditing] = useState(false);

  // Submit form function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !description ||
      !quantity ||
      !publishDt ||
      !newsPaper ||
      !edition ||
      !lines ||
      !price
    ) {
      alert("Please fill in all inputs");
    } else {
      const newItems = {
        id: uuidv4(),
        description,
        quantity,
        publishDt,
        newsPaper,
        edition,
        lines,
        price,
        amount,
        gst,
        netPayable,
      };
      setDescription("");
      setQuantity("");
      setPrice("");
      setPublishDt("");
      setNewsPaper("");
      setEdition("");
      setLines("");
      setAmount("");
      setGst("");
      setNetPayable("");
      setList([...list, newItems]);
      setIsEditing(false);
      console.log(list);
    }
  };

  // Calculate items amount
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(lines * price);
    };
    calculateAmount(amount);
  }, [amount, price, lines, setAmount]);

  // Calculate total amount of items in table
  useEffect(() => {
    let rows = document.querySelectorAll(".amount");
    let sum = 0;

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
        setTotal(sum);
      }
    }
  });

  // Calculate total amount with gst
  useEffect(() => {
    let gst = 5;
    const calculateNetPayable = (netPayable) => {
      setNetPayable(total * (1 + gst / 100));
    };
    calculateNetPayable(netPayable);
  }, [netPayable, price, total, gst, setNetPayable]);

  // Calculate payable amount
  useEffect(() => {
    let rows = document.querySelectorAll(".netPayable");
    let sum = 0;

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "netPayable") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
        setNetPayable(sum);
      }
    }
  });

  // Calculate gst
  useEffect(() => {
    let gst = 5;
    const calculateGst = (gst) => {
      setGst(netPayable - total);
    };

    calculateGst(gst);
  }, [gst, total, setGst]);

  {
    /**
  // gst example
  let gstRate = 5;
  let pstRate = 10;
  let roomprice = 50;
  let totalwithgst = roomprice * (1 + (gstRate + pstRate ) / 100);
  let totalwithpst = roomprice * (1 + pstRate /100);
  let totalfixedgst = totalwithgst.toFixed(2);
  let totalfixedpst = totalwithpst.toFixed(2);
  alert (totalwithgst + " | " + totalwithpst);
  alert (totalfixedgst + " | " + totalfixedpst);
 */
  }

  // Edit function
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setIsEditing(true);
    setDescription(editingRow.description);
    setQuantity(editingRow.quantity);
    setPublishDt(editingRow.publishDt);
    setNewsPaper(editingRow.newsPaper);
    setEdition(editingRow.edition);
    setLines(editingRow.lines);
    setPrice(editingRow.price);
    setGst(editingRow.gst);
  };

  // Delete function
  const deleteRow = (id) => setList(list.filter((row) => row.id !== id));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:mt-16">
          <label htmlFor="description">Item description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Item description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 mb-5"
          />
        </div>

        <div className="md:grid grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label htmlFor="publishDt">Publish date</label>
            <input
              type="date"
              name="publishDt"
              id="publishDt"
              autoComplete="off"
              value={publishDt}
              onChange={(e) => setPublishDt(e.target.value)}
              className="p-2 mb-5"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="edition">Edition</label>
            <select
              type="text"
              name="edition"
              id="edition"
              placeholder="Choose --"
              autoComplete="off"
              value={edition}
              onChange={(e) => setEdition(e.target.value)}
              className="p-2 mb-5"
            >
              <option>Choose -- </option>
              <option>Ayodhya</option>
              <option>Kanpur</option>
              <option>Lucknow</option>
              <option>Prayagraj</option>
              <option>Varanasi</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="PaymentMode">Newspaper</label>
            <select
              type="text"
              name="newsPaper"
              id="newsPaper"
              placeholder="Choose --"
              autoComplete="off"
              value={newsPaper}
              onChange={(e) => setNewsPaper(e.target.value)}
              className="p-2 mb-5"
            >
              <option>Choose -- </option>
              <option>Amar Ujala</option>
              <option>Dainik Jagran</option>
              <option>Hindustan</option>
              <option>Times of India</option>
            </select>
          </div>
        </div>

        <div className="md:grid grid-cols-4 gap-4">
          <div className="flex flex-col">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="p-2 mb-5"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="lines">Lines</label>
            <input
              type="text"
              name="lines"
              id="lines"
              placeholder="No of lines"
              value={lines}
              onChange={(e) => setLines(e.target.value)}
              className="p-2 mb-5"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="p-2 mb-5"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              name="amount"
              id="amount"
              disabled
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="p-2 mb-5"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mb-5 bg-green-500 text-white font-semibold py-1 px-4 shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300"
        >
          {isEditing ? "Editing Row Item" : "Add Table Item"}
        </button>
      </form>

      {/* Table items*/}
      <table width="100%" className="mb-2">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">#</td>
            <td className="font-bold">Description</td>
            <td className="font-bold">Qty</td>
            <td className="font-bold">Publish</td>
            <td className="font-bold">NewsPaper</td>
            <td className="font-bold">Edition</td>
            <td className="font-bold">Line</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
            <td className="font-bold">Actions</td>
          </tr>
        </thead>
        {list.map(
          ({
            id,
            description,
            quantity,
            publishDt,
            newsPaper,
            edition,
            lines,
            price,
            amount,
          }) => (
            <React.Fragment key={id}>
              <tbody>
                <tr>
                  <td></td>
                  <td>{description}</td>
                  <td>{quantity}</td>
                  <td>{moment(publishDt).format("DD-MM-YYYY")}</td>
                  <td>{newsPaper}</td>
                  <td>{edition}</td>
                  <td>{lines}</td>
                  <td>{price}</td>
                  <td className="amount">{amount}</td>
                  <td>
                    <button onClick={() => deleteRow(id)}>
                      <AiOutlineDelete className="text-red-500 font-bold text-xl" />
                    </button>

                    <button onClick={() => editRow(id)}>
                      <AiOutlineEdit className="text-green-500 font-bold text-xl ml-4" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </React.Fragment>
          )
        )}
      </table>

      <div>
        <table>
          <tr>
            <td id="amount" rowSpan="4">
              One thousand two hundred thirty five only
            </td>
            <td className="font-semibold text-sm">Total</td>
            <td>{total.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="font-semibold text-sm">Gst (5%)</td>
            <td>{gst.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="font-semibold text-sm">Net Payable</td>
            <td className="font-semibold">{netPayable.toLocaleString()}</td>
          </tr>
        </table>
        {/**
        <h2 className="text-gray-800 text-md font-bold">
          Total {total.toLocaleString()}
        </h2>
         */}
      </div>
    </>
  );
}
