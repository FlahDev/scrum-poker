// libs
import { useCallback } from 'react'

// server
import { SocketKeys } from 'server'

import { useSocket } from './useSocket'

export const useDispatch = () => {
  const { socket } = useSocket()

  const dispatchSocket = useCallback(
    (key: keyof SocketKeys, value: any) => {
      if (socket) {
        socket.emit(String(key), value)
      }
    },
    [socket]
  )

  return {
    dispatchSocket
  }
}
