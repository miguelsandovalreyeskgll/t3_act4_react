# Act4. Introducción a React - Fundamentos y Primer Componente

## Tecnológico Nacional de México
### Instituto Tecnológico de Oaxaca

**Carrera:** Ingeniería en Sistemas Computacionales  
**Materia:** Programación Web  
**Actividad:** Act4. Introducción a React - Fundamentos y Primer Componente  
**Docente:** Adelina Martínez Nieto  
**Alumno:** Sandoval Reyes Miguel  
**Fecha de entrega:** 14 de octubre de 2026 


---

# Naruto: Baraja Ninja

## 1. Descripción general

Naruto: Baraja Ninja es una mini aplicación web desarrollada con **React y Vite**. Muestra ocho cartas de personajes de Naruto. Al elegir una carta, aparece la información del ninja en un panel donde se puede aumentar, disminuir o reiniciar su chakra.

La aplicación se creó para practicar los fundamentos de React: componentes funcionales, props, estado con `useState`, eventos con `onClick`, renderizado de listas usando `.map()`, claves (`key`) y renderizado condicional. **No utiliza bases de datos, API ni backend**: todos los datos están guardados localmente en un arreglo de JavaScript.

## 2. Objetivo del proyecto

Crear una aplicación sencilla con Vite + React que permita comprender cómo se comunican los componentes y cómo se actualiza la interfaz cuando el usuario interactúa con ella. También se busca aprender a preparar el proyecto para publicarlo en GitHub Pages.

Para cumplir ese objetivo se utilizan:

- Componentes funcionales como `Header`, `Carta`, `PanelDestino` y `Footer`.
- Props para enviar datos del personaje a otros componentes.
- `useState` para manejar el personaje seleccionado, el chakra y la descripción.
- Eventos `onClick` para seleccionar ninjas y usar los botones.
- `.map()` y `key` para generar las cartas desde un arreglo.
- Renderizado condicional para mostrar u ocultar información.

## 3. Descripción de la mini aplicación

La baraja contiene estos ocho personajes:

| Personaje | Tipo o clan | Rareza | Chakra inicial |
|---|---|---|---:|
| Naruto Uzumaki | Clan Uzumaki - Konoha | Legendaria | 150 |
| Sasuke Uchiha | Clan Uchiha - Sharingan | Legendaria | 140 |
| Sakura Haruno | Ninja médico - Konoha | Épica | 100 |
| Kakashi Hatake | Jōnin - Equipo 7 | Legendaria | 130 |
| Hinata Hyuga | Clan Hyuga - Byakugan | Rara | 90 |
| Gaara | Kazekage - Aldea de la Arena | Épica | 120 |
| Itachi Uchiha | Clan Uchiha - Akatsuki | Legendaria | 145 |
| Rock Lee | Especialista en Taijutsu | Rara | 80 |

Cada carta muestra el nombre, tipo o clan, rareza, chakra inicial y una descripción breve. **Los valores de chakra y las rarezas se asignaron solo como datos de práctica**; no representan estadísticas oficiales del anime.

Cuando el usuario selecciona otro personaje, el panel cambia para mostrar sus datos y se restablece su chakra inicial. Desde el panel se puede:

1. **Aumentar chakra:** sumar 10 puntos al valor actual.
2. **Disminuir chakra:** restar 10 puntos, sin permitir resultados menores que cero.
3. **Reiniciar chakra:** regresar al valor inicial del ninja seleccionado.
4. **Mostrar u ocultar descripción:** cambiar la visibilidad del texto mediante un botón.

El diseño usa fondos claros y tonos suaves inspirados en Naruto; se adapta a pantallas de computadora y celular.

## 4. Tecnologías utilizadas

- **React:** construcción de componentes e interfaz interactiva.
- **Vite:** servidor de desarrollo y compilación para producción.
- **JavaScript y JSX:** datos, lógica y estructura de los componentes.
- **CSS:** apariencia, distribución y diseño adaptable.
- **React Icons:** iconos utilizados en las cartas.
- **Node.js y npm:** ejecución de herramientas e instalación de dependencias.
- **Git y GitHub:** control de versiones y alojamiento del repositorio.
- **GitHub Pages y gh-pages:** publicación de la aplicación en Internet.

## 5. Estructura del proyecto

```text
t3_act4_react/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Carta.jsx
│   │   ├── Carta.css
│   │   ├── PanelDestino.jsx
│   │   ├── PanelDestino.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── .gitignore
└── README.md
```

La carpeta `node_modules/` se genera con `npm install` y `dist/` se genera con `npm run build`. Ninguna de ellas necesita editarse manualmente.

## 6. Componentes principales

### `Header.jsx`

Es un componente funcional que muestra el título **Naruto: Baraja Ninja** y una explicación breve de la aplicación.

### `Carta.jsx`

Recibe mediante **props** el nombre, tipo, rareza, chakra inicial, descripción y la función para seleccionar un personaje. Se reutiliza para mostrar las ocho cartas.

### `PanelDestino.jsx`

Muestra la información del ninja seleccionado y su chakra actual. Contiene los botones de aumento, disminución y reinicio, además del botón para mostrar u ocultar la descripción.

### `Footer.jsx`

Muestra el nombre del alumno, la docente y la materia.

### `App.jsx`

Es el componente principal. Contiene el arreglo `personajes`, administra el estado mediante `useState`, define las funciones de los botones y renderiza las cartas mediante `.map()`.

### Archivos CSS

`App.css` contiene el diseño general con colores suaves y estilos adaptables. Los componentes conservan sus archivos CSS individuales para organizar los estilos del proyecto.

## 7. Cómo funciona React en esta aplicación

**Props:** `App.jsx` envía a `Carta.jsx` datos como `nombre`, `tipo`, `rareza`, `poder` y `descripcion`. Aunque la prop se llama `poder`, en pantalla representa el chakra inicial.

**Estado (`useState`):** `App.jsx` guarda el ninja seleccionado, el chakra actual y si se debe mostrar la descripción.

```jsx
const [personajeSeleccionado, setPersonajeSeleccionado] = useState(personajes[0]);
const [chakraActual, setChakraActual] = useState(personajes[0].chakraInicial);
const [mostrarDescripcion, setMostrarDescripcion] = useState(true);
```

**Eventos:** los botones ejecutan funciones cuando se hace clic sobre ellos.

```jsx
function subirChakra() {
  setChakraActual((valorAnterior) => valorAnterior + 10);
}

function bajarChakra() {
  setChakraActual((valorAnterior) => Math.max(0, valorAnterior - 10));
}

function reiniciarChakra() {
  setChakraActual(personajeSeleccionado.chakraInicial);
}
```

**Listas dinámicas:** las cartas se generan recorriendo el arreglo `personajes` con `.map()`.

```jsx
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
```

**Renderizado condicional:** en `PanelDestino.jsx` la descripción aparece solamente cuando `mostrarDescripcion` es verdadero.

```jsx
{mostrarDescripcion && (
  <p className="panel-descripcion">{carta.descripcion}</p>
)}
```

## 8. Instalación y ejecución

**Requisito:** tener instalados Node.js y npm.

1. Descargar o clonar el repositorio y abrir la carpeta `t3_act4_react` en Visual Studio Code.
2. Abrir una terminal en esa carpeta (donde está `package.json`).
3. Instalar las dependencias:

```bash
npm install
```

4. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

5. Abrir en el navegador la dirección que muestre Vite. Con la configuración actual, normalmente será `http://localhost:5173/t3_act4_react/`.

Para generar la versión de producción:

```bash
npm run build
```

Para revisar localmente la compilación:

```bash
npm run preview
```

## 9. Publicación en GitHub Pages

El repositorio de GitHub debe llamarse exactamente **`t3_act4_react`**.

En `vite.config.js` se configuró la ruta base para ese repositorio:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/t3_act4_react/',
});
```

El proyecto utiliza `gh-pages` como dependencia de desarrollo. En `package.json` se conservan los scripts `dev`, `build` y `preview`, y se incluyen:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Después de subir el proyecto al repositorio, se ejecuta:

```bash
npm run deploy
```

Este comando genera la versión de producción y publica el contenido de `dist` en la rama `gh-pages`. En **GitHub → Settings → Pages**, se selecciona **Deploy from a branch**, la rama **`gh-pages`** y la carpeta **`/(root)`**. Después se espera a que GitHub Pages habilite el enlace y se comprueba que la aplicación funcione.

## 10. Cuestionario de Classroom

### a) ¿Qué diferencia hay entre props y state en React?

Las **props** son datos que un componente recibe de otro. Por ejemplo, en mi aplicación `App.jsx` le manda a `Carta.jsx` el nombre, clan, rareza, chakra y descripción de cada ninja. `Carta` solo recibe esos datos para mostrarlos.

El **state** es información que puede cambiar mientras usamos la aplicación. Yo lo utilicé para guardar qué personaje está seleccionado, cuánto chakra tiene en ese momento y si su descripción está visible. Cuando cambia el state, React actualiza lo que aparece en pantalla.

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?

La `key` ayuda a React a identificar cada elemento de una lista. Así puede reconocer qué carta corresponde a cada personaje cuando necesita actualizar la interfaz.

En mi proyecto, cada ninja tiene un `id` diferente. Por eso utilicé `key={personaje.id}` al crear las cartas con `.map()`. De esta forma React puede distinguirlas sin depender de su posición en la lista.

### c) Explica con tus propias palabras qué hace useState y da un ejemplo de dónde lo usaste en tu mini aplicación.

`useState` sirve para guardar un dato que puede cambiar y actualizar la pantalla cuando ese dato cambia. En mi aplicación lo usé para controlar el chakra del personaje seleccionado.

Por ejemplo:

```jsx
const [chakraActual, setChakraActual] = useState(personajes[0].chakraInicial);
```

Cuando presiono el botón **+10 Chakra**, se ejecuta esta función:

```jsx
function subirChakra() {
  setChakraActual((valorAnterior) => valorAnterior + 10);
}
```

Si el ninja tiene 80 de chakra, el número cambia a 90 sin recargar la página. También usé `useState` para seleccionar personajes y mostrar u ocultar sus descripciones.


## d) Enlace de mi repositorio de GitHub

El código fuente de mi proyecto está disponible en:

https://github.com/miguelsandovalreyeskgll/t3_act4_react

## e) Enlace de mi proyecto desplegado en GitHub Pages

La aplicación Naruto: Baraja Ninja se encuentra publicada en:

https://miguelsandovalreyeskgll.github.io/t3_act4_react/


