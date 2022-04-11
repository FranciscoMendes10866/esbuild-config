import fastify, {
  FastifyRequest,
  FastifyReply,
  FastifyInstance,
} from "fastify";

const startServer = async (): Promise<FastifyInstance> => {
  const app = fastify();

  app.get("/", async (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> => {
    return reply.send({ hello: "world" });
  });

  return app;
};

startServer()
  .then((app) => app.listen(3333))
  .catch(console.error);
