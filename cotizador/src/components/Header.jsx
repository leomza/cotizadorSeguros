import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

//Styled components: Permite mezclar CSS con JAVSCRIPT en el mismo documento. Ademas los componentes se ocultan o se muestran de acuerdo al componente cargado (mejor performance)
//La libreria se instala como: npm i @emotion/styled @emotion/react

//Se pone en mayuscula ya que es como si fuese un componente, y luego de styled. se pone a la etiqueta que le voy a dar estilo y por ultimo agrego las propiedades de CSS como si fuera un `template string`
const ContenedorHeader = styled.header`
  background-color: #26c6da;
  padding: 10px;
  font-weight: bold;
  color: #ffffff;
`

const TextoHeader = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: 'Slabo 27px', serif;
  text-align: center;
`

const Header = ({ titulo }) => {
  return (
    <ContenedorHeader>
      <TextoHeader>{titulo}</TextoHeader>
    </ContenedorHeader>
  )
}

Header.propTypes = {
  titulo: PropTypes.string.isRequired
}

export default Header
