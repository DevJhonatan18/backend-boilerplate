import restify from 'restify'
// import { Router } from 'restify-router'

const server = restify.createServer({
    name: 'firstServer'
})

// const Routing = new Router()

server.use(restify.plugins.acceptParser(server.acceptable))
// server.use(restify.plugins.bodyParser({mapParams: false}))
server.use(restify.plugins.queryParser())

// Routing.applyRoutes(server)

server.get('/', (req, res)=>{
    try {
        // console.log(a)
        res.json({message: 'success', error: false})
    } catch (error) {
        console.log(error)
        return res.json({error: true, message: error.message})
    }
})

server.listen(3000, ()=>{
    console.log('corriendo ?')
})