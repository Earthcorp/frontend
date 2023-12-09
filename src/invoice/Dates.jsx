import moment from "moment";

export default function Dates({ invoiceNumber, invoiceDate }) {
  return (
    <>
      <article className="mb-10 flex items-end justify-end">
        <table>
          <thead>
            <tr>
              <td className="font-bold">Invoice number</td>
              <td>{invoiceNumber}</td>
            </tr>
            <tr>
              <td className="font-bold">Invoice date</td>
              <td>{moment(invoiceDate).format("DD-MM-YYYY")}</td>
            </tr>
          </thead>
        </table>
        {/** <ul>
          <li>
            <span className="font-bold">Invoice number:</span> {invoiceNumber}
          </li>
          <li className="bg-gray-100">
            <span className="font-bold">Invoice date:</span> {invoiceDate}
          </li>
          <li>
            <span className="font-bold">Due date:</span> {dueDate}
          </li>
        </ul> */}
      </article>
    </>
  );
}
