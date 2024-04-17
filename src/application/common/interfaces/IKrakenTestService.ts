import { EnhancedOutage, Outage, Site } from "@domain/entities";

// implement an interface over the infrastructure concern that calls the test API - this means that as long as the underlying
// concern always conforms to this interface, the application layer doesnt need refactoring when the concern changes 
// (maybe we would swap API calls for DB interactions )
export interface IKrakenTestService {
    createOutages({siteId, outages}: {siteId: string, outages: Array<EnhancedOutage>}): Promise<void>;
    getOutages(): Promise<Array<Outage>>;
    getSiteInfoById(siteId: string): Promise<Site>
  }