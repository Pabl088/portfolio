import style from "./content.module.css";
import NavBar from "../NavBar/navbar";
import About from "../About/about";
import Resume from "../Resume/resume";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Content: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("about");
  const endTriggerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (endTriggerRef.current) {
      // Configura ScrollTrigger para detectar el final del scroll
      ScrollTrigger.create({
        trigger: endTriggerRef.current, // Usamos el div vacío como trigger
        start: "top+=60 bottom", // Cuando el top del div entra en el viewport mas 60px
        onEnter: () => {
          // Cambia la página al llegar al final
          setCurrentPage(prevPage => (prevPage === "about" ? "resume" : "about"));

          // Ejecuta la animación para regresar al inicio
          gsap.to(window, { scrollTo: { y: 0 }, duration: 1, ease: "power2.out" });
        },
        once: false, // Permite que el evento ocurra cada vez que se llega al final
      });
    }

    const handleResize = () => {
      ScrollTrigger.refresh(); // Refresca ScrollTrigger al redimensionar la ventana
    };

    // Agrega el listener de resize
    window.addEventListener("resize", handleResize);

    // Limpia los listeners al desmontar el componente
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener("resize", handleResize); // Elimina el listener de resize
    };
  }, []);

  useEffect(() => {
    // Refresca ScrollTrigger cuando cambie la página actual para recalcular el tamaño del contenido
    ScrollTrigger.refresh();
  }, [currentPage]);

  return (
    <section className={style.content_container}>
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <div ref={endTriggerRef} style={{ height: "1px" }} /> {/* Crea un div vacío para detectar el final del scroll */}
    </section>
  );
};

export default Content;
