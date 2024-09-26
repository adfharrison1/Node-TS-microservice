import { AwilixContainer } from 'awilix';
import express from 'express';
import * as middlewares from '@web/middlewares';
import { Dependencies } from '@web/crosscutting/container';
import {
  outagesController,
  siteInfoController,
  siteOutagesController,
} from '@web/controllers';

export function makeApp(container: AwilixContainer<Dependencies>) {
  const app = express();
  const port = Number(process.env.PORT || 3000);

  middlewares.onRequest(app, container);

  app.use(outagesController({ router: express.Router() }));
  app.use(siteInfoController({ router: express.Router() }));
  app.use(siteOutagesController({ router: express.Router() }));

  return app;
}
