// para requisitar modulos presentes no proprio Node, já que o node comporta diversos modulos internos, além disso podemos importar modulos externos, para ajudar no desenvolvimento backend
// no caso do http, dentro desses modulos tem diversas coisas que ajudam a desenvolver um projeto usando o modulo http
// const http = require('http')    ele vem por padrão na forma default do JS, que para importar nós usamos o const e o require, mas nas versões atuais, alterando no package.json, mudamos o type do nosso arquivo para module, assim importando dessa forma, até para exportar  A declaração estática import é usada para importar vínculos que são exportados por um outro módulo.
import http from 'node:http'
import { json } from './middlewares/json.js';
// para diferenciar modulos do proprio node de modulos de terceiros, utilizamos 'node:'.
//isso é para criar o servidor
//stateful, vamos armazenar no proprio arquivo, ao invés de armazenamento externo
//JSON - JavaScript Object Notation: ele é muito utilizado na transição de dados entre back end e front end ; até back end com back end
//Para comunicar pro frontend sobre as alterações, é utilizado cabeçalhos tanto para requisição, quanto para response, eles são METADADOS 
//requisição http
const users = [];

const server =  http.createServer (async(req, res) => {
    const {method , url} = req

    await json(req, res)

    if(method === 'GET' && url === '/users') {
        //early return
        return res
        .setHeader('Content-Type', 'aplication/json')
        .end(JSON.stringify(users))
    }

    if(method === 'POST' && url === '/users') {
        const { name, email } = req.body
        
        users.push({
            id: 1,
            email,
            name,
        })
        return res.writeHead(201).end('Criação de usuário')
    } 

    return res.writeHead(404).end('Method Not Found')

})
//para o servidor ser criado na port 4444
server.listen(4444)
// o servidor não se atualiza sozinho, nós temos que atualizar manualmente, mas podemos usar --watch node .\src\server.js , mas para automatizar, basta colocar na parte de script das config