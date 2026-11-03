// Dark page header shared by Experience / Projects / Contact: same glow as the home hero, no photo.
export default function PageHead({ title, sub }) {
  return (
    <section className="pp-head">
      <div className="ph-glow" aria-hidden="true" />
      <div className="container pp-head-inner">
        <h1>{title}</h1>
        {sub && <p>{sub}</p>}
      </div>
    </section>
  );
}
