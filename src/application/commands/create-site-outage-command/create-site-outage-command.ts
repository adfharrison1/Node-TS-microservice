import { Dependencies } from "@infrastructure/di";

export type CreateSiteOutageCommand = {
    siteId: string;
}

export function makeCreateSiteOutageCommand({} : Dependencies){
    return async function createSiteOutageCommand(command: CreateSiteOutageCommand) {
        return `siteId for outages was: ${command.siteId}`;
    }
}