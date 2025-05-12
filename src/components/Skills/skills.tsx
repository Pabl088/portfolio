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
          <div className={style.skill}>React Native</div>
          <div className={style.skill}>TypeScript</div>
          <div className={style.skill}>JavaScript</div>
          <div className={style.skill}>HTML5</div>
          <div className={style.skill}>CSS3</div>
          <div className={style.skill}>Sass</div>
          <div className={style.skill}>Bootstrap</div>
          <div className={style.skill}>Figma</div>
        </div>
        <h4 className={style.subtitle}>Backend</h4>
        <div className={style.skills_container}>
          <div className={style.skill}>SpringBoot</div>
          <div className={style.skill}>NestJS</div>
          <div className={style.skill}>Laravel</div>
          <div className={style.skill}>GraphQL</div>
          <div className={style.skill}>Node.js</div>
          <div className={style.skill}>Express</div>
        </div>
        <h4 className={style.subtitle}>Database</h4>
        <div className={style.skills_container}>
          <div className={style.skill}>Prisma</div>
          <div className={style.skill}>MySQL</div>
          <div className={style.skill}>PostgreSQL</div>
          <div className={style.skill}>Firebase</div>
          <div className={style.skill}>MongoDB</div>
        </div>
        <h4 className={style.subtitle}>Tools</h4>
        <div className={style.skills_container}>
          <div className={style.skill}>AWS</div>
          <div className={style.skill}>Docker</div>
          <div className={style.skill}>Jenkins</div>
          <div className={style.skill}>Scrum</div>
          <div className={style.skill}>VS Code</div>
          <div className={style.skill}>Git</div>
          <div className={style.skill}>GitHub</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
