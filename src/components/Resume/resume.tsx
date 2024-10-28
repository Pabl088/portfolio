import style from "./resume.module.css";
import { IoBookOutline, IoBriefcaseOutline } from "react-icons/io5";

const Resume: React.FC = () => {
  return (
    <article className={style.container}>
      <header>
        <h2 className={style.title}>Resume</h2>
      </header>
      <section className={style.timeline}>
        <div className={style.timeline_title_container}>
          <div className={style.icon_box}>
            <IoBriefcaseOutline />
          </div>
          <h3 className={style.timeline_title}>Experience</h3>
        </div>
        <ol className={style.timeline_list}>
          <li className={style.timeline_item}>
            <h4 className={style.timeline_item_title}>Fullstack Developer</h4>
            <span>2022 - Present</span>
            <ul className={style.timeline_text_list}>
              <li>Developed a full stack application using React, Node.js, and MongoDB.</li>
              <li>Designed and implemented a responsive user interface using HTML, CSS, and JavaScript.</li>
              <li>Collaborated with cross-functional teams to deliver high-quality software solutions.</li>
              <li>Managed and maintained the codebase, ensuring its maintainability and scalability.</li>
              <li>Optimized performance and efficiency by implementing best practices and techniques.</li>
              <li>Conducted thorough testing and debugging to identify and fix bugs.</li>
            </ul>
          </li>
          <li className={style.timeline_item}>
            <h4 className={style.timeline_item_title}>Fullstack Developer</h4>
            <span>2022 - Present</span>
            <ul className={style.timeline_text_list}>
              <li>Developed a full stack application using React, Node.js, and MongoDB.</li>
              <li>Designed and implemented a responsive user interface using HTML, CSS, and JavaScript.</li>
              <li>Collaborated with cross-functional teams to deliver high-quality software solutions.</li>
              <li>Managed and maintained the codebase, ensuring its maintainability and scalability.</li>
              <li>Optimized performance and efficiency by implementing best practices and techniques.</li>
              <li>Conducted thorough testing and debugging to identify and fix bugs.</li>
            </ul>
          </li>
          <li className={style.timeline_item}>
            <h4 className={style.timeline_item_title}>Fullstack Developer</h4>
            <span>2022 - Present</span>
            <ul className={style.timeline_text_list}>
              <li>Developed a full stack application using React, Node.js, and MongoDB.</li>
              <li>Designed and implemented a responsive user interface using HTML, CSS, and JavaScript.</li>
              <li>Collaborated with cross-functional teams to deliver high-quality software solutions.</li>
              <li>Managed and maintained the codebase, ensuring its maintainability and scalability.</li>
              <li>Optimized performance and efficiency by implementing best practices and techniques.</li>
              <li>Conducted thorough testing and debugging to identify and fix bugs.</li>
            </ul>
          </li>
        </ol>
      </section>
      <section className={style.timeline}>
        <div className={style.timeline_title_container}>
          <div className={style.icon_box}>
            <IoBookOutline />
          </div>
          <h3 className={style.timeline_title}>Education</h3>
        </div>
        <ol className={style.timeline_list}>
          <li className={style.timeline_item}>
            <h4 className={style.timeline_item_title}>Fullstack Developer</h4>
            <span>2022 - Present</span>
            <ul className={style.timeline_text_list}>
              <li>Developed a full stack application using React, Node.js, and MongoDB.</li>
              <li>Designed and implemented a responsive user interface using HTML, CSS, and JavaScript.</li>
              <li>Collaborated with cross-functional teams to deliver high-quality software solutions.</li>
              <li>Managed and maintained the codebase, ensuring its maintainability and scalability.</li>
              <li>Optimized performance and efficiency by implementing best practices and techniques.</li>
              <li>Conducted thorough testing and debugging to identify and fix bugs.</li>
            </ul>
          </li>
          <li className={style.timeline_item}>
            <h4 className={style.timeline_item_title}>Fullstack Developer</h4>
            <span>2022 - Present</span>
            <ul className={style.timeline_text_list}>
              <li>Developed a full stack application using React, Node.js, and MongoDB.</li>
              <li>Designed and implemented a responsive user interface using HTML, CSS, and JavaScript.</li>
              <li>Collaborated with cross-functional teams to deliver high-quality software solutions.</li>
              <li>Managed and maintained the codebase, ensuring its maintainability and scalability.</li>
              <li>Optimized performance and efficiency by implementing best practices and techniques.</li>
              <li>Conducted thorough testing and debugging to identify and fix bugs.</li>
            </ul>
          </li>
          <li className={style.timeline_item}>
            <h4 className={style.timeline_item_title}>Fullstack Developer</h4>
            <span>2022 - Present</span>
            <ul className={style.timeline_text_list}>
              <li>Developed a full stack application using React, Node.js, and MongoDB.</li>
              <li>Designed and implemented a responsive user interface using HTML, CSS, and JavaScript.</li>
              <li>Collaborated with cross-functional teams to deliver high-quality software solutions.</li>
              <li>Managed and maintained the codebase, ensuring its maintainability and scalability.</li>
              <li>Optimized performance and efficiency by implementing best practices and techniques.</li>
              <li>Conducted thorough testing and debugging to identify and fix bugs.</li>
            </ul>
          </li>
        </ol>
      </section>
    </article>
  );
};

export default Resume;
