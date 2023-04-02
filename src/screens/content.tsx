// libs
import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

let socket: ReturnType<typeof io>

export function Content() {
  const [input, setInput] = useState('')

  useEffect(() => {
    socketInitializer()
  }, [])

  const socketInitializer = async () => {
    await fetch('/api/socket')
    socket = io()

    socket.on('connect', () => {
      // eslint-disable-next-line no-console
      console.log('connected')
    })

    socket.on('update-input', (msg) => {
      setInput(msg)
    })
  }

  const onChangeHandler = (e: any) => {
    setInput(e.target.value)
    socket.emit('input-change', e.target.value)
  }

  return (
    <input
      placeholder="Type something"
      value={input}
      onChange={onChangeHandler}
    />
  )
}
