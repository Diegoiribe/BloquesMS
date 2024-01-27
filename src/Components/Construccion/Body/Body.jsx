import React from 'react'
import styled from 'styled-components'
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined'
import './Body.css'

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  @media (max-width: 980px) {
    flex-direction: column;
    justify-content: start;
    gap: 6rem;
  }
`

const DivInformacion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 50%;
  @media (max-width: 980px) {
    width: 100%;
  }
`

const Btn = styled.div`
  border: 2px solid #000;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 980px) {
    width: 100%;
  }
`

const DivImg = styled.div`
  width: 40%;
  height: 50%;
  padding: 1rem;
  @media (max-width: 980px) {
    width: 100%;
    padding: 0rem;
    margin-top: -5rem;
  }
`

const Titulo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: start;
  flex-direction: column;
  @media (max-width: 980px) {
    flex-direction: row;
    align-items: center;
    h1 {
      font-size: 1.5rem;
    }
  }
`

const Body = () => {
  return (
    <Div>
      <DivInformacion>
        <Titulo>
          <span>
            <WarningAmberOutlinedIcon />
          </span>
          <h1>Bajo construcción</h1>
        </Titulo>
        <p>
          Nuestro sitio web está en construcción, ¡pero estamos listos para
          comenzar! tenemos preparado algo asombroso y emocionante para ti.
        </p>
        <Btn>
          <p>Próximamente</p>
        </Btn>
      </DivInformacion>
      <DivImg>
        <section class="page_404" style={{ width: '100%', height: '100%' }}>
          <div class="container" style={{ width: '100%', height: '100%' }}>
            <div class="row" style={{ width: '100%', height: '100%' }}>
              <div class="col-sm-12 " style={{ width: '100%', height: '100%' }}>
                <div
                  class="col-sm-10 col-sm-offset-1  text-center"
                  style={{ width: '100%', height: '100%' }}
                >
                  <div class="four_zero_four_bg"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DivImg>
    </Div>
  )
}

export default Body
