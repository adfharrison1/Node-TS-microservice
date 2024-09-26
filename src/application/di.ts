import { asFunction, Resolver } from 'awilix';
import { makeCommands } from './commands';
import { makeQueries } from './queries';

export type Dependencies = {
  commands: ReturnType<typeof makeCommands>;
  queries: ReturnType<typeof makeQueries>;
};

// makeCommands and makeQueries is scoped to the request lifecycle, as a function. Awilix will create a Resolver instance for it
export function makeApplication(): {
  [dependency in keyof Dependencies]: Resolver<Dependencies[dependency]>;
} {
  return {
    commands: asFunction(makeCommands).scoped(),
    queries: asFunction(makeQueries).scoped(),
  };
}
