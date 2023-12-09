export default function ClientDetails({
  clientName,
  clientAddress,
  clientPhone,
}) {
  return (
    <>
      <section className="items-center justify-center">
        <span className="text-[12px] font-semibold uppercase">Invoice to:</span>
        <h2 className="text-xl uppercase font-bold">{clientName}</h2>
        <p>{clientAddress}</p>
        <p>{clientPhone}</p>
      </section>
    </>
  );
}
