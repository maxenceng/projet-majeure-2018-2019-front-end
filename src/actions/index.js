import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import loginAction from './authAction/loginAction';
import registerAction from './authAction/registerAction';
import profileSaveAction from './profileAction/profileSaveAction';
import getMessagesAction from './chatAction/getMessagesAction';
import getConversationsAction from './chatAction/getConversationsAction';
import currentConvAction from './currentConvAction';
import getAllEventsAction from './eventAction/getAllEventsAction';
import currentEventAction from './currentEventAction';
import getProfileAction from './profileAction/getProfileAction';
import connectionStatusAction from './connectionStatusAction';

const allActions = {
  loginAction,
  registerAction,
  profileSaveAction,
  getMessagesAction,
  getConversationsAction,
  currentConvAction,
  getAllEventsAction,
  currentEventAction,
  getProfileAction,
  connectionStatusAction,
};

export default dispatch => ({ actions: bindActionCreators(allActions, dispatch) });

const ptFuncReq = PropTypes.func.isRequired;

export const actionPropTypes = PropTypes.shape({
  loginAction: ptFuncReq,
  registerAction: ptFuncReq,
  profileSaveAction: ptFuncReq,
  getMessagesAction: ptFuncReq,
  getConversationsAction: ptFuncReq,
  currentConvAction: ptFuncReq,
  getAllEventsAction: ptFuncReq,
  currentEventAction: ptFuncReq,
  getProfileAction: ptFuncReq,
  connectionStatusAction: ptFuncReq,
});
