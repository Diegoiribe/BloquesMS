import React from 'react'
import styled from 'styled-components'
import ContactForm from './ContactForm/ContactForm'

const Div = styled.div`
  width: 74%;
  height: 130vh;
  margin: 7.5% 13% 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  @media (max-width: 980px) {
    flex-direction: column-reverse;
    width: 100%;
    margin: 0 0 5rem 0;
    gap: 2rem;
    justify-content: start;
    height: auto;
  }
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
  @media (max-width: 980px) {
    width: 95%;
    height: auto;
    gap: 2rem;
  }
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
  @media (max-width: 1300px) {
    height: 60%;
  }
  @media (max-width: 980px) {
    width: 95%;
    height: 20%;
  }
`

const H1 = styled.h1`
  font-size: 48px;
  @media (max-width: 980px) {
    font-size: 2rem;
    padding: 0 0 0 5vw;
  }
`

const PrincipalContact = () => {
  return (
    <Div id="section5">
      <DivContact>
        <H1>Mas Información / Contacta a un asesor</H1>
        <ContactForm />
      </DivContact>
      <DivCard>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58657.96980181034!2d-106.38040937127332!3d23.23860665366016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869f5341681837c1%3A0x62a4c4aaf13c72b2!2zTWF6YXRsw6FuLCBTaW4u!5e0!3m2!1ses!2smx!4v1707317650358!5m2!1ses!2smx"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </DivCard>
    </Div>
  )
}

export default PrincipalContact
