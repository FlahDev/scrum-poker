// lib
import { MV } from 'lib/hooks'

import { LoginFormEvent } from './types'

export const schema = MV.create<LoginFormEvent>({
  userEmail: MV.text()
    .email('Insira um e-mail válido')
    .required('Insira seu e-mail')
})
