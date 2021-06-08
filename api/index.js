const { ApolloServer, gql } = require('apollo-server')
const userSchema = require('./user/schema/user.graphql')

const users = [
    {
        nome: "Ana",
        ativo: true
    },
    {
        nome: "marcia",
        ativo: false
    }
]

const typeDefs = [userSchema]

const resolvers = {}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({url}) => { // call
     console.log('servidor rodando') // server msg
}) 