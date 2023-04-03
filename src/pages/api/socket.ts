// libs
import { Server } from 'socket.io'
import type { Server as HTTPServer } from 'http'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Socket as NetSocket } from 'net'
import type { Server as IOServer } from 'socket.io'

// server
import { UserRepository } from '@/repositories'

interface SocketServer extends HTTPServer {
  io?: IOServer | undefined
}

interface SocketWithIO extends NetSocket {
  server: SocketServer
}

interface SocketApiResponse extends NextApiResponse {
  socket: SocketWithIO
}

let amount = 0
const roomKey = 'ROOM'

const SocketHandler = async (req: NextApiRequest, res: SocketApiResponse) => {
  // if (res.socket.server.io) {
  //   // eslint-disable-next-line no-console
  //   console.log('Socket is already running...')
  // } else {
  //   const io = new Server(res.socket.server)
  //   res.socket.server.io = io

  //   io.on('connection', async (socket) => {
  //     ++amount
  //     // eslint-disable-next-line no-console
  //     console.log(`a new user has connected, current amount: ${amount}`)

  //     await socket.join(roomKey)

  //     io.to(roomKey).emit('update-input', amount)

  //     socket.on('input-change', (msg) => {
  //       socket.broadcast.emit('update-input', msg)
  //     })

  //     socket.on('disconnect', () => {
  //       --amount
  //       // eslint-disable-next-line no-console
  //       console.log(`a user has disconnected, current amount: ${amount}`)
  //       io.to(roomKey).emit('update-input', amount)
  //     })
  //   })
  // }

  const userRepository = new UserRepository()

  const result = await userRepository.listAll()

  console.log(result)

  res.end()
}

export default SocketHandler
