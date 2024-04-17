import { Dependencies } from '../../infrastructure/di';
import {  makeGetOutagesQuery } from './get-outages-query';
import { makeGetSiteInfoByIdQuery } from './get-site-info-by-id-query';


// factory function to create instances of required queries, encapsulates them and, if the requirements for the created
// queries were more complex, this would hide that complexity from wherever this factory function is called
// i could also add any number of extra queries here without creating more fuss elsewhere

export function makeQueries(dependencies: Dependencies) {
    return {
      getOutagesQuery: makeGetOutagesQuery(dependencies),
      getSiteInfoByIdQuery: makeGetSiteInfoByIdQuery(dependencies)

  }
}