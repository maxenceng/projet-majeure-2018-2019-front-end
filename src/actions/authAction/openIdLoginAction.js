import { createAction } from 'redux-actions';
import Router from 'next/dist/lib/router';
import axios from '../../helpers/axios';
import { getErrorMessage } from '../../helpers/common';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const registerRequest = createAction(REGISTER_REQUEST);
export const registerSuccess = createAction(REGISTER_SUCCESS);
export const registerError = createAction(REGISTER_ERROR);

export default ({
  name,
  firstname,
  email,
  password,
  passwordVerif,
}) => (dispatch) => {
  dispatch(registerRequest());
  return axios.post('connexionOpenId', {
    name,
    firstname,
    email,
    password,
    passwordVerif,
  })
    .then((res) => {
      dispatch(registerSuccess(res));
      const idUser = res.data.idUser ? res.data.idUser : res.data.user.ID_USER;
      if (process.browser) {
        localStorage.setItem('userToken', res.data.token);
        localStorage.setItem('idUser', idUser);
      }
      Router.push('/');
    })
    .catch(err => dispatch(registerError(getErrorMessage(err))));
};
