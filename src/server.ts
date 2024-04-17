import { makeContainer } from '@web/crosscutting/container';
import { makeApp } from './app';
import dotenv from 'dotenv';

dotenv.config();

const container = makeContainer();
console.log('PORT >>>', process.env.PORT )
const port = Number(process.env.PORT || 3000);

makeApp(container).listen(port, function startServer() {
  console.log(`Server running on port: ${port}`)
});
