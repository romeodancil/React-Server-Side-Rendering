import { FETCH_REPOS } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_REPOS:
      return action.payload.data || false;
    default:
      return state;
  }
}
