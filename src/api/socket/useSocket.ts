// libs
import { useEffect, useState, useCallback } from 'react'
import { io, Socket } from 'socket.io-client'

export const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null)

  const handleInitialize = useCallback(async () => {
    await fetch('/api/socket')

    const sc = io()

    setSocket(sc)
  }, [])

  useEffect(() => {
    handleInitialize()
  }, [])

  return { socket }
}
