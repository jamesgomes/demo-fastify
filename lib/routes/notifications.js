const fastifyPlugin = require('fastify-plugin');

// Schema de validação para a rota de POST
const postNotificationSchema = {
  body: {
    type: 'object',
    required: ['text', 'recipient'],
    properties: {
      text: { type: 'string' },
      recipient: { type: 'string' },
    },
  },
};

// Rota de GET para retornar notificações
const getNotificationsRoute = {
  method: 'GET',
  url: '/notifications',  
  handler: async (request, reply) => {
    reply.send({ notifications: [] });
  },
};

// Rota de POST para criar uma nova notificação
const postNotificationRoute = {
  method: 'POST',
  url: '/notifications',
  schema: postNotificationSchema,
  handler: async (request, reply) => {
    reply.send({ message: 'Notificação criada com sucesso!' });
  },
};

// Rota de GET para retornar uma notificação com base no ID
const getNotificationByIdRoute = {
  method: 'GET',
  url: '/notifications/:id',  
  handler: async (request, reply) => {
    const { id } = request.params;
    reply.send({ notification: { id, message: 'Notificação encontrada.' } });
  },
};

// Registra as rotas
const notificationsRoutes = async (fastify) => {
  fastify.route(getNotificationsRoute);
  fastify.route(postNotificationRoute);
  fastify.route(getNotificationByIdRoute);
};

module.exports = fastifyPlugin(notificationsRoutes);