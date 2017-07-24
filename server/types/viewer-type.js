import { GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField } from 'graphql-relay';

import { nodeInterface } from '../utils/node-definitions';
import { registerType } from '../utils/resolve-type';

import { Viewer } from '../models/graphql-models';

export const viewerType = new GraphQLObjectType({

  name: 'Viewer',

  fields: () => ({
    id: globalIdField('Viewer'),
    message: { type: GraphQLString }, 
  }),

  interfaces: () => [nodeInterface]

});

registerType(Viewer, viewerType, id => Object.assign(new Viewer(), { id, message: 'Hello World', }));
