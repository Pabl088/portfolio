import style from "./main.module.css";
import Sidebar from "../Sidebar/sidebar";
import Content from "../Content/content";

const Main: React.FC = () => {
  return (
    <main className={style.main_container}>
      <Sidebar />
      <Content />
    </main>
  );
};

export default Main;
