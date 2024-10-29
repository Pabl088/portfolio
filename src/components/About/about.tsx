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
          I'm Pablo Albín, a Full Stack Developer with a strong background in building robust web and mobile applications. My expertise spans JavaScript, TypeScript,
          Node.js, Angular, React, and several backend frameworks, including Spring Boot and Laravel.
        </p>
        <p>
          I enjoy tackling complex challenges, whether it’s optimizing database interactions or creating intuitive, responsive interfaces. With experience in developing
          scalable solutions for diverse clients.
        </p>
        <p>
          I am skilled in AWS cloud management, Docker, and agile methodologies like Scrum. My portfolio showcases a variety of projects, from social networking platforms
          to mobile games, demonstrating my commitment to high-quality, innovative development.
        </p>
      </section>
      <Projects />
      <Skills />
    </article>
  );
};

export default About;
