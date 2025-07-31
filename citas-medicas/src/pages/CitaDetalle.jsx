import { useParams } from "react-router-dom";

function CitaDetalle() {
  const { id } = useParams();
  return (
    <div>
      <h2>Detalles de la Cita</h2>
      <p>ID de la cita: {id}</p>
      <p>
        Por favor preséntese a su cita en la fecha acordada, sólo existe una
        tolerancia de 5 minutos
      </p>
      <p>Para cualquier duda, comuníquese al consultorio del Dr. Cruz</p>
    </div>
  );
}

export default CitaDetalle;
