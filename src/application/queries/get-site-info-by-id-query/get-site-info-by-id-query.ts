import { Dependencies } from "@infrastructure/di";

export type GetSiteInfoByIdQuery = {
    siteId: string;
}

export function makeGetSiteInfoByIdQuery({} : Dependencies){
    return async function makeGetSiteInfoByIdQueryetSiteInfoByIdQuery(query: GetSiteInfoByIdQuery) {
        return `siteId for for getting info was: ${query.siteId}`;
    }
}