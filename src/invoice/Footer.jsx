export default function Footer({ name, bankAccount, bankName, ifsc }) {
  return (
    <>
      <footer className="footer text-sm mt-10 border border-gray-400 p-1">
        <ul className="flex flex-wrap items-center justify-center">
          {/**
          <li>
            <span className="font-bold">Name:</span> {name}
          </li>
          */}
          <li>
            <span className="font-bold">Account Name:</span> {name}
          </li>
          <li>
            <span className="font-bold">Bank:</span> {bankName}
          </li>
          <li>
            <span className="font-bold">Account number:</span> {bankAccount}
          </li>
          <li>
            <span className="font-bold">IFSC:</span> {ifsc}
          </li>
        </ul>
      </footer>
    </>
  );
}
