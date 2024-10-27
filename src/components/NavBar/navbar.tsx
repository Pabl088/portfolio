import style from "./navbar.module.css";
import { NavBarProps } from "../../interfaces/navbar.interfaces";

const NavBar: React.FC<NavBarProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className={style.navbar}>
      <ul className={style.navbar_list}>
        <li className={style.navbar_item}>
          <button className={`${style.navbar_btn_link} ${currentPage === "about" ? style.active_link : ""}`} onClick={() => setCurrentPage("about")}>
            About
          </button>
        </li>
        <li className={style.navbar_item}>
          <button className={`${style.navbar_btn_link} ${currentPage === "resume" ? style.active_link : ""}`} onClick={() => setCurrentPage("resume")}>
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
