
import "./Carta.css";
import { GiCardRandom } from "react-icons/gi";

function Carta({
  nombre,
  tipo,
  rareza,
  poder,
  descripcion,
  onSeleccionar,
}) {
  function manejarTeclado(evento) {
    if (evento.key === "Enter" || evento.key === " ") {
      evento.preventDefault();
      onSeleccionar();
    }
  }

  return (
    <article
      className="carta-destino"
      role="button"
      tabIndex={0}
      onClick={onSeleccionar}
      onKeyDown={manejarTeclado}
      aria-label={`Seleccionar a ${nombre}`}
    >
      <div className="carta-destino-icono">
        <GiCardRandom />
      </div>

      <div className="carta-destino-info">
        <h2>{nombre}</h2>

        <p className="carta-destino-tipo">
          {tipo}
        </p>

        <div className="carta-destino-datos">
          <span>Chakra inicial: {poder}</span>
          <span>Rareza: {rareza}</span>
        </div>

        <p className="carta-destino-descripcion">
          {descripcion}
        </p>
      </div>
    </article>
  );
}

export default Carta;
