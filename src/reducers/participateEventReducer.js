import { PARTICIPATE_EVENT_SUCCESS, PARTICIPATE_EVENT_ERROR } from '../actions/participateEventAction';
import { UNPARTICIPATE_EVENT_SUCCESS, UNPARTICIPATE_EVENT_ERROR } from '../actions/unParticipateEventAction';
import { GET_PARTICIPATION_STATUS_SUCCESS } from '../actions/getStatusParticipationAction';

const defaultState = {
  err: null,
  data: '',
  isFetching: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case PARTICIPATE_EVENT_SUCCESS:
      return {
        ...state,
        err: null,
        data: 'participate',
        isFetching: true,
      };
    case PARTICIPATE_EVENT_ERROR:
      return {
        ...state,
        err: 'Impossible de participer',
        data: null,
        isFetching: true,
      };
    case UNPARTICIPATE_EVENT_SUCCESS:
      return {
        ...state,
        err: null,
        data: 'unparticipate',
        isFetching: true,
      };
    case UNPARTICIPATE_EVENT_ERROR:
      return {
        ...state,
        err: 'Impossible de se désinscrire',
        data: null,
        isFetching: true,
      };
    case GET_PARTICIPATION_STATUS_SUCCESS:
      return {
        ...state,
        err: null,
        data: action.payload.data.participation ? 'participate' : 'unparticipate',
        isFetching: true,
      };
    default:
      return state;
  }
};
