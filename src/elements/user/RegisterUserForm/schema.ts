// lib
import { MV } from 'lib/hooks'

import { RegisterUserFormEvent } from './types'

export const schema = MV.create<RegisterUserFormEvent>({
  userName: MV.text().required('Insira seu nome de usuário'),
  userEmail: MV.text()
    .email('Insira um e-mail válido')
    .required('Insira seu e-mail')
})
