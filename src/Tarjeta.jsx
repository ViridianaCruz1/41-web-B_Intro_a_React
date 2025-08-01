function Tarjeta(props) {
  // Definimos la información estática de la tarjeta
  //   const nombre = "Ana Pérez";
  //   const profesion = "Desarrolladora Web";
  //   const mensaje = "¡Bienvenido a mi tarjeta de presentación!";

  // Retornamos el JSX que representa la tarjeta
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        width: "300px",
        textAlign: "center",
      }}
    >
      {/* JSX permite incrustar variables en HTML utilizando llaves {} */}
      <h2>{props.nombre}</h2>
      <h4>{props.profesion}</h4>
      <p>{props.mensaje}</p>
    </div>
  );
}

export default Tarjeta;
