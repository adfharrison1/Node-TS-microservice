export type Device = {
  id: string;
  name: string;
};

export class Site {
  public readonly id: string;
  public readonly name: string;
  public readonly devices: Array<Device>;

  constructor(params: { id: string; name: string; devices: Array<Device> }) {
    this.id = params.id;
    this.name = params.name;
    this.devices = params.devices;
  }
}
