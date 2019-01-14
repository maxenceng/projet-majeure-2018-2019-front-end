import React from 'react';
import Link from 'next/link';
import './index.scss';
import PropTypes from 'prop-types';
import PictureEvent from '../PictureEvent';
import DateBox from '../DateBox';
import pictureBox from '../../assets/images/party.jpg';

const EventComponent = ({ event: { EVENT_DATE, EVENT_NAME, LOC_DISCTRICT } }) => (
  <div className="boxEvent">
    <Link href="/eventPage">
      <button type="button" className="clickedEvent">
        <PictureEvent pictureEvent={pictureBox} />
        <DateBox
          date={EVENT_DATE}
          name={EVENT_NAME}
          district={LOC_DISCTRICT}
        />
      </button>
    </Link>
  </div>
);

EventComponent.propTypes = {
  event: PropTypes.string,
};

EventComponent.defaultProps = {
  event: '',
};

export default EventComponent;
