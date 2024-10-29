import { AiOutlineDownload } from "react-icons/ai";
import style from "./downloadButton.module.css";
import CV from "@/assets/Resume/CV.pdf";

const downloadCV = () => {
  const a = document.createElement("a");
  a.href = CV;
  a.download = "Pablo Albin - FullStack Developer.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
};

const DownloadButton: React.FC = () => {
  return (
    <button className={style.download_button} onClick={downloadCV}>
      <AiOutlineDownload />
      &nbsp;Download CV
    </button>
  );
};

export default DownloadButton;
