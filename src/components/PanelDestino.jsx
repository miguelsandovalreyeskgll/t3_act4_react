
import "./PanelDestino.css";

function PanelDestino({
  carta,
  poderActual,
  subirPoder,
  bajarPoder,
  reiniciarPoder,
  mostrarDescripcion,
  alternarDescripcion,
}) {
  if (!carta) {
    return (
      <section className="panel-destino">
        <h2>Selecciona un ninja</h2>
        <p>Elige una carta para ver su información.</p>
      </section>
    );
  }

  return (
    <section className="panel-destino">
      <div className="panel-destino-contenido">
        <div className="panel-informacion">
          <p className="panel-etiqueta">
            Ninja seleccionado
          </p>

          <h2>{carta.nombre}</h2>

          <p className="panel-tipo">
            {carta.tipo}
          </p>

          <p className="panel-rareza">
            Rareza: {carta.rareza}
          </p>

          {mostrarDescripcion && (
            <p className="panel-descripcion">
              {carta.descripcion}
            </p>
          )}

          <button
            type="button"
            className="boton-descripcion"
            onClick={alternarDescripcion}
          >
            {mostrarDescripcion
              ? "Ocultar descripción"
              : "Mostrar descripción"}
          </button>
        </div>

        <div className="panel-poder">
          <p>Chakra actual</p>

          <span>{poderActual}</span>

          <div className="panel-botones">
            <button type="button" onClick={subirPoder}>
              +10 Chakra
            </button>

            <button type="button" onClick={bajarPoder}>
              -10 Chakra
            </button>

            <button type="button" onClick={reiniciarPoder}>
              Reiniciar chakra
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PanelDestino;
