import { useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:3333/', { transports: ['websocket'] })

socket.on('connect', () => {
console.log('sucesso');

})

function App() {
  const [data, setData] = useState([])

  const handleClick = () => {
    socket.emit('update-data');
    socket.on('update-data', async (data) => {
      console.log(await data);
      
    })
  }
  // setInterval(handleClick, 60000)

  // useEffect(() => {
  //   socket.emit('update-data');
  //   socket.on('update-data', async (data) => {
  //     setData(await data);
  //   })
  // }, [])
  console.log(data);
  return (
    <div>
      <button onClick={handleClick} >teste</button>
    </div>
  )
}

export default App
