import React from "react";
import moment from "moment";

export default function Table({ list, total, gst, netPayable }) {
  return (
    <>
      <table className="mb-2">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">#</td>
            <td className="font-bold">Description</td>
            <td className="font-bold">Qty</td>
            <td className="font-bold">Publish</td>
            <td className="font-bold">NewsPaper</td>
            <td className="font-bold">Edition</td>
            <td className="font-bold">Lines</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
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
                  <td>{amount}</td>
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
              One Thousand two hundred twenty only
            </td>
            <td className="font-semibold text-sm">Total</td>
            <td>{total.toFixed(2)}</td>
          </tr>
          <tr>
            <td className="font-semibold text-sm">Gst (5%)</td>
            <td>{gst.toFixed(2)}</td>
          </tr>
          <tr>
            <td className="font-semibold text-sm">Net Payable</td>
            <td className="font-semibold">{netPayable.toFixed(2)}</td>
          </tr>
        </table>
        {/** 
        <h2 className="flex items-end justify-end text-gray-800 text-xl font-bold">
          Total {total.toLocaleString()}
        </h2>
        */}
      </div>
    </>
  );
}
