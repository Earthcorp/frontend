import React, { useState, useRef } from "react";
import Footer from "./Footer";
import Notes from "./Notes";
import Table from "./Table";
import Header from "./Header";
import MainDetails from "./MainDetails";
import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
import PaymentDetail from "./PaymentDetail";
import TableForm from "./TableForm";
import ReactToPrint from "react-to-print";
import { AiOutlinePrinter } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import styles from "../styles";

function Invoice() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("Earthcorp");
  const [address, setAddress] = useState(
    "8/10/81/38 Paharganj Road, Near Ram Nagar Chauraha, Ayodhya"
  );
  const [email, setEmail] = useState("connect@earthcorp.in");
  const [phone, setPhone] = useState("9415122202");
  const [bankName, setBankName] = useState("Idbi Bank Ltd");
  const [bankAccount, setBankAccount] = useState("0398102000007245");
  const [ifsc, setIfsc] = useState("IBKL0000398");
  const [website, setWebsite] = useState("https://earthcorp.in");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [notes, setNotes] = useState(
    "All disputes shall be subjects to the jurisdiction of Ayodhya courts only."
  );
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [publishDt, setPublishDt] = useState("");
  const [newsPaper, setNewsPaper] = useState("");
  const [edition, setEdition] = useState("");
  const [lines, setLines] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [gst, setGst] = useState(0);
  const [netPayable, setNetPayable] = useState(0);
  const [paymentMode, setPaymentMode] = useState("");
  const [refNo, setRefNo] = useState("");

  const componentRef = useRef();

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <main className={`${styles.main}`}>
        {showInvoice ? (
          <>
            <div className="flex items-end justify-end flex-wrap">
              <ReactToPrint
                trigger={() => (
                  <button
                    className={`${styles.buttonBlue} flex items-center justify-center gap-1`}
                  >
                    <AiOutlinePrinter size={20} />
                    Print Invoice
                  </button>
                )}
                content={() => componentRef.current}
              />

              <button
                onClick={() => setShowInvoice(false)}
                className={`${styles.buttonGreen} ml-0 flex items-center justify-center gap-1`}
              >
                <AiOutlineEdit size={20} />
                Edit Info
              </button>
            </div>

            <div ref={componentRef} className="p-10">
              <Header handlePrint={handlePrint} />

              <MainDetails
                name={name}
                phone={phone}
                email={email}
                website={website}
              />

              <div className="md:flex items-start justify-between mt-10 mb-10">
                <div className="w-full md:w-1/2">
                  <ClientDetails
                    clientName={clientName}
                    clientAddress={clientAddress}
                    clientPhone={clientPhone}
                  />
                </div>
                <div className="w-full md:w-1/2 mt-8 md:mt-0 lg:flex justify-end">
                  <Dates
                    invoiceNumber={invoiceNumber}
                    invoiceDate={invoiceDate}
                  />
                </div>
              </div>
              <Table
                description={description}
                quantity={quantity}
                publishDt={publishDt}
                newsPaper={newsPaper}
                edition={edition}
                lines={lines}
                price={price}
                amount={amount}
                list={list}
                setList={setList}
                total={total}
                setTotal={setTotal}
                gst={gst}
                setGst={setGst}
                netPayable={netPayable}
                setNetPayable={setNetPayable}
              />

              <PaymentDetail
                paymentMode={paymentMode}
                refNo={refNo}
                netPayable={netPayable}
                invoiceDate={invoiceDate}
              />

              <Footer
                name={name}
                address={address}
                email={email}
                phone={phone}
                website={website}
                bankAccount={bankAccount}
                bankName={bankName}
                ifsc={ifsc}
              />

              <Notes notes={notes} />
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center p-4">
              <article className="md:grid grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="name">Your full name</label>
                  <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Enter your name"
                    autoComplete="off"
                    disabled
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-2 mb-5"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="address">Enter your address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter your address"
                    autoComplete="off"
                    disabled
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="p-2 mb-5"
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="email">Enter your email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    autoComplete="off"
                    disabled
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 mb-5"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="website">Enter your website</label>
                  <input
                    type="url"
                    name="website"
                    id="website"
                    placeholder="Enter your website"
                    autoComplete="off"
                    disabled
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="p-2 mb-5"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone">Enter your phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone"
                    autoComplete="off"
                    disabled
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="p-2 mb-5"
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="bankName">Enter bank name</label>
                  <input
                    type="text"
                    name="bankName"
                    id="bankName"
                    placeholder="Enter your bank name"
                    autoComplete="off"
                    disabled
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    className="p-2 mb-5"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="bankAccount">Enter bank account number</label>
                  <input
                    type="text"
                    name="bankAccount"
                    id="bankAccount"
                    placeholder="Enter your bank account number"
                    autoComplete="off"
                    disabled
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                    className="p-2 mb-5"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="ifsc">Bank IFSC</label>
                  <input
                    type="text"
                    name="ifsc"
                    id="ifsc"
                    placeholder="Enter your bank IFSC"
                    autoComplete="off"
                    disabled
                    value={ifsc}
                    onChange={(e) => setIfsc(e.target.value)}
                    className="p-2 mb-5"
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-6 md:mt-16">
                <div className="flex flex-col">
                  <label htmlFor="clientName">Client's name</label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="Client's name"
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="p-2 mb-5"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="clientAddress">Client's address</label>
                  <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="Client's address"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                    className="p-2 mb-5"
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Client's phone</label>
                  <input
                    type="text"
                    name="clientPhone"
                    id="clientPhone"
                    placeholder="Client's phone"
                    autoComplete="off"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="p-2 mb-5"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Invoice number</label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Invoice number"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                    className="p-2 mb-5"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Invoice date</label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                    className="p-2 mb-5"
                  />
                </div>
              </article>

              <article>
                <TableForm
                  description={description}
                  setDescription={setDescription}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  publishDt={publishDt}
                  setPublishDt={setPublishDt}
                  newsPaper={newsPaper}
                  setNewsPaper={setNewsPaper}
                  edition={edition}
                  setEdition={setEdition}
                  lines={lines}
                  setLines={setLines}
                  price={price}
                  setPrice={setPrice}
                  amount={amount}
                  setAmount={setAmount}
                  list={list}
                  setList={setList}
                  total={total}
                  setTotal={setTotal}
                  gst={gst}
                  setGst={setGst}
                  netPayable={netPayable}
                  setNetPayable={setNetPayable}
                />
              </article>

              {/** Payment detail */}

              <div className="mt-10 mb-10 border border-gray-300 p-4 rounded-sm">
                {/**
                <article className="md:grid grid-cols-1 gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="total">Total</label>
                    <input
                      type="text"
                      placeholder={total.toLocaleString()}
                      disabled
                      className="p-2 mb-5"
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <label htmlFor="gst">GST (5%)</label>
                    <input
                      type="text"
                      placeholder={gst.toLocaleString()}
                      disabled
                      className="p-2 mb-5"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="netPayable">Net payable</label>
                    <input
                      type="text"
                      placeholder={netPayable.toLocaleString()}
                      disabled
                      className="p-2 mb-5"
                    />
                  </div> 
                </article>
                */}

                <article className="md:grid grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="PaymentMode">Payment mode</label>
                    <select
                      type="text"
                      name="PaymentMode"
                      id="PaymentMode"
                      placeholder="Choose --"
                      autoComplete="off"
                      value={paymentMode}
                      onChange={(e) => setPaymentMode(e.target.value)}
                      className="p-2 mb-5"
                    >
                      <option>Choose -- </option>
                      <option>Cash</option>
                      <option>Debit/Credit Card</option>
                      <option>UPI Transfer</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="refNo">Transaction Id</label>
                    <input
                      type="text"
                      name="refNo"
                      id="refNo"
                      placeholder="Utr/Ref/Txn No"
                      autoComplete="off"
                      value={refNo}
                      onChange={(e) => setRefNo(e.target.value)}
                      className="p-2 mb-5"
                    />
                  </div>
                </article>
              </div>

              <label htmlFor="notes">Additional Notes</label>
              <textarea
                name=""
                id="notes"
                cols="30"
                rows="4"
                placeholder="Additional Notes to the client"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="p-2 mb-5"
              ></textarea>

              <button
                onClick={() => setShowInvoice(true)}
                className="mt-5 bg-blue-500 text-white font-semibold py-1 px-4 shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              >
                Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default Invoice;
