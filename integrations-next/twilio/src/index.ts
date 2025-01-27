import { Integration, ToolApi } from '@mastra/core';

// @ts-ignore
import TwilioLogo from './assets/twilio.png';
import { comments } from './client/service-comments';
import * as integrationClient from './client/services.gen';
import * as zodSchema from './client/zodSchema';

type TwilioConfig = {
  ACCOUNT_SID: string;
  AUTH_TOKEN: string;
  [key: string]: any;
};

export class TwilioIntegration extends Integration {
  readonly name = 'TWILIO';
  readonly logoUrl = TwilioLogo;
  config: TwilioConfig;
  readonly tools: Record<Exclude<keyof typeof integrationClient, 'client'>, ToolApi>;
  categories = ['communications'];
  description = 'Twilio is a cloud communications platform as a service company based in San Francisco, California.';

  constructor({ config }: { config: TwilioConfig }) {
    super();

    this.config = config;
    this.tools = this._generateIntegrationTools<typeof this.tools>();
  }

  protected get toolSchemas() {
    return zodSchema;
  }

  protected get toolDocumentations() {
    return comments;
  }

  protected get baseClient() {
    integrationClient.client.setConfig({
      baseUrl: `https://api.twilio.com`,
    });
    return integrationClient;
  }

  getApiClient = async () => {
    const value = {
      ACCOUNT_SID: this.config?.['ACCOUNT_SID'],
      AUTH_TOKEN: this.config?.['AUTH_TOKEN'],
    } as Record<string, any>;

    const baseClient = this.baseClient;

    baseClient.client.interceptors.request.use((request, options) => {
      request.headers.set('Authorization', `Basic ${btoa(`${value?.['ACCOUNT_SID']}:${value?.['AUTH_TOKEN']}`)}`);
      return request;
    });

    return integrationClient;
  };
}
