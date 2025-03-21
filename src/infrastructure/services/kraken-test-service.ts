import { Dependencies } from '@infrastructure/di';
import { IKrakenTestService } from '@application/common/interfaces';
import { Outage, Site } from '@domain/entities';

// in here you can see how the infra concern is forced to conform to the interface, taking defined args and
// returning domain entities

export function makeKrakenTestService({
  axios,
  config,
}: Pick<Dependencies, 'axios' | 'config'>): IKrakenTestService {
  interface KrakenOutage {
    id: string;
    begin: string;
    end: string;
  }

  interface KrakenSiteInfo {
    id: string;
    name: string;
    devices: Array<{
      id: string;
      name: string;
    }>;
  }

  const headers = {
    'x-api-key': config.apiKey,
  };

  return {
    async createOutages({ siteId, outages }) {
      console.log(`creating ${outages.length} outages for site: ${siteId}`);
      try {
        console.log('outages >>', outages);
        const mappedOutagesToApiBody = outages.map((outage) => {
          return {
            ...outage,
            begin: outage.begin.toISOString(),
            end: outage.end.toISOString(),
          };
        });

        await axios.post(`${config.apiUrl}/site-outages/${siteId}`, {
          headers,
          data: mappedOutagesToApiBody,
        });
      } catch (error) {
        if (error instanceof Error) {
          console.log(
            `Error creating outages for siteId ${siteId}: ${error.message}`
          );
        }

        throw error;
      }
    },

    async getOutages() {
      console.log(`fetching all outages`);
      try {
        const result = await axios.get<Array<KrakenOutage>>(
          `${config.apiUrl}/outages`,
          {
            headers,
          }
        );

        return result.data.map((outage) => {
          return new Outage({
            id: outage.id,
            begin: new Date(outage.begin),
            end: new Date(outage.end),
          });
        });
      } catch (error) {
        if (error instanceof Error) {
          console.log(`Error fetching outages: ${error.message}`);
        }
        throw error;
      }
    },

    async getSiteInfoById(siteId) {
      console.log(`fetching site info for site: ${siteId}`);
      try {
        const { data } = await axios.get<KrakenSiteInfo>(
          `${config.apiUrl}/site-info/${siteId}`,
          {
            headers,
          }
        );

        return new Site({
          id: data.id,
          name: data.name,
          devices: data.devices.map((device) => {
            return {
              id: device.id,
              name: device.name,
            };
          }),
        });
      } catch (error) {
        if (error instanceof Error) {
          console.log(
            `Error fetching info for site ${siteId}: ${error.message}`
          );
        }

        throw error;
      }
    },
  };
}
