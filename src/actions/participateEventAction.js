import { createAction } from 'redux-actions';
import axios from '../helpers/axios';

export const PARTICIPATE_EVENT_REQUEST = 'PARTICIPATE_EVENT_REQUEST';
export const PARTICIPATE_EVENT_SUCCESS = 'PARTICIPATE_EVENT_SUCCESS';
export const PARTICIPATE_EVENT_ERROR = 'PARTICIPATE_EVENT_ERROR';

export const getParticipationRequest = createAction(PARTICIPATE_EVENT_REQUEST);
export const getParticipationSuccess = createAction(PARTICIPATE_EVENT_SUCCESS);
export const getParticipationError = createAction(PARTICIPATE_EVENT_ERROR);

export default idEvent => (dispatch) => {
  dispatch(getParticipationRequest());
  console.log(idEvent);
  const idUser = localStorage.getItem('idUser');
  return axios.get(`participateEvent?idUser=${idUser}&idEvent=${idEvent}`)
    .then(res => dispatch(getParticipationSuccess(res)))
    .catch(err => dispatch(getParticipationError(err)));
};