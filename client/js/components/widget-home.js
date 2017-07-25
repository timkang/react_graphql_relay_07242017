import React from 'react';
import PropTypes from 'prop-types';
import { createFragmentContainer, graphql } from 'react-relay';

// import { insertWidget } from '../mutations/insert-widget';

import { WidgetsTableContainer } from './widgets-table';
import { WidgetFormContainer } from './widget-form';

export class WidgetHome extends React.Component {

  static propTypes = {
    viewer: PropTypes.object,
    relay: PropTypes.object,
  };

  saveWidget = widget => {

    // insertWidget(
    //   this.props.relay.environment,
    //   widget,
    //   this.props.viewer.id,
    // );

  };

  render() {

    return <div>
      <WidgetsTableContainer viewer={this.props.viewer} />
      <WidgetFormContainer onSaveWidget={this.saveWidget} />
    </div>;

  }
}

export const WidgetHomeContainer = createFragmentContainer(
  WidgetHome,
  graphql`
    fragment widgetHome_viewer on Viewer {
      id
      ...widgetsTable_viewer
    }
  `,
);
