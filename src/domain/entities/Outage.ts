export class Outage {
  public readonly id: string;
  public readonly begin: Date;
  public readonly end: Date;

  constructor(params: { id: string; begin: Date; end: Date }) {
    this.id = params.id;
    this.begin = params.begin;
    this.end = params.end;
  }
}
