import * as http from 'http';

type Host = {
  port: number,
  hostname: string
}

const HOST: Host = {
  port: 8080,
  hostname: 'localhost'
}

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse & { req: http.IncomingMessage }) => {
  console.log("Connecton made.\n");
  console.log(req.method, '\n', req.headers, '\n', req.url)
  if (req.method === 'POST') {
    console.log("Calculation request made.\n");
    res.writeHead(202, "Accepted. Await data.")
  } else {
    console.log("Forbidden method.\n")
    res.writeHead(406, 'Not acceptable.');
    const msg = "This is a single POST server.\nOther methods forbidden."
    res.write(msg)
  }

  res.end()

})

server.listen(HOST.port, HOST.hostname, () => {
  console.log(`\nServer listening on http:${HOST.hostname}:${HOST.port}\n`)
})