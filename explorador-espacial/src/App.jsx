import { useState, useEffect, useRef, useMemo } from "react";
import Planeta from "./Planeta";

function App() {
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("En orbita");
  const [planetasVisitados, setPlanetasVisitados] = useState([]);

  useEffect(() => {
    console.log("¡El panel está listo!"); // Montaje

    const intervalo = setInterval(() => {
      setDistancia((prev) => (combustible > 0 ? prev + 10 : prev));
      setCombustible((prev) => (prev > 0 ? prev - 5 : 0));
    }, 1000);

    return () => {
      clearInterval(intervalo); // Desmontaje
      console.log("El panel se ha apagado."); // Desmontaje
    };
  }, []);

  useEffect(() => {
    console.log("¡Combustible actualizado!"); // Actualización
  }, [combustible]);

  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]);

  const aterrizar = () => {
    setEstadoNave("Aterrizando");
    const nuevoPlaneta = `Planeta-${planetasVisitados.length + 1}`;
    setPlanetasVisitados([...planetasVisitados, nuevoPlaneta]);
  };

  useEffect(() => {
    console.log("¡El panel está listo!");
    const intervalo = setInterval(() => {
      setCombustible((prevCombustible) => {
        if (prevCombustible > 0) {
          setDistancia((prevDistancia) => prevDistancia + 10);
          return prevCombustible - 5;
        }
        return prevCombustible;
      });
    }, 1000);

    return () => {
      clearInterval(intervalo);
      console.log("El panel se ha apagado.");
    };
  }, []);

  /////////////////////////////

  const [planetas, setPlanetas] = useState(
    JSON.parse(localStorage.getItem("planetas")) || []
  );
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState(null);
  const inputImagenRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("planetas", JSON.stringify(planetas));
  }, [planetas]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoPlaneta = {
      nombre,
      descripcion,
      imagen: imagen ? URL.createObjectURL(imagen) : null,
    };

    setPlanetas([...planetas, nuevoPlaneta]);
    setNombre("");
    setDescripcion("");
    setImagen(null);

    if (inputImagenRef.current) {
      inputImagenRef.current.value = ""; // Limpiar el input de imagen
    }
  };

  const handleDelete = (index) => {
    const nuevosPlanetas = [...planetas];
    nuevosPlanetas.splice(index, 1);
    setPlanetas(nuevosPlanetas);
  };

  return (
    <div>
      <div>
        <h1>Panel de Control</h1>
        <p>Distancia: {distancia} km</p>
        <p>Combustible: {combustible}%</p>
        <p>{mensajeEstado}</p>
        <button onClick={aterrizar}>Aterrizar</button>

        <h2>Planetas Visitados:</h2>
        {planetasVisitados.map((planeta, index) => (
          <Planeta key={index} nombre={planeta} />
        ))}
      </div>

      <h1>Bitácora de Exploración</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del planeta"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
        <input
          type="file"
          onChange={(e) => setImagen(e.target.files[0])}
          ref={inputImagenRef}
        />
        <button type="submit">Guardar</button>
      </form>

      <h2>Planetas Registrados</h2>
      <ul>
        {planetas.map((planeta, index) => (
          <li key={index}>
            <h3>{planeta.nombre}</h3>
            <p>{planeta.descripcion}</p>
            {planeta.imagen && (
              <img src={planeta.imagen} alt={planeta.nombre} />
            )}
            <button onClick={() => handleDelete(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
