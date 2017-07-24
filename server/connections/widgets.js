import { connectionDefinitions } from 'graphql-relay';

import { widgetType } from '../types/widget-type';

export const {
  connectionType: widgetsConnectionType,
  edgeType: widgetsEdgeType,
} = connectionDefinitions({
  name: 'Widgets',
  nodeType: widgetType,
});