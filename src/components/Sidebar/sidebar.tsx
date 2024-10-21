import { useState } from "react";
import style from "./sidebar.module.css";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleShowContactInfo = () => {
    setIsActive(prevState => !prevState);
  };

  return (
    <aside className={`${style.sidebar} ${isActive ? style.active : ""}`}>
      <div className={style.sidebar_info}>
        <figure className={style.avatar_box}>
          <img style={{ height: "120px" }} className={style.avatar_box} src="/src/assets/my_avatar.png" alt="Pablo Albin" />
        </figure>
        <div className={style.info_content}>
          <h1 className={style.name}>Pablo Albin</h1>
          <p className={style.title}>Fullstack Developer</p>
        </div>
        <button className={style.info_more_btn} onClick={toggleShowContactInfo}>
          <span>Show contact information</span>
          <FaChevronDown />
        </button>
      </div>
      <div className={style.sidebar_info_contact}>
        <div className={style.separator}></div>
        <ul className={style.contact_list}>
          <li className={style.contact_item}>
            <div className={style.icon_box}>
              <MdOutlineEmail />
            </div>
            <div className={style.contact_info}>
              <p className={style.contact_title}>Email</p>
              <a href="mailto:pablo.albin88@gmail.com" className={style.contact_link}>
                pablo.albin88@gmail.com
              </a>
            </div>
          </li>
          <li className={style.contact_item}>
            <div className={style.icon_box}>
              <IoIosPhonePortrait />
            </div>
            <div className={style.contact_info}>
              <p className={style.contact_title}>Phone</p>
              <a href="tel:+59891436300" className={style.contact_link}>
                +59891436300
              </a>
            </div>
          </li>
          <li className={style.contact_item}>
            <div className={style.icon_box}>
              <IoLocationOutline />
            </div>
            <div className={style.contact_info}>
              <p className={style.contact_title}>Location</p>
              <address>Salto, Uruguay</address>
            </div>
          </li>
        </ul>
        <div className={style.separator}></div>
        <ul className={style.social_list}>
          <li className={style.social_item}>
            <a href="https://github.com/Pabl088" target="_blank" rel="noreferrer" className={style.social_link}>
              <FaGithub />
            </a>
          </li>
          <li className={style.social_item}>
            <a href="https://www.linkedin.com/in/pablo-albin" target="_blank" rel="noreferrer" className={style.social_link}>
              <FaLinkedin />
            </a>
          </li>
          <li className={style.social_item}>
            <a href="mailto:pablo.albin88@gmail.com" target="_blank" rel="noreferrer" className={style.social_link}>
              <MdOutlineEmail />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
