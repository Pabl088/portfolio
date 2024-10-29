import DownloadButton from "../DownloadButton/downloadButton";
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
            <h4 className={style.timeline_item_title}>Full Stack Developer - TechnoApes</h4>
            <span>November 2023 - Present</span>
            <ul className={style.timeline_text_list}>
              <li>Developed web administration tools for clients, enhancing user experience and efficiency.</li>
              <li>Collaborated closely with technical support to address client needs and provide solutions.</li>
              <li>Utilized TypeScript, Angular, Spring Boot, and MySQL in project implementations.</li>
              <li>Managed versioning and deployments on AWS.</li>
            </ul>
          </li>
          <li className={style.timeline_item}>
            <h4 className={style.timeline_item_title}>Full Stack Developer - SpicyTool</h4>
            <span>August 2023 - November 2023</span>
            <ul className={style.timeline_text_list}>
              <li>Integrated Google Ads for customer analytics, visualizing data insights through charts.</li>
              <li>Resolved site structure issues in WordPress to enhance site stability and SEO.</li>
              <li>Utilized PHP, Laravel, AWS, and WordPress for various project needs.</li>
            </ul>
          </li>
          <li className={style.timeline_item}>
            <h4 className={style.timeline_item_title}>Personal Projects</h4>
            <span>Ongoing</span>
            <ul className={style.timeline_text_list}>
              <li>
                SocialSound: Created a social network for musicians, including search, user management, payment gateway, and rating system. Built with React.js, Firebase,
                and PostgreSQL.
              </li>
              <li>Pokemons App: Developed an app with search, filter, and custom creation features. Utilized React, Express, and PostgreSQL.</li>
              <li>FruitApp: An Android game with Java, focusing on arithmetic challenges and progressive difficulty levels.</li>
              <li>
                DataSystem: Desktop app for computer repair management with user, client, and device management. Developed with local/cloud database support and PDF
                export capabilities.
              </li>
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
            <h4 className={style.timeline_item_title}>Full Stack Developer - Henry Bootcamp</h4>
            <span>2022</span>
            <ul className={style.timeline_text_list}>
              <li>700 hours of training on React, Redux, Node.js, Express, SQL, testing, and authentication.</li>
              <li>Practical projects focused on data structures, asynchronous programming, and API integration.</li>
            </ul>
          </li>
          <li className={style.timeline_item}>
            <h4 className={style.timeline_item_title}>Programmer Analyst - ORT University</h4>
            <span>2018 - 2020</span>
            <ul className={style.timeline_text_list}>
              <li>Emphasis on system development aligned with business needs and innovation.</li>
              <li>Courses in algorithms, databases, software architecture, and Java programming.</li>
            </ul>
          </li>
          <li className={style.timeline_item}>
            <h4 className={style.timeline_item_title}>Additional Certifications</h4>
            <ul className={style.timeline_text_list}>
              <li>Java and Spring frameworks (Computer Pills) - Proficiency in JSE, JEE, and Spring MVC.</li>
              <li>Angular Development (Computer Pills) - Mastery of components, routing, and Firebase integration.</li>
              <li>English Level B2 Certification - EFSET</li>
            </ul>
          </li>
        </ol>
      </section>
      <DownloadButton />
    </article>
  );
};

export default Resume;
