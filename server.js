import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify();
const databasePostgres = new DatabasePostgres;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/clientes', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createClientes(body);
    return reply.status(201).send();
})

// READE
server.get('/clientes', async () => {
    const clientes = await databasePostgres.listclientes();
    return clientes;
});

// UPDATE
server.put('/clientes/:id', async (request, reply) => {
    const userID = request.params.id;
    const body = request.body;
    await databasePostgres.updateCliente(userID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/clientes/:id', async (request, reply) => {
    const userID = request.params.id;
    await databasePostgres.deleteCliente(userID);

    return reply.status(204).send();
})

export { server };


server.listen({
    port: 3333
});
