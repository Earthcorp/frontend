import moment from "moment";

export default function PaymentDetail({
  paymentMode,
  refNo,
  netPayable,
  invoiceDate,
}) {
  return (
    <>
      <section className="mt-10 md:w-1/3">
        <h2 className="text-md uppercase font-bold mb-2">Payment detail</h2>
        <ul>
          <li className="flex items-center justify-start gap-2">
            <span className="font-semibold">Mode:</span>
            {paymentMode}
          </li>
          <li className="flex items-center justify-start gap-2">
            <span className="font-semibold">Ref No:</span>
            {refNo}
          </li>
          <li className="flex items-center justify-start gap-2">
            <span className="font-semibold">Amount:</span>
            {netPayable.toFixed(2)}
          </li>
          <li className="flex items-center justify-start gap-2">
            <span className="font-semibold">Date:</span>
            {moment(invoiceDate).format("DD-MM-YYYY")}
          </li>
        </ul>

        {/** 
        <table className="border-none">
          <thead>
            <tr>
              <td className="font-bold border-none">Mode</td>
              <td className="border-none">{paymentMode}</td>
            </tr>
            <tr>
              <td className="font-bold border-none">Ref No</td>
              <td className="border-none">{refNo}</td>
            </tr>
            <tr>
              <td className="font-bold border-none">Amount</td>
              <td className="border-none">{netPayable.toLocaleString()}</td>
            </tr>
            <tr>
              <td className="font-bold border-none">Date</td>
              <td className="border-none">{moment(invoiceDate).format("DD-MM-YYYY")}</td>
            </tr>
          </thead>
        </table>
        */}

        {/**
         <p className="lg:w-1/2 text-left">{paymentMode}</p>
        <p className="lg:w-1/2 text-left">{total}</p>         
         */}
      </section>
    </>
  );
}
