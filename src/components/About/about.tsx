import style from "./about.module.css";

const About: React.FC = () => {
  return (
    <article className={style.container}>
      <header>
        <h2 className={style.title}>About</h2>
      </header>
    </article>
  );
};

export default About;
