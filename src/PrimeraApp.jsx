import React from 'react'
import PropTypes  from 'prop-types';

const PrimeraApp= ({saludo, subtitulo})=> {




    return (
        <>
        {/* <h1>Hola {JSON.stringify(saludo)}</h1> */}
        {/* <pre>{JSON.stringify(saludo,null,3)}</pre> */}


        <h1>Hola {saludo}</h1>
        <p>Es un {subtitulo}</p>
        </>
    )
}

PrimeraApp.propTypes={
    saludo:PropTypes.string.isRequired
}
PrimeraApp.defaultProps={
    subtitulo:'Soy un Subtitulo'
}

export default PrimeraApp;
