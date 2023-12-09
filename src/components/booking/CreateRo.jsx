import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import styles from "../../styles";

function CreateRo() {
  const [createRo, setCreateRo] = useState([]);
  const [roNo, setRoNo] = useState("");
  const [roDt, setRoDt] = useState("");
  const [pubDt, setPubDt] = useState("");
  const [category, setCategory] = useState("");
  const [edition, setEdition] = useState("");
  const [lines, setLines] = useState(0);
  const [rate, setRate] = useState(0);
  const [gross, setGross] = useState(0);
  const [dis, setDis] = useState(0);
  const [netValue, setNetValue] = useState(0);
  const [gst, setGst] = useState(0);
  const [netPayable, setNetPayable] = useState(0);
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [clientMobile, setClientMobile] = useState("");
  const [newsPaper, setNewsPaper] = useState("");

  const newCreateRo = async (e) => {
    e.preventDefault();
    const user = {
      roNo,
      roDt,
      pubDt,
      category,
      edition,
      lines,
      rate,
      gross,
      dis,
      netValue,
      gst,
      netPayable,
      clientName,
      clientAddress,
      clientMobile,
      newsPaper,
    };
    try {
      await axios.post("/api/advt/", user);
      toast.success("RO Created successful");
      setRoNo("");
      setRoDt("");
      setPubDt("");
      setCategory("");
      setEdition("");
      setLines("");
      setRate("");
      setGross("");
      setDis("");
      setNetValue("");
      setGst("");
      setNetPayable("");
      setClientName("");
      setClientAddress("");
      setClientMobile("");
      setNewsPaper("");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  const getCreateRo = async () => {
    try {
      const response = await axios.get(`/api/advt/`);
      setCreateRo(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCreateRo();
  }, []);

  // Calculate gross amount
  useEffect(() => {
    const calculateGross = (gross) => {
      setGross(lines * rate);
    };
    calculateGross(gross);
  }, [gross, rate, lines, setGross]);

  // Calculate total amount with gst
  useEffect(() => {
    let dis = 15;
    const calculateNetValue = (netValue) => {
      setNetValue(gross * (1 - dis / 100));
      setDis(netValue - gross);
    };
    calculateNetValue(netValue);
  }, [netValue, rate, gross, dis, setNetValue]);

  // Calculate netpayable amount with gst
  useEffect(() => {
    let gst = 5;
    const calculateNetPayable = (netPayable) => {
      setNetPayable(netValue * (1 + gst / 100));
    };
    calculateNetPayable(netPayable);
  }, [netPayable, netValue, gst, setNetPayable]);

  // Calculate gst
  useEffect(() => {
    let gst = 5;
    const calculateGst = (gst) => {
      setGst(netPayable - netValue);
    };

    calculateGst(gst);
  }, [gst, netValue, setGst]);

  return (
    <>
      <main className={`${styles.container}`}>
        <h1 className="flex items-center justify-start text-xl font-semibold ml-4 mb-4">
          Create release order
        </h1>
        <form onSubmit={newCreateRo}>
          <div className="flex flex-col justify-center p-4">
            <article className="md:grid grid-cols-6 gap-6">
              <div className="flex flex-col">
                <label htmlFor="roNo">Order No.</label>
                <input
                  name="roNo"
                  type="text"
                  id="roNo"
                  autoComplete="off"
                  value={roNo}
                  onChange={(e) => setRoNo(e.target.value)}
                  className="p-2 mb-5"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="roDt">Order Dt.</label>
                <input
                  name="roDt"
                  type="date"
                  id="roDt"
                  autoComplete="off"
                  value={roDt}
                  onChange={(e) => setRoDt(e.target.value)}
                  className="p-2 mb-5"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="lines">Total Lines</label>
                <input
                  name="lines"
                  type="text"
                  id="lines"
                  autoComplete="off"
                  value={lines}
                  onChange={(e) => setLines(e.target.value)}
                  className="p-2 mb-5"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="rate">Rate</label>
                <input
                  name="rate"
                  type="text"
                  id="rate"
                  autoComplete="off"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  className="p-2 mb-5"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="gross">Gross</label>
                <input
                  name="gross"
                  type="text"
                  id="gross"
                  disabled
                  value={gross}
                  onChange={(e) => setGross(e.target.value)}
                  className="p-2 mb-5"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="dis">Discount (15%)</label>
                <input
                  name="dis"
                  type="text"
                  id="dis"
                  disabled
                  value={dis.toLocaleString()}
                  onChange={(e) => setDis(e.target.value)}
                  className="p-2 mb-5"
                />
              </div>
            </article>

            <article className="md:grid grid-cols-6 gap-6">
              <div className="flex flex-col">
                <label htmlFor="netValue">Net Value</label>
                <input
                  type="text"
                  name="netValue"
                  id="netValue"
                  disabled
                  value={netValue.toLocaleString()}
                  onChange={(e) => setNetValue(e.target.value)}
                  className="p-2 mb-5"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="gst">Gst (5%)</label>
                <input
                  name="gst"
                  type="text"
                  id="gst"
                  disabled
                  value={gst.toLocaleString()}
                  onChange={(e) => setGst(e.target.value)}
                  className="p-2 mb-5"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="netPayable">Net Payable</label>
                <input
                  name="netPayable"
                  type="text"
                  id="netPayable"
                  disabled
                  value={netPayable.toLocaleString()}
                  onChange={(e) => setNetPayable(e.target.value)}
                  className="p-2 mb-5"
                />
              </div>

              <div className="flex flex-col mb-5">
                <label htmlFor="pubDt">Publication Dt.</label>
                <input
                  type="date"
                  name="pubDt"
                  id="pubDt"
                  autoComplete="off"
                  value={pubDt}
                  onChange={(e) => setPubDt(e.target.value)}
                  className="p-2 mb-5md:w-full w-full px-3"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="category">Advt Category</label>
                <select
                  name="category"
                  type="text"
                  id="category"
                  autoComplete="off"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="p-2 mb-5"
                >
                  <option>Choose -- </option>
                  <option>Name Change</option>
                  <option>Lost & Found</option>
                  <option>Matrimonial</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="edition">Edition</label>
                <select
                  name="edition"
                  type="text"
                  id="edition"
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
            </article>

            <article className="md:grid grid-cols-4 gap-6">
              <div className="flex flex-col">
                <label htmlFor="newsPaper">NewsPaper</label>
                <select
                  name="newsPaper"
                  type="text"
                  id="newsPaper"
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

              <div className="flex flex-col">
                <label htmlFor="clientName">Client Name</label>
                <input
                  name="clientName"
                  type="text"
                  id="clientName"
                  autoComplete="off"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="p-2 mb-5"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="clientAddress">Address</label>
                <input
                  name="clientAddress"
                  type="text"
                  id="clientAddress"
                  autoComplete="off"
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                  className="p-2 mb-5"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="clientMobile">Mobile</label>
                <input
                  name="clientMobile"
                  type="text"
                  id="clientMobile"
                  autoComplete="off"
                  value={clientMobile}
                  onChange={(e) => setClientMobile(e.target.value)}
                  className="p-2 mb-5"
                />
              </div>
            </article>
          </div>

          <button type="submit" className={`${styles.button} ml-4 mb-4`}>
            Create RO
          </button>
        </form>
      </main>
    </>
  );
}

export default CreateRo;
