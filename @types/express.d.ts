import { AwilixContainer } from 'awilix';
import { Dependencies } from '@web/crosscutting/container';

declare global {
  namespace Express {
    interface Request {
      auth: Auth;
      container: AwilixContainer<Dependencies>;
    }
  }
}