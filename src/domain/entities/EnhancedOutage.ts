import { Outage } from "./Outage";

export class EnhancedOutage extends Outage {
    public readonly name: string;

  
    constructor(params: { id: string; begin: Date; end: Date, name: string }) {
        super({
            id : params.id,
            begin : params.begin,
            end : params.end,
        })  
        this.name = params.name;
        
      }
  }
