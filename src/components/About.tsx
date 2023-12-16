import aboutContent from "../temp/about";
export default function About() {
  return (
    <section className="about" id="about">
      <article className="about-content">
        <h3>Cool Band</h3>
        <div>
          {aboutContent.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>
      <div className="about-image">
        <img src={aboutContent.img} alt="cool band show" />
      </div>
    </section>
  );
}
