import { Framework, RefinedIntegrationEvent } from '@arkw/core';

import { framework } from '@/lib/framework-utils';
import { sanitizeData } from '@/lib/sanitize-data';

import { ClientLayout } from './client-layout';

function getApis(name: string, framework: Framework | null) {
  if (!framework)
    return {
      integrationIcon: '',
      apis: {},
    };

  const apis = framework.getApisByIntegration(name);

  if (!apis)
    return {
      integrationIcon: '',
      apis: {},
    };

  const apisArr = Object.entries(apis);
  const firstItem = apisArr[0][1];
  const integrationIcon = firstItem.icon?.icon;

  if (!integrationIcon) {
    return { integrationIcon: '', apis };
  }

  return { integrationIcon, apis };
}

function getEventsForIntegration(integrationName: string, framework: Framework | null) {
  if (!framework) return;

  const events = framework.getEventsByIntegration(integrationName) || {};
  const refinedEvents: RefinedIntegrationEvent[] = Object.entries(events).map(([key, value]) => {
    return {
      ...value,
      key,
      label: key,
      integrationName,
    };
  });
  return refinedEvents;
}

/**
 *
 * @param connectedIntegrations
 * @returns integration, apis, events, connection counts
 */
function getIntegrationWithConnectionAndApis(connectedIntegrations: Array<{ name: string; referenceId: string }>) {
  const connectionCount = connectedIntegrations.reduce((acc, integration) => {
    acc[integration.name] = (acc[integration.name] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return connectedIntegrations
    .reduce((acc: Array<{ name: string; referenceId: string } | undefined>, cur) => {
      const isPresent = acc.some(integration => integration?.name === cur?.name);
      if (!isPresent) {
        acc.push(cur);
      }
      return acc;
    }, [])
    .filter(integration => integration !== undefined)
    .map(integration => {
      const { apis, integrationIcon } = getApis(integration.name, framework);
      return {
        ...integration,
        icon: integrationIcon,
        apis,
        connections: connectionCount[integration.name],
        events: getEventsForIntegration(integration.name, framework),
      };
    })
    .filter(integration => integration !== undefined);
}

async function Playground() {
  //we need to display system api and system events where system belongs to the user buidling an app
  const connectedIntegrations = (await framework?.dataLayer.getAllConnections()) || [];

  const updatedConnectedIntegration = getIntegrationWithConnectionAndApis(connectedIntegrations);

  return (
    <section className="relative overflow-y-scroll grid grid-cols-[23.5rem_1fr]">
      <ClientLayout connectedIntegrations={sanitizeData(updatedConnectedIntegration)} />
    </section>
  );
}

export default Playground;