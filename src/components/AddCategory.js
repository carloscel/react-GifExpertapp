//rafc(tap)
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        
        setInputValue(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 1){

            setCategories( categ => [inputValue, ...categ]); //el ...categ tiene el estado anterior del "setCategory y solo le voy agregar el inputValue"

            setInputValue("") //para que despues de enviar quede en blanco.
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            
            <input 
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired 
    //setCategories es una funcion y usamos "func", con esto obligamos a poner el valor de setCategories.
}
