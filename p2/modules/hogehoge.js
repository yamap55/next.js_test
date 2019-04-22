const gql = require('graphql-tag')
const access_token = 'xxxx'
const {ApolloClient} = require('apollo-client')
const {HttpLink} = require('apollo-link-http')
const {ApolloLink, concat} = require('apollo-link')
const {InMemoryCache} = require('apollo-cache-inmemory')
const fetch = require('node-fetch')

const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({
        headers: {
            Authorization: `bearer ${access_token}`,
            Accept: 'application/vnd.github.v4.idl'
        }
    })
    return forward(operation)
})

const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql', fetch})
const client = new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache()
})

client.query({
    // query: gql`{
    //     repository(owner: "vuejs", name: "vue") {
    //         name,
    //         description
    //     }
    // }`
    query: gql`{
        user(login: "bananaumai") {
            name
        }
    }`
    // curl -H "Authorization: bearer xxxxx"
    //  -X POST -d 
    //  '{"query": "query {user(login: \"bananaumai\"){name}}"}'
    //  https://api.github.com/graphql



}).then(console.log)
.catch((e) => {
    console.log(e)
})
console.log('aaaaaaaaass')
export const value = 'hogehoge_value'
