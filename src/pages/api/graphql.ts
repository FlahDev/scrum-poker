// type-graphql config
import 'reflect-metadata'

// libs
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import type { NextApiRequest, NextApiResponse } from 'next'

// graphql
import { generateSchema } from '@/graphql'
import depthLimit from 'graphql-depth-limit'

import { ContextType } from '@/auth/types'
import { AuthSign } from '@/auth/sign'

export default async function StartServer(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const schema = await generateSchema()

  const server = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)]
  })

  const serverHandler = startServerAndCreateNextHandler(server, {
    context: async (ctx) => {
      const authHeader = ctx?.headers?.authorization

      let payload: ContextType['payload'] | null

      if (authHeader) {
        try {
          const [, token] = authHeader.split(' ')

          const decoded = AuthSign.getInstance().decode(token)

          payload = decoded || null
        } catch {
          payload = null
        }
      } else {
        payload = null
      }

      return Object.assign(ctx, { payload })
    }
  })

  return serverHandler(req, res)
}
