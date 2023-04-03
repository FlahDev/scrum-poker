export const SocketMaps = {
  USER_CONNECTED: 'USER_CONNECTED',
  USER_DISCONNECTED: 'USER_DISCONNECTED',
  USER_REGISTERED: 'USER_REGISTERED',
  USER_VOTED: 'USER_VOTED'
}

export type SocketKeys = keyof typeof SocketMaps & string
