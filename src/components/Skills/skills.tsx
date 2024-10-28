import style from "./skills.module.css";

const Skills: React.FC = () => {
  return (
    <section className={style.container}>
      <header>
        <h2 className={style.title}>Skills</h2>
      </header>
      <div>
        <h4 className={style.subtitle}>Frontend</h4>
        <div className={style.skills_container}>
          <div className={style.skill}>Angular</div>
          <div className={style.skill}>React</div>
          <div className={style.skill}>Vue</div>
          <div className={style.skill}>HTML</div>
          <div className={style.skill}>CSS</div>
          <div className={style.skill}>JavaScript</div>
          <div className={style.skill}>TypeScript</div>
          <div className={style.skill}>Sass</div>
          <div className={style.skill}>Tailwind</div>
          <div className={style.skill}>Bootstrap</div>
        </div>
        <h4 className={style.subtitle}>Backend</h4>
        <div className={style.skills_container}>
          <div className={style.skill}>Node.js</div>
          <div className={style.skill}>Express</div>
          <div className={style.skill}>MongoDB</div>
          <div className={style.skill}>PostgreSQL</div>
          <div className={style.skill}>MySQL</div>
          <div className={style.skill}>Firebase</div>
          <div className={style.skill}>Git</div>
        </div>
        <h4 className={style.subtitle}>Database </h4>
        <div className={style.skills_container}>
          <div className={style.skill}>SQL</div>
          <div className={style.skill}>NoSQL</div>
          <div className={style.skill}>PostgreSQL</div>
          <div className={style.skill}>MySQL</div>
          <div className={style.skill}>MongoDB</div>
          <div className={style.skill}>Firebase</div>
        </div>
        <h4 className={style.subtitle}>Tools</h4>
        <div className={style.skills_container}>
          <div className={style.skill}>VS Code</div>
          <div className={style.skill}>Git</div>
          <div className={style.skill}>Docker</div>
          <div className={style.skill}>Heroku</div>
          <div className={style.skill}>Netlify</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
