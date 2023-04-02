import { Server } from 'socket.io'

let amount = 0

const SocketHandler = (req: any, res: any) => {
  if (res.socket.server.io) {
    // eslint-disable-next-line no-console
    console.log('Socket is already running')
  } else {
    // eslint-disable-next-line no-console
    console.log('Socket is initializing')
    const io = new Server(res.socket.server)
    res.socket.server.io = io

    io.on('connection', (socket) => {
      ++amount
      // eslint-disable-next-line no-console
      console.log(`a new user has connected, current amount: ${amount}`)

      socket.on('input-change', (msg) => {
        socket.broadcast.emit('update-input', msg)
      })
    })
  }

  res.end()
}

export default SocketHandler
