import React, { useEffect } from "react";
import { Html } from "@react-three/drei";
import "../../css/progress-bar.css";
import { useTheme } from "../layout/ThemeContext";

function Loading() {
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((progress) => progress + 5);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const {changeBackground} = useTheme()
  changeBackground('rgb(89, 89, 127)')

  return (
    <Html>
      <div className="miComponente">
        <div className="container">
          <progress
            className="nes-progress is-pattern bar"
            value={progress}
            max="100"
          ></progress>
          <h1 className="etiquetaH1 font-pixelcraft">Cargando...</h1>
        </div>
      </div>
    </Html>
  );
}

function Loader({ isReady, children }) {
  return <>{isReady ? children : <Loading />}</>;
}

export default Loader;
