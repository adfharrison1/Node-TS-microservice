import { asValue, Resolver } from 'awilix';
import axios, { AxiosStatic } from 'axios';
type InfrastructureDependencies = {
    axios: AxiosStatic;
}

export type Dependencies = InfrastructureDependencies

export function makeInfrastructure(): {
    [dependency in keyof InfrastructureDependencies]: Resolver<InfrastructureDependencies[dependency]>;
  } {
    
    // if i needed to instantiate any instances of the dependencies, for example an AWS SDK class, i would do it here, and return it
    
    return {
      axios: asValue(axios),
    };
  }