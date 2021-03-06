import express from 'express'
import resolvers from './resolvers'
import schema from './schema'

import { graphqlHTTP } from 'express-graphql'

const app = express()

app.get("/", (req, res) => {
    res.send("Up and running")
})

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true //UI flag inteface on web

}))

app.listen(8082, () => console.log("in 8082 port"))