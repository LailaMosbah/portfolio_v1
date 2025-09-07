import "./works.css";
import work1 from "../../assets/images/work1_todo.png";
import work2 from "../../assets/images/work2_preyerTimes.png";
import work3 from "../../assets/images/work3_traceMood.png";
import work4 from "../../assets/images/work4_socialMedia.png";
import work5 from "../../assets/images/work5_guessGame.png";
import work7 from "../../assets/images/work7_recipeSearch.png";

export default function Works() {
  return (
    <>
      <section className="worksSection" id="portfolio">
        <h2 className="worksTitle">My Works</h2>
        <section className="worksList">
          <div className="worksListItem">
            <img src={work7} alt="recipe search" />
            <a
              href="https://lailamosbah.github.io/click-and-cook/"
              className="worksDemoBtn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
          <div className="worksListItem">
            <img src={work4} alt="social media app" />
            <a
              href="https://lailamosbah.github.io/Tarmeez-Social-Media/index.html"
              className="worksDemoBtn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
          <div className="worksListItem">
            <img src={work1} alt="Todo project" />
            <a
              href="https://todolistbyreacttarmeez.netlify.app/"
              className="worksDemoBtn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>

          <div className="worksListItem">
            <img src={work2} alt="preyer times project" />
            <a
              href="https://lailamosbah.github.io/Prayer-times/"
              className="worksDemoBtn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>

          <div className="worksListItem">
            <img src={work3} alt="traceMood" />
            <a
              href="https://lailamosbah.github.io/Interactive-Mood-Tracker/"
              className="worksDemoBtn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>

          <div className="worksListItem">
            <img src={work5} alt="guess word game" />
            <a
              href="https://guessthewordbyreact.netlify.app/"
              className="worksDemoBtn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </section>
        <h3 className="worksGithubTitle">
          You can See more projects in my github
        </h3>
        <a
          href="https://github.com/LailaMosbah?tab=repositories"
          className="worksDemoBtn worksGithubBtn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Github
        </a>
      </section>
    </>
  );
}
