
function Button ({ numero, handleClick, handleCalculate, handleClear}){

    return(
        
  

        (numero === '=' ? <button onClick={ handleCalculate} >{numero}</button> :
        (numero === 'C') ? <button onClick={ handleClear} >{numero}</button> :
         <button onClick={ handleClick} >{numero}</button> )

    //    (numero === '=' ?

    //    <button onClick={ handleCalculate} >{numero}</button>
    //    :
    //     <button onClick={ handleClick} >{numero}</button>
    //    )
    
   
          
    )
}

export default Button