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
            <h4 className={style.timeline_item_title}>Full Stack Developer - Techforb</h4>
            <span>March 2025 - Present</span>
            <ul className={style.timeline_text_list}>
              <li>Developed and maintained microservices APIs using Spring Boot (Java) and NestJS (TypeScript) to support core business workflows.</li>
              <li>Built responsive front-end interfaces with Angular and React, ensuring seamless user experiences across applications.</li>
              <li>Integrated third-party services and internal modules into various APIs, designing robust business logic and data flows.</li>
              <li>Created automated document-generation solutions, streamlining reporting processes and reducing manual effort.</li>
              <li>Managed CI/CD pipelines and deployments on AWS with Jenkins, ensuring reliable, scalable delivery and infrastructure health.</li>
            </ul>
          </li>
          <li className={style.timeline_item}>
            <h4 className={style.timeline_item_title}>Full Stack Developer - TechnoApes</h4>
            <span>October 2023 - February 2025</span>
            <ul className={style.timeline_text_list}>
              <li>Developed new websites and APIs for efficient client and staff management, enhancing user tracking and administration.</li>
              <li>Implemented APIs for process automation, optimizing workflows and reducing operation times.</li>
              <li>Collaborated on improving existing modules, ensuring applications are scalable and adaptable to new requirements.</li>
              <li>Utilized TypeScript, Node.js, Angular, Spring Boot, and MySQL to ensure efficient and secure performance in each development.</li>
            </ul>
          </li>
          <li className={style.timeline_item}>
            <h4 className={style.timeline_item_title}>Full Stack Developer - SpicyTool</h4>
            <span>January 2023 - October 2023</span>
            <ul className={style.timeline_text_list}>
              <li>Integrated the Google Ads API into the platform to enable real-time management and monitoring of digital marketing campaigns.</li>
              <li>Collaborated on enhancing various web modules, optimizing existing functionalities and improving the user experience.</li>
              <li>Developed new features on the platform, expanding capabilities for data management and analysis.</li>
              <li>Utilized PHP, Laravel, AWS, and WordPress to meet various project needs, ensuring efficient and scalable performance.</li>
            </ul>
          </li>
          <li className={style.timeline_item}>
            <h4 className={style.timeline_item_title}>Full Stack Developer - Gosocial</h4>
            <span>May 2022 - December 2022</span>
            <ul className={style.timeline_text_list}>
              <li>Collaborated in the design and optimization of the PostgreSQL database to efficiently manage connections between donors and social causes.</li>
              <li>Developed the backend structure and multiple endpoints in Node.js, ensuring secure and fast data management between users and social causes.</li>
              <li>Implemented the frontend in React, focusing on an intuitive and accessible interface to enhance user navigation and engagement.</li>
              <li>Participated in integrating external services for real-time notifications, improving communication between users and the platform.</li>
              <li>Utilized TypeScript across the stack to ensure a robust codebase and minimize development errors.</li>
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
