import { Dependencies } from "@infrastructure/di";

export type GetSiteInfoByIdQuery = {
    siteId: string;
}

export function makeGetSiteInfoByIdQuery({krakenTestService} : Dependencies){
    return async function makeGetSiteInfoByIdQueryetSiteInfoByIdQuery(query: GetSiteInfoByIdQuery) {
        return await krakenTestService.getSiteInfoById(query.siteId)
    }
}