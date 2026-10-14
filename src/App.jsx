import "./App.css";
import { Route, Routes, Link } from "react-router";

function Tarjeta({ titulo, descripcion, image }) {
  return (
    <div className="tarjeta">
      <img src={image} alt={titulo} className="tarjeta-imagen" />

      <div className="tarjeta-contenido">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <button>Ver más</button>
      </div>
    </div>
  );
}

function App() {
  const tarjeta = [
    {
      id: 1,
      title: "Base de datos",
      descripcion: "BaFundamentos de modelado y consultas SQL",
      image:
        "https://unsplash.com/es/fotos/persona-con-chaqueta-naranja-con-volantes-xPJL_3JRjKE",
    },
    {
      id: 2,
      title: "Programación Web",
      descripcion: "React en el frontend y Laravel en el backend",
      image:
        "https://unsplash.com/es/fotos/persona-con-chaqueta-naranja-con-volantes-xPJL_3JRjKE",
    },
    {
      id: 3,
      title: "Robótica",
      descripcion: "Arduino y control de circuitos electrónicos",
      image:
        "https://unsplash.com/es/fotos/persona-con-chaqueta-naranja-con-volantes-xPJL_3JRjKE",
    },
  ];

  function Inicio() {
    return (
      <>
        <h2>Bienvenidos</h2>
        <p>Aquí se verán tarjetas estadísticas</p>
      </>
    );
  }

function Clases() {
  return (
    <>
      <h2>Módulos disponibles</h2>

      <div className="tarjetas-container">
        {tarjeta.map((clase) => (
          <div className="tarjeta" key={clase.id}>
            <img
              src={clase.image}
              alt={clase.title}
              className="tarjeta-imagen"
            />

            <div className="tarjeta-contenido">
              <h3>{clase.title === "Base de datos"
                ? "Bases de Datos"
                : clase.title}</h3>

              <p>
                {clase.id === 1
                  ? "Fundamentos de modelado y consultas SQL"
                  : clase.id === 2
                  ? "React en el frontend y Laravel en el backend"
                  : "Arduino y control de circuitos electrónicos"}
              </p>

              <button
                className="btn-suscribir"
                onClick={() =>
                  alert(`Te has suscrito a ${clase.title}`)
                }
              >
                Suscribirse
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

  function Docentes() {
    return (
      <>
        <h2>Docentes</h2>
        <p>Aquí se mostrarán los docentes.</p>
      </>
    );
  }

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="usuario">Usuario: Juan</div>

        <nav className="menu">
          <Link to="/">Inicio</Link>
          <Link to="/clases">Clases</Link>
          <Link to="/docentes">Docentes</Link>
        </nav>
      </aside>

      <main className="contenido">
        <header className="encabezado">
          <h1>Asignación Clases</h1>
        </header>

        <section className="principal">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/clases" element={<Clases />} />
            <Route path="/docentes" element={<Docentes />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;