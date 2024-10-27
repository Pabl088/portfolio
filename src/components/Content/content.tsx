import { useState } from "react";
import style from "./content.module.css";
import NavBar from "../NavBar/navbar";
import About from "../About/about";
import Resume from "../Resume/resume";

const Content: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("about");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <section className={style.content}>
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </section>
  );
};

export default Content;
