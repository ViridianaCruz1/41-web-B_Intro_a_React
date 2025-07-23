import React from "react";

const InputNumber = ({ userNumber, setUserNumber }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    // Si el input está vacío, guardamos una cadena vacía, no un número
    setUserNumber(value === "" ? "" : Number(value));
  };
  return (
    <div>
      <input
        type="number"
        placeholder="Escribe un número entre 1 y 100"
        value={userNumber}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default InputNumber;
