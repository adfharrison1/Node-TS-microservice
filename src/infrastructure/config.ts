import * as process from 'process';
import { IConfig } from '@application/common/interfaces';

export function makeConfig(): IConfig {

  console.log('URL >>>',process.env.KRAKEN_API_URL);
  console.log('KEY',process.env.API_KEY);

  const config: IConfig = {
    apiKey: process.env.API_KEY ?? '',
    apiUrl: process.env.KRAKEN_API_URL ?? '',
  };

  return config;
}
