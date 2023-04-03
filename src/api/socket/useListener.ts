// libs
import { useCallback } from 'react'

// server
import { SocketKeys } from 'server'

import { useSocket } from './useSocket'

export const useListener = () => {
  const { socket } = useSocket()

  const addSocketListener = useCallback(
    (key: keyof SocketKeys, callback: () => void) => {
      if (socket) {
        socket.on(String(key), callback)
      }
    },
    [socket]
  )

  return {
    addSocketListener
  }
}
