// type-graphql config
import 'reflect-metadata'

// libs
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import type { NextApiRequest, NextApiResponse } from 'next'

// graphql
import { generateSchema } from '@/graphql'
import depthLimit from 'graphql-depth-limit'

export default async function StartServer(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const schema = await generateSchema()

  const server = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)]
  })

  const serverHandler = startServerAndCreateNextHandler(server)

  return serverHandler(req, res)
}
