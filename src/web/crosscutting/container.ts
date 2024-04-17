import { createContainer } from 'awilix';
import { Dependencies as InfrastructureDependencies, makeInfrastructure } from '@infrastructure/di';
import { Dependencies as ApplicationDependencies, makeApplication } from '@application/di';

export type Dependencies = 
  InfrastructureDependencies &
  ApplicationDependencies;

export function makeContainer(
) {
  const container = createContainer();

  container.register({
    ...makeInfrastructure(),
    ...makeApplication(),
  });

  return container;
}