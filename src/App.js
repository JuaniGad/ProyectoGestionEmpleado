import React from "react";
import NavBar from "./components/NavBar";
import Info from "./components/Info";
import styles from "./style";
import Clientes from "./components/Clientes";

function App() {
  return (
    <div className="bg-black w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <div className={`bg-black ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Info />
        </div>
      </div>

      <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Clientes/>
          CLIENTES CONTACTO PREGUNTAS FRECUENTES ENLACES FOOTER
        </div>
      </div>
    </div>
  );
}

export default App;
