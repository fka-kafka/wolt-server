import * as http from 'http';

type Host = {
    port: number,
    hostname: string
}

const HOST: Host = {
    port: 3500,
    hostname: 'localhost'
}



const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse & { req: http.IncomingMessage }) => {
    console.dir(req.method)
    console.dir(req.headers)
    
    res.writeHead(200, "Connection successful")

    const data: { response: string } = {
        response: "GO BANG!"
    }

    res.end(JSON.stringify(data))

})

server.listen(HOST.port, HOST.hostname, () => {
    console.log(`Server listening on http://${HOST.hostname}:${HOST.port}/`)
})