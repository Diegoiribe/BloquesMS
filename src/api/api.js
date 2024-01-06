import axios from 'axios'

export const api = axios.create({ baseURL: 'http://localhost:3003' })

// Metodo Get para buscar datos en la API
export const buscar = async (url, setData) => {
  const respuesta = await api.get(url)
  setData(respuesta.data)
}

export const enviar = async (url, dataToSend, setData) => {
  const respuesta = await api.post(url, dataToSend)
  setData(respuesta.data)
}

export const eliminar = async (url) => {
  await api.delete(url)
}
