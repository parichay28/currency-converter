import {CHANGE_PRIMARY_COLOR} from '../actions/themes';

const DEFAULT_STATE = {
  primaryColor: '#4F6D7A',
};

const themes = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case CHANGE_PRIMARY_COLOR:
      return {...state, primaryColor: action.primaryColor};
    default:
      return state;
  }
};

export default themes;
