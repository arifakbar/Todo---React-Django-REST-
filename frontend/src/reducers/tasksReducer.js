import _ from "lodash";
import {
  FETCH_TASKS,
  CREATE_TASK,
  DELETE_TASK,
  TOGGLE_TASK_STATUS,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case CREATE_TASK:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_TASK:
      return _.omit(state, action.payload);
    case TOGGLE_TASK_STATUS:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
