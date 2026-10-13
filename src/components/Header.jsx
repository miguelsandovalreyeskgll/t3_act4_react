
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-contenido">
        <span className="carta" aria-hidden="true">
          忍
        </span>

        <h1>Naruto: Baraja Ninja</h1>

        <span className="carta2" aria-hidden="true">
          忍
        </span>

        <p className="descripcion">
          Selecciona a tu ninja favorito, administra su chakra
          y descubre sus habilidades.
        </p>
      </div>
    </header>
  );
}

export default Header;
