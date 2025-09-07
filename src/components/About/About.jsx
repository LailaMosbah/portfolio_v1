import "./about.css";

export default function About() {
  return (
    <section className="aboutSection" id="about">
      <h1 className="aboutTitle">What I do</h1>
      <div className="aboutList">
        <div className="aboutListItem">
          <h2>Frontend Development</h2>
          <p className="aboutDesc">
            I build responsive and interactive websites using React, JavaScript,
            HTML, CSS, and Bootstrap. My focus is on clean design and smooth
            user experiences that work across all devices.
          </p>
        </div>
        <div className="aboutListItem">
          <h2>Responsive Web Design</h2>
          <p className="aboutDesc">
            I make sure every website looks great and functions perfectly on
            desktops, tablets, and mobile phones by following mobile-first and
            modern UI/UX practices.
          </p>
        </div>
        <div className="aboutListItem">
          <h2>API Integration</h2>
          <p className="aboutDesc">
            I connect applications with external APIs using tools like Axios and
            Fetch to display dynamic data and create more powerful, real-world
            projects.
          </p>
        </div>
        <div className="aboutListItem">
          <h2>Problem Solving</h2>
          <p className="aboutDesc">
            I enjoy solving coding challenges and optimizing solutions, making
            applications not only functional but also fast and maintainable.
          </p>
        </div>
      </div>
    </section>
  );
}
