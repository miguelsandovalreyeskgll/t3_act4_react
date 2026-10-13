
import { useState } from "react";
import Header from "./components/Header";
import Carta from "./components/Carta";
import PanelDestino from "./components/PanelDestino";
import Footer from "./components/Footer";
import "./App.css";

// Arreglo con los ocho personajes de Naruto.
// Los valores de chakra son inventados para esta práctica.
const personajes = [
  {
    id: 1,
    nombre: "Naruto Uzumaki",
    tipo: "Clan Uzumaki - Konoha",
    rareza: "Legendaria",
    chakraInicial: 150,
    descripcion:
      "Ninja de la Aldea de la Hoja que sueña con convertirse en Hokage. Posee una enorme cantidad de chakra y nunca se rinde.",
  },
  {
    id: 2,
    nombre: "Sasuke Uchiha",
    tipo: "Clan Uchiha - Sharingan",
    rareza: "Legendaria",
    chakraInicial: 140,
    descripcion:
      "Talentoso ninja del clan Uchiha. Utiliza el Sharingan, técnicas de fuego y poderosos ataques eléctricos.",
  },
  {
    id: 3,
    nombre: "Sakura Haruno",
    tipo: "Ninja médico - Konoha",
    rareza: "Épica",
    chakraInicial: 100,
    descripcion:
      "Experta en ninjutsu médico, posee una fuerza impresionante y un excelente control del chakra.",
  },
  {
    id: 4,
    nombre: "Kakashi Hatake",
    tipo: "Jōnin - Equipo 7",
    rareza: "Legendaria",
    chakraInicial: 130,
    descripcion:
      "Conocido como el Ninja Copia. Es un maestro experimentado y utiliza técnicas como el Chidori.",
  },
  {
    id: 5,
    nombre: "Hinata Hyuga",
    tipo: "Clan Hyuga - Byakugan",
    rareza: "Rara",
    chakraInicial: 90,
    descripcion:
      "Ninja del clan Hyuga que utiliza el Byakugan y el estilo de combate Puño Suave.",
  },
  {
    id: 6,
    nombre: "Gaara",
    tipo: "Kazekage - Aldea de la Arena",
    rareza: "Épica",
    chakraInicial: 120,
    descripcion:
      "Ninja capaz de controlar la arena para defenderse y atacar. Se convierte en el líder de su aldea.",
  },
  {
    id: 7,
    nombre: "Itachi Uchiha",
    tipo: "Clan Uchiha - Akatsuki",
    rareza: "Legendaria",
    chakraInicial: 145,
    descripcion:
      "Poderoso ninja del clan Uchiha, especialista en genjutsu y portador del Mangekyo Sharingan.",
  },
  {
    id: 8,
    nombre: "Rock Lee",
    tipo: "Especialista en Taijutsu",
    rareza: "Rara",
    chakraInicial: 80,
    descripcion:
      "Ninja que destaca por su entrenamiento, velocidad y dominio del combate cuerpo a cuerpo.",
  },
];

function App() {
  // Guarda el personaje seleccionado.
  const [personajeSeleccionado, setPersonajeSeleccionado] =
    useState(personajes[0]);

  // Guarda la cantidad de chakra actual.
  const [chakraActual, setChakraActual] = useState(
    personajes[0].chakraInicial
  );

  // Controla si se muestra la descripción.
  const [mostrarDescripcion, setMostrarDescripcion] =
    useState(true);

  function seleccionarPersonaje(personaje) {
    setPersonajeSeleccionado(personaje);
    setChakraActual(personaje.chakraInicial);
    setMostrarDescripcion(true);
  }

  function subirChakra() {
    setChakraActual((valorAnterior) => valorAnterior + 10);
  }

  function bajarChakra() {
    setChakraActual((valorAnterior) =>
      Math.max(0, valorAnterior - 10)
    );
  }

  function reiniciarChakra() {
    setChakraActual(personajeSeleccionado.chakraInicial);
  }

  function alternarDescripcion() {
    setMostrarDescripcion((valorAnterior) => !valorAnterior);
  }

  return (
    <>
      <Header />

      <PanelDestino
        carta={personajeSeleccionado}
        poderActual={chakraActual}
        subirPoder={subirChakra}
        bajarPoder={bajarChakra}
        reiniciarPoder={reiniciarChakra}
        mostrarDescripcion={mostrarDescripcion}
        alternarDescripcion={alternarDescripcion}
      />

      <main className="contenedor-cartas-destino">
        <h2 className="titulo-seccion-destino">
          Selecciona a tu ninja
        </h2>

        <section className="lista-cartas-destino">
          {personajes.map((personaje) => (
            <Carta
              key={personaje.id}
              nombre={personaje.nombre}
              tipo={personaje.tipo}
              rareza={personaje.rareza}
              poder={personaje.chakraInicial}
              descripcion={personaje.descripcion}
              onSeleccionar={() => seleccionarPersonaje(personaje)}
            />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
