import { IRouter } from 'express';

export function siteInfoController({ router }: { router: IRouter }) {
  router.get(
    '/site-info/:siteId',
    async function getSiteInfoById(request, response, next) {
      try {
        const result = await request.container
          .resolve('queries')
          .getSiteInfoByIdQuery({
            siteId: request.params.siteId,
          });

        return response.status(200).json(result);
      } catch (error) {
        return next(error);
      }
    }
  );

  return router;
}
