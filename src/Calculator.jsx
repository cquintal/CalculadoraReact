import React, { useState } from 'react';
import  Button  from './Button' ;
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (even) => {
    setInput(input + even.target.innerText);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        <Button numero = {1} handleClick = {handleClick}         
        />
        <Button numero = {2}  handleClick = {handleClick}       
        />
        <Button numero = {3}  handleClick = {handleClick}         
        />
        <Button numero = {4}  handleClick = {handleClick}        
        />
        <Button numero = {5}   handleClick = {handleClick}       
        />
        <Button numero = {6}  handleClick = {handleClick}        
        />
        <Button numero = {7}  handleClick = {handleClick}         
        />
        <Button numero = {8}   handleClick = {handleClick}       
        />
        <Button numero = {9}  handleClick = {handleClick}   
        />
        <Button numero = {'*'} handleClick = {handleClick}       
        />
         <Button numero = {'C'} handleClear = {handleClear}       
        />
         <Button numero = {'0'} handleClick = {handleClick}       
        />
         <Button numero = {'='} handleCalculate = {handleCalculate}       
        />
        <Button numero = {'/'} handleClick = {handleClick}       
        />
      
               
        {/* <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleClick('/')}>/</button> */}
      </div>
    </div>
  );
};

export default Calculator;