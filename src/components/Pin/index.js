import React from 'react';
import './index.scss';
import Router from 'next/router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions, { actionPropTypes } from '../../actions';

class Pin extends React.Component {
  static propTypes = {
    actions: actionPropTypes.isRequired,
    idEvent: PropTypes.string.isRequired,
    EVENT_NAME: PropTypes.string.isRequired,
    MEDIA_CONTENT: PropTypes.string.isRequired,
    event: PropTypes.shape({
      EVENT_NAME: PropTypes.string.isRequired,
      EVENT_DESC: PropTypes.string.isRequired,
      EVENT_DATE: PropTypes.string.isRequired,
      MEDIA_CONTENT: PropTypes.string.isRequired,
      PARTCIPATE: PropTypes.bool.isRequired,
    }).isRequired,
  };

  state = {
    show: false,
  }

  handleOnClick = () => {
    const { idEvent, event } = this.props;
    const {
      actions: {
        currentEventAction,
        getParticipantEventAction,
        getInterestedEventAction,
      },
    } = this.props;
    currentEventAction(event);
    getParticipantEventAction({
      idEvent,
    });
    getInterestedEventAction({
      idEvent,
    });
    Router.push('/eventPage');
  }

  handleOnMouseOver = () => {
    this.setState({ show: true });
  }

  handleOnMouseLeave = () => {
    this.setState({ show: false });
  }

  render() {
    const { show } = this.state;
    const {
      EVENT_NAME,
      MEDIA_CONTENT,
    } = this.props;

    const event = (
      <div className="Event">
        <img className="EventPicture" src={MEDIA_CONTENT} alt="no pic for the event :/" />
        <div className="EventName">{EVENT_NAME}</div>
      </div>
    );
    return (
      <div className="Pin" onMouseOver={this.handleOnMouseOver} onMouseLeave={this.handleOnMouseLeave} onClick={this.handleOnClick}>
        {show ? event : <div className="Marker" />}
      </div>
    );
  }
}

export default connect(null, actions)(Pin);
