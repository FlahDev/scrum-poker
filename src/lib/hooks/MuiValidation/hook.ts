import { object as initSchema, StringSchema } from 'yup'
import { id, phone, text } from './rules'

const create = <T extends Record<string, any>>(evt: {
  [K in keyof T]: StringSchema
}) => {
  return initSchema<T>().shape(evt)
}

export const MV = {
  id,
  phone,
  text,
  create
}
