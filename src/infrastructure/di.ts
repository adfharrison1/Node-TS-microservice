import { asFunction, asValue, Resolver } from 'awilix';
import axios, { AxiosStatic } from 'axios';
import * as Interfaces from '@application/common/interfaces';
import * as services from '@infrastructure/services';
import { makeConfig } from '@infrastructure/config';

type InfrastructureDependencies = {
  axios: AxiosStatic;
  config: Interfaces.IConfig;
  krakenTestService: Interfaces.IKrakenTestService;
};

export type Dependencies = InfrastructureDependencies;

export function makeInfrastructure(): {
  [dependency in keyof InfrastructureDependencies]: Resolver<
    InfrastructureDependencies[dependency]
  >;
} {
  // if i needed to instantiate any instances of the dependencies, for example an AWS SDK class, i would do it here, and return it
  // eg the config values below, which are the environment variables.
  const config = makeConfig();

  return {
    axios: asValue(axios),
    config: asValue(config),
    krakenTestService: asFunction(services.makeKrakenTestService),
  };
}
