import { makeContainer } from '@web/crosscutting/container';
import { makeApp } from './app';

const container = makeContainer();
const port = Number(process.env.PORT || 3000);

makeApp(container).listen(port, function startServer() {
  console.log(`Server running on port: ${port}`)
});
