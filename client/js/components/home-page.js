import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';

import { environment } from '../environment';

export class HomePage extends React.Component {

  render() {
    return <section>
      <QueryRenderer
        environment={environment}
        query={graphql`
          query homePageQuery {
            viewer {
              id
              message
            }
          }
        `}
        variables={{}}
        render={({ error, props, retry }) => {
          if (error) {
            return <div>
              <h1>Error Loading</h1>
              <button type="button" onClick={() => retry()}>Retry</button>
            </div>;
          } else if (props) {
            return <div>{props.viewer.message}</div>;
          } else {
            return <div>Loading Home Page...</div>;
          }
        }}
      />
    </section>;
  }

}