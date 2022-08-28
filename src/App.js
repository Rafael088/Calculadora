
import './App.css';
import BotonClear from './componentes/BotonClear';
import Boton from './componentes/bottom';
import Input from './componentes/Input';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input));
    } else {
      alert("Ingresa un valor valido");
    }
    
  };

  return (
    <div className="App">
      <div className='contFigures'>
          <div className='figure1'>
            
          </div>
          <div className='figure2'>
            
          </div>
          <div className='figure3'>
            
          </div>
          <div className='figure4'>
            
          </div>
      </div>
     <div className='Titulo'>
      <h2>$-------Calculadora---------$</h2>
     </div>
     <div className='Contenedor_Calculadora'>
       <Input input={input}></Input>
      <div className='fila'>
        <Boton manejarClic={agregarInput}>1</Boton>
        <Boton manejarClic={agregarInput}>2</Boton>
        <Boton manejarClic={agregarInput}>3</Boton>
        <Boton manejarClic={agregarInput}>+</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={agregarInput}>4</Boton>
        <Boton manejarClic={agregarInput}>5</Boton>
        <Boton manejarClic={agregarInput}>6</Boton>
        <Boton manejarClic={agregarInput}>-</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={agregarInput}>7</Boton>
        <Boton manejarClic={agregarInput}>8</Boton>
        <Boton manejarClic={agregarInput}>9</Boton>
        <Boton manejarClic={agregarInput}>*</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={calcularResultado}>=</Boton>
        <Boton manejarClic={agregarInput}>0</Boton>
        <Boton manejarClic={agregarInput}>.</Boton>
        <Boton manejarClic={agregarInput}>/</Boton>
      </div>
      <div className='fila'>
        <BotonClear manejarClear={() => setInput ('')} >Clear</BotonClear>
      </div>
     </div>
    </div>
  );
}

export default App;
