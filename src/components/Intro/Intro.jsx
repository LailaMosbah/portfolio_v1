import "./intro.css";

export default function Intro() {
  return (
    <section id="home" className="introSection">
      <div className="introContent">
        <span className="introGreeting">Hello,</span>
        <p className="introName">I'm Laila Mosbah</p>
        <p className="introRole">
          <strong>A MERN Stack Developer & Frontend Specialist</strong>{" "}
          passionate about building user-friendly, responsive, and creative web
          applications.
        </p>
        <p className="introDesc">
          I help businesses bring their ideas to life with clean code and
          engaging designs.
        </p>
        <button
          className="desktopMenuBtn"
          onClick={() => {
            document
              .getElementById("contacts")
              .scrollIntoView({ behavior: "smooth", offset: -200 });
          }}
        >
          Contact Me
        </button>
      </div>
    </section>
  );
}
