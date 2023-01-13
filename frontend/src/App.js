import React from "react";
import NavBar from "./components/NavBar";
import Info from "./components/Info";
import styles from "./style";
import Clientes from "./components/Clientes";
import Enlaces from "./components/Enlaces";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";

function App() {
  return (
    <div className="bg-black w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <NavBar />
        </div>
      </div>

      <div className={`bg-black ${styles.flexStart}`}>
        <div id="inicio"className={`${styles.boxWidth}`}>
          <Info />
        </div>
      </div>

      <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <section id="clientes">
          <Clientes/>
          </section>
          <section id="preguntas_frecuentes">
          <PreguntasFrecuentes/>
          </section>
          <section id="contacto">
          <Contacto/>
          </section>
          <section id="enlaces">
          <Enlaces/>
          </section>
          <Footer/>

        </div>
      </div>
    </div>
  );
}

export default App;
