import { IRouter } from 'express';

export function siteOutagesController({ router }: { router: IRouter }) {
  router.post(
    '/site-outages/:siteId',
    async function createSiteOutageBySiteId(request, response, next) {
      try {
        console.log(request.body);
        // resolve the command needed off the container, which Awilix will handle all the dependency injection, scoping and instantiation for
        const result = await request.container
          .resolve('commands')
          .createSiteOutageCommand({
            siteId: request.params.siteId,
            outages: request.body,
          });

        return response.status(200).json(result);
      } catch (error) {
        return next(error);
      }
    }
  );

  return router;
}
