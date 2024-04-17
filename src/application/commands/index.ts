import { Dependencies } from '../../infrastructure/di';
import { makeCreateSiteOutageCommand } from './create-site-outage-command';

// factory function to create instances of required commands, encapsulates them and, if the requirements for the created
// commands were more complex, this would hide that complexity from wherever this factory function is called
// i could also add any number of extra commands here without creating more fuss elsewhere

export function makeCommands(dependencies: Dependencies) {
    return {
      createSiteOutageCommand: makeCreateSiteOutageCommand(dependencies)
  }
}