export default function Notes({ notes }) {
  return (
    <>
      <section className="mt-10 mb-5">
        <p className="text-sm text-left"><span className="font-bold mr-2">Note:</span>{notes}</p>
      </section>
    </>
  );
}
