import React, { useState } from 'react';
import './contador.css';
import { Button } from 'antd';

const Contador = () => {
  const [cont, setCont] = useState(1);

  const increment = () => {
    setCont(cont + 1);
  };

  const decrement = () => {
    if (cont > 1)
    setCont(cont - 1);
  };

  return (
    <div className="container">
      <h1>Contador: {cont}</h1>
      <Button onClick={increment} type="primary">Incrementar</Button>
      <Button onClick={decrement} type="danger">Decrementar</Button>
    </div>
  );
};

export default Contador;
