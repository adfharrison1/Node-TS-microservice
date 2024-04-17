import { EnhancedOutage } from "@domain/entities";
import { Dependencies } from "@infrastructure/di";

export type CreateSiteOutageCommand = {
    siteId: string;
    outages: Array<{
        id: string,
        name: string,
        begin: string
        end: string
    }>
}

export function makeCreateSiteOutageCommand({krakenTestService} : Dependencies){
    return async function createSiteOutageCommand(command: CreateSiteOutageCommand) {

        const outages = command.outages.map((outage) => {
            return new EnhancedOutage({
                id: outage.id,
                name: outage.name,
                begin: new Date(outage.begin),
                end: new Date(outage.end)
            })
        })
        
        return krakenTestService.createOutages({siteId: command.siteId, outages});
    }
}