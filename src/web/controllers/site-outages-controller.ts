import { IRouter } from 'express';

export function siteOutagesController({ router }: { router: IRouter }) {
    router.get('/site-outages/:siteId', async function getSiteOutagesById(request, response, next) {
        try {
        const result = `siteId for outages was: ${request.params.siteId}`;

        return response.status(200).json(result);
        } catch (error) {
        return next(error);
        }
    })

    return router
}