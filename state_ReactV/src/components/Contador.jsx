import { useState } from "react";

const Contador = () => {
  const [positivos, setPositivos] = useState(0);
  const [negativos, setNegativos] = useState(0);

  const total = positivos + negativos;

  return (
    <div>
      <h1>Votaciones</h1>
      <img
        src="https://m.media-amazon.com/images/S/pv-target-images/941c6ce5e1fabb873a276cea5ac1b5028ac017b68e9476cf3e8516269bb6027d._SX1080_FMjpg_.jpg"
        alt=""
      />

      <p>Total de votaciones encuesta: {total}</p>
      <p>Puntos a favor: {positivos}</p>
      <p>Puntos negativos: {negativos}</p>

      <button onClick={() => setPositivos(positivos + 1)}>
        Sumar puntos
      </button>

      <button onClick={() => setNegativos(negativos - 1)}>
        puntos negativos
      </button>
    </div>
  );
};

export default Contador;
