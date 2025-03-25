Anotações presentes no arquivo
// para requisitar modulos presentes no proprio Node, já que o node comporta diversos modulos internos, além disso podemos importar modulos externos, para ajudar no desenvolvimento backend
// no caso do http, dentro desses modulos tem diversas coisas que ajudam a desenvolver um projeto usando o modulo http
// const http = require('http')    ele vem por padrão na forma default do JS, que para importar nós usamos o const e o require, mas nas versões atuais, alterando no package.json, mudamos o type do nosso arquivo para module, assim importando dessa forma, até para exportar  A declaração estática import é usada para importar vínculos que são exportados por um outro módulo.

// o servidor não se atualiza sozinho, nós temos que atualizar manualmente, mas podemos usar --watch node .\src\server.js , mas para automatizar, basta colocar na parte de script das config
// para diferenciar modulos do proprio node de modulos de terceiros, utilizamos 'node:'.
//isso é para criar o servidor

Rotas são são entradas para a nossa API, dependendo podemos ter diversas rotas, já que ela faz parte do contato do front-end contatar o back-end.

GET = Buscar uma informação do back-end
POST = Criar recurso no back-end
PUT = Atualizar recurso no back-end (uma entidade quase por completo)
PATCH = Atualizar um recurso ESPECIFICO (algo bem mais especifico)
DELETE = Deletar um recurso

são usados em protocolos HTTP para definir a intenção de uma requisição entre CLIENTE E SERVIDOR

stateful - o armazenamento é tudo colocado na propria maquina (interno), ou seja, se de alguma forma vc perder isso, não tem retorno.
stateless - o armazenamento é subido para um local externo, já nesse caso, se você perder, dá para recuperar.

não dá para se enviar um array para o frontend utilizando node