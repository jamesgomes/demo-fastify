const server = require('fastify')({ logger: true });
// Registra as rotas e plugins
server.register(require('./lib/routes/notifications'));

// Opções de inicialização do servidor
const options = {
  port: 3000
};

// Inicializa o servidor
const start = async () => {
  try {
    await server.listen(options);
    server.log.info(`Servidor rodando em http://localhost:${server.server.address().port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();