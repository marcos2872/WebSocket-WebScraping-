import { useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:3333/', { transports: ['websocket'] })

socket.on('connect', () => {
console.log('sucesso');

})

function App() {
  const [data, setData] = useState([])

  const toExactMinute = 60000 - (new Date().getTime() % 60000);

  const socketUpdateData = () => {
    console.log(new Date());      
    socket.emit('update-data');
    socket.on('update-data', async (dataReq) => {
      const newData = await dataReq;
      if(JSON.stringify(data) === JSON.stringify(newData)) return null;
      setData(newData);
    })
  }
  
  useEffect(() => {
    socketUpdateData();

    setTimeout(function() {
      setInterval(socketUpdateData, 60000);
      // socket.off('update-data');
  }, toExactMinute);
  }, [])

  return (
    <div>
      {data.map((t: any) => {
        return (
          <>
          <p>{t.date}</p>
          <p>{t.time}</p>
          <p>{t.teamA}</p>
          <p>{t.teamB}</p>
          <br />

          </>
        )
      })}
    </div>
  )
}

export default App
