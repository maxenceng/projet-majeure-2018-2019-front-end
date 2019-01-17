import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import PropTypes from 'prop-types';
import EventComponent from '../../components/EventComponent';
import actions, { actionPropTypes } from '../../actions';

class Event extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
    event: PropTypes.instanceOf(Object).isRequired,
  };


  handleOnEventSelected = () => {
    const { event: { ID_EVENT } } = this.props;
    const {
      actions: {
        currentEventAction,
        getParticipantEventAction,
        getInterestedEventAction,
      },
    } = this.props;
    currentEventAction(ID_EVENT);
    getParticipantEventAction({
      idEvent: ID_EVENT,
    });
    getInterestedEventAction({
      idEvent: ID_EVENT,
    });
    Router.push('/eventPage');
  }

  render() {
    const { event } = this.props;
    return (
      <div>
        <EventComponent event={event} onClick={this.handleOnEventSelected} />
      </div>
    );
  }
}

export default connect(null, actions)(Event);
