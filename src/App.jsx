import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

function Tarjeta({ titulo, descripcion, image }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="160"
        image={image}
        alt={titulo}
      />
      <CardContent>
        <Typography variant="h6">
          {titulo}
        </Typography>
        <Typography variant="body2">
          {descripcion}
        </Typography>
      </CardContent>
    </Card>
  );
}

function App() {
  const tarjeta = [
    {
      id: 1,
      title: "Base de datos",
      descripcion: "Base de datos bien hecha",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600",
    },
    {
      id: 2,
      title: "Programación Web",
      descripcion: "Descripción de programación web",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
    },
    {
      id: 3,
      title: "Robótica",
      descripcion: "Descripción de robótica",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600",
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
      <Grid container spacing={3}>
        {tarjeta.map((clase) => (
          <Grid key={clase.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Tarjeta
              titulo={clase.title}
              descripcion={clase.descripcion}
              image={clase.image}
            />
          </Grid>
        ))}
      </Grid>
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
        <div className="usuario">
          Usuario: Juan
        </div>

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