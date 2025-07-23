import React from "react";

const Message = ({ randomNumber, userNumber }) => {
  return (
    <div>
      {randomNumber === userNumber
        ? "¡Correcto!"
        : userNumber < randomNumber
        ? "El número es mayor"
        : "El número es menor"}
    </div>
  );
};

export default Message;
