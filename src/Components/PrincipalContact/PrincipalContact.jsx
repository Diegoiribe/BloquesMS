import React from 'react'
import styled from 'styled-components'
import ContactForm from './ContactForm/ContactForm'

const Div = styled.div`
  width: 74%;
  height: 90vh;
  margin: 7.5% 13% 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`

const DivContact = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  gap: 5rem;
`

const DivCard = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  gap: 1.5rem;

  iframe {
    border: none; /* Ejemplo de cómo aplicar estilos directamente al iframe */
    width: 100%; /* Ajusta el ancho al 100% del contenedor */
    height: 100%; /* Ajusta la altura al 100% del contenedor */
  }
`

const H1 = styled.h1`
  font-size: 48px;
`

const PrincipalContact = () => {
  return (
    <Div>
      <DivContact>
        <H1>Contacto</H1>
        <ContactForm />
      </DivContact>
      <DivCard>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57958.07994779892!2d-107.4102272!3d24.7824384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1703828928164!5m2!1ses!2smx"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </DivCard>
    </Div>
  )
}

export default PrincipalContact
