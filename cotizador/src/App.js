import React, { useState } from 'react';
import Header from './components/Header';
import styled from '@emotion/styled'
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
max-width: 600px;
margin: 0 auto;
`
const ContenedorFormulario = styled.div`
background-color: #FFF;
padding: 3rem;
`

function App() {

  //Este resumen lo voy a pasar al formulario, tomo los datos que hay en el formulario y los guardo, asi puedo pasar esa informacion a otros componentes 
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  })

  //Esto es para mostrar el Spinning cuando cargue los datos:
  const [cargando, guardarCargando] = useState(false)

  //Extraigo los datos:
  const { datos, cotizacion } = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />
      <ContenedorFormulario>
        <Formulario guardarResumen={guardarResumen} guardarCargando={guardarCargando} />
        {cargando ? <Spinner /> : null}
        <Resumen datos={datos} />
        {!cargando ? <Resultado cotizacion={cotizacion} /> : null}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
