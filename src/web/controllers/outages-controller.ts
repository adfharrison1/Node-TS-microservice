import { IRouter } from 'express';

export function outagesController({ router }: { router: IRouter }) {
    router.get('/outages', async function getOutages(request, response, next) {
        try {
        const result = 'hello world';

        return response.status(200).json(result);
        } catch (error) {
        return next(error);
        }
    })

    return router
}
