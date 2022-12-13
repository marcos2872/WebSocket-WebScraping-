import { useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:3333/', { transports: ['websocket'] })

socket.on('connect', () => console.log('conected'))

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
  socket.on('', async (dataReq) => {
    console.log(new Date());      
    const newData = await dataReq;
    setData(newData);
    setLoading(false)
  })
  }, [])
  
  return (
    <div>
      {loading ? <h1>Buscado Dados...</h1> : data.map((t: any) => {
        return (
          <div key={t.event}>
          <p>{JSON.stringify(t)}</p>
          <br />

          </div>
        )
      })}
    </div>
  )
}

export default App
