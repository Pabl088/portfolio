import style from "./main.module.css";
import Sidebar from "../Sidebar/sidebar";

const Main: React.FC = () => {
  return (
    <main className={style.main_container}>
      <Sidebar />
    </main>
  );
};

export default Main;
