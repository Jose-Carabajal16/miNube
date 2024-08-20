import React, { useState } from 'react';


const Contador = () => {
  const [cont, setCont] = useState(1);

  const sumar = () => {
    setCont(cont + 1);
    console.log('Sumar');
  };

  const restar = () => {
    if (cont > 1) {
      setCont(cont - 1);
      console.log('Restar');
    }
  };

  return (
    <div className="container">
      <h1>Contador: {cont}</h1>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <hr />
    </div>
  );
};

export default Contador;
