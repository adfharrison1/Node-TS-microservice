import { Dependencies } from "@infrastructure/di";

// id probably paginate this ??? 
// but i didnt really have time to see if your API does that, and implement it

export function makeGetOutagesQuery({ krakenTestService } : Dependencies){
    return async function getOutageQuery() {

        // if we were collating a lot of information from different sources, or needing to perform some transformation here, id use a mapper here.
        return await krakenTestService.getOutages();
    }
}