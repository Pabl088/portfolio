import style from "./projects.module.css";
import socialsound from "../../assets/Projects/SocialSound.png";
import wikipoke from "../../assets/Projects/WikiPoke.jpg";
import datasystem from "../../assets/Projects/datasystem.gif";
import fruitapp from "../../assets/Projects/FruitApp.gif";

const Projects: React.FC = () => {
  return (
    <section className={style.container}>
      <header>
        <h2 className={style.title}>Projects</h2>
      </header>
      <ul className={style.projects_list}>
        <li className={style.project_item}>
          <a href="#">
            <figure className={style.project_img_container}>
              <img src={socialsound} alt="SocialSound image" />
            </figure>
            <h3 className={style.project_title}>SocialSound</h3>
            <p className={style.project_category}>Website</p>
          </a>
        </li>
        <li className={style.project_item}>
          <a href="#">
            <figure className={style.project_img_container}>
              <img src={wikipoke} alt="WikiPoke image" />
            </figure>
            <h3 className={style.project_title}>WikiPoke</h3>
            <p className={style.project_category}>Website</p>
          </a>
        </li>
        <li className={style.project_item}>
          <a href="#">
            <figure className={style.project_img_container}>
              <img src={datasystem} alt="DataSystem image" />
            </figure>
            <h3 className={style.project_title}>DataSystem</h3>
            <p className={style.project_category}>Desktop Application</p>
          </a>
        </li>
        <li className={style.project_item}>
          <a href="#">
            <figure className={style.project_img_container}>
              <img src={fruitapp} alt="FruitApp image" />
            </figure>
            <h3 className={style.project_title}>FruitApp</h3>
            <p className={style.project_category}>Mobile Game</p>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
