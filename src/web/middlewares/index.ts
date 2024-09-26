import { AwilixContainer } from 'awilix';
import { scopePerRequest } from 'awilix-express';
import express, { Application } from 'express';
import { Dependencies } from '../crosscutting/container';

export function onRequest(
  app: Application,
  container: AwilixContainer<Dependencies>
) {
  app.use(scopePerRequest(container));
  app.use(express.json());
  //   app.get('/api-docs', (req, res) => res.redirect('/api-docs/index.htm'));
  //   app.use('/api-docs', requestMiddlewares.swaggerUi(), requestMiddlewares.serveSwagger({ schema }));
  //   app.get('/openapi.json', (req, res) => res.json(schema));
}
