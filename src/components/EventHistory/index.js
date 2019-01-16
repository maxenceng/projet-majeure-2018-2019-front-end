import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import EventHistoryMyEvents from '../EventHistoryMyEvents';
import EventHistoryMyFavs from '../EventHistoryMyFavs';

const EventHistory = ({ userEvents }) => (
  <div className="event_history">
    <EventHistoryMyEvents
      userEvents={userEvents}
    />
    <EventHistoryMyFavs />
  </div>
);

EventHistory.propTypes = {
  userEvents: PropTypes.arrayOf(PropTypes.shape({
    EVENT_NAME: PropTypes.string.isRequired,
    EVENT_DESC: PropTypes.string.isRequired,
    EVENT_DATE: PropTypes.string.isRequired,
  })).isRequired,
};

export default EventHistory;
