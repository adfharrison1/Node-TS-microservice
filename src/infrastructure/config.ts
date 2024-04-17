import * as process from 'process';
import { IConfig } from '@application/common/interfaces';

export function makeConfig(): IConfig {

  const config: IConfig = {
    apiKey: process.env.API_KEY ?? '',
    apiUrl: process.env.KRAKEN_API_URL ?? '',
  };

  return config;
}
