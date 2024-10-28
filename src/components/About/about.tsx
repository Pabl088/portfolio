import Projects from "../Projects/projects";
import Skills from "../Skills/skills";
import style from "./about.module.css";

const About: React.FC = () => {
  return (
    <article className={style.container}>
      <header>
        <h2 className={style.title}>About</h2>
      </header>
      <section className={style.about_text}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatibus, voluptas, doloremque, quia, ipsa, quos, aspernatur doloribus, voluptatem,
          dolorem, quisquam, quod, asperiores, repellat quibusdam, voluptas, doloremque, quia, ipsa, quos, aspernatur doloribus, voluptatem, dolorem, quisquam, quod,
          asperiores, repellat quibusdam, voluptas, doloremque, quia, ipsa, quos, aspernatur doloribus.
        </p>
      </section>
      <Projects />
      <Skills />
    </article>
  );
};

export default About;
