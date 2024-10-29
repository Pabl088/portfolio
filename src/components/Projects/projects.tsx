import style from "./projects.module.css";
import socialsound from "@/assets/Projects/social_sound.png";
import wikipoke from "@/assets/Projects/wiki_poke.jpg";
import datasystem from "@/assets/Projects/datasystem.gif";
import fruitapp from "@/assets/Projects/fruitapp.gif";

const Projects: React.FC = () => {
  return (
    <section className={style.container}>
      <header>
        <h2 className={style.title}>Projects</h2>
      </header>
      <ul className={style.projects_list}>
        <li className={style.project_item}>
          <a href="https://social-sound.vercel.app" target="_blank" rel="noreferrer">
            <figure className={style.project_img_container}>
              <img src={socialsound} alt="SocialSound image" />
            </figure>
          </a>
          <div className={style.project_info_container}>
            <div className={style.project_description_container}>
              <h3 className={style.project_title}>SocialSound</h3>
              <p className={style.project_category}>Website</p>
            </div>
            <div className={style.project_links_container}>
              <a href="https://social-sound.vercel.app" target="_blank" rel="noreferrer">
                <span>Demo</span>
              </a>
              <a href="https://github.com/Pabl088/SocialSound" target="_blank" rel="noreferrer">
                <span>Github</span>
              </a>
            </div>
          </div>
        </li>
        <li className={style.project_item}>
          <a href="https://wikipoke.vercel.app" target="_blank" rel="noreferrer">
            <figure className={style.project_img_container}>
              <img src={wikipoke} alt="WikiPoke image" />
            </figure>
          </a>
          <div className={style.project_info_container}>
            <div className={style.project_description_container}>
              <h3 className={style.project_title}>WikiPoke</h3>
              <p className={style.project_category}>Website</p>
            </div>
            <div className={style.project_links_container}>
              <a href="https://wikipoke.vercel.app" target="_blank" rel="noreferrer">
                <span>Demo</span>
              </a>
              <a href="https://github.com/Pabl088/WikiPoke" target="_blank" rel="noreferrer">
                <span>Github</span>
              </a>
            </div>
          </div>
        </li>
        <li className={style.project_item}>
          <a href="https://github.com/Pabl088/DataSystem" target="_blank" rel="noreferrer">
            <figure className={style.project_img_container}>
              <img src={datasystem} alt="DataSystem image" />
            </figure>
          </a>
          <div className={style.project_info_container}>
            <div className={style.project_description_container}>
              <h3 className={style.project_title}>DataSystem</h3>
              <p className={style.project_category}>Desktop Application</p>
            </div>
            <div className={style.project_links_container}>
              <a href="https://github.com/Pabl088/DataSystem" target="_blank" rel="noreferrer">
                <span>Github</span>
              </a>
            </div>
          </div>
        </li>
        <li className={style.project_item}>
          <a href="https://github.com/Pabl088/FruitApp" target="_blank" rel="noreferrer">
            <figure className={style.project_img_container}>
              <img src={fruitapp} alt="FruitApp image" />
            </figure>
          </a>
          <div className={style.project_info_container}>
            <div className={style.project_description_container}>
              <h3 className={style.project_title}>FruitApp</h3>
              <p className={style.project_category}>Mobile Game</p>
            </div>
            <div className={style.project_links_container}>
              <a href="https://github.com/Pabl088/FruitApp/releases/download/Android/FruitApp.apk" target="_blank" rel="noreferrer">
                <span>APP</span>
              </a>
              <a href="https://github.com/Pabl088/FruitApp" target="_blank" rel="noreferrer">
                <span>Github</span>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
