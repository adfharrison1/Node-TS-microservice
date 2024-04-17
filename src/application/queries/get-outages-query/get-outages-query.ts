import { Dependencies } from "@infrastructure/di";

// id probably paginate this ??? 
// but i didnt really have time to see if your API does that, and implement it

export function makeGetOutagesQuery({config, krakenTestService} : Dependencies){
    return async function getOutageQuery() {
        return await krakenTestService.getOutages();
    }
}