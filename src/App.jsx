import Tarjeta from "./Tarjeta";

function App() {
  return (
    <div>
      <h1>Tarjetas de Presentación</h1>
      {/* Renderizamos el componente Tarjeta */}
      <Tarjeta
        nombre="Viridiana Cruz"
        profesion="Frontend Developer"
        mensaje="Me gusta aprender algo nuevo siempre"
      />
      <h1></h1>
      <Tarjeta
        nombre="Patricio Rocha"
        profesion="Bakcend Developer"
        mensaje="Mi lenguaje de programacion favorito es Phyton"
      />
      <h1></h1>
      <Tarjeta
        nombre="María Tamayo"
        profesion="Software Developer"
        mensaje="Diseñé mi primera página a los 12 años"
      />
    </div>
  );
}

export default App;
