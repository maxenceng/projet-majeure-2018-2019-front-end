import { createAction } from 'redux-actions';
import axios from '../helpers/axios';
import { axiosHeaders } from '../helpers/common';

export const UNPARTICIPATE_EVENT_REQUEST = 'UNPARTICIPATE_EVENT_REQUEST';
export const UNPARTICIPATE_EVENT_SUCCESS = 'UNPARTICIPATE_EVENT_SUCCESS';
export const UNPARTICIPATE_EVENT_ERROR = 'UNPARTICIPATE_EVENT_ERROR';

export const getunParticipationRequest = createAction(UNPARTICIPATE_EVENT_REQUEST);
export const getunParticipationSuccess = createAction(UNPARTICIPATE_EVENT_SUCCESS);
export const getunParticipationError = createAction(UNPARTICIPATE_EVENT_ERROR);

export default idEvent => (dispatch) => {
  dispatch(getunParticipationRequest());
  const idUser = process.browser && localStorage.getItem('idUser');
  return axios.get(`removeParticipation?idUser=${idUser}&idEvent=${idEvent}`, axiosHeaders())
    .then(res => dispatch(getunParticipationSuccess(res)))
    .catch(err => dispatch(getunParticipationError(err)));
};
