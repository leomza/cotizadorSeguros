import React from 'react'
import styled from '@emotion/styled'
import { primerMayuscula } from '../helper'
import PropTypes from 'prop-types'

const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`

const Resumen = ({ datos }) => {
  //Extraer de datos la informacion:
  const { marca, year, plan } = datos

  //De esta forma no llegara a mostrar la parte de "Resumen de cotizacion" en caso de que no haya informacion que mostrar (evito usar el operador ternario con esto)
  if (marca === '' || year === '' || plan === '') {
    return null
  }

  return (
    <ContenedorResumen>
      <h2>Resumen de cotizacion</h2>
      <ul>
        <li>Marca: {primerMayuscula(marca)} </li>
        <li>Plan: {primerMayuscula(plan)}</li>
        <li>Año del auto: {year} </li>
      </ul>
    </ContenedorResumen>
  )
}

Resumen.propTypes = {
  datos: PropTypes.object.isRequired
}

export default Resumen
