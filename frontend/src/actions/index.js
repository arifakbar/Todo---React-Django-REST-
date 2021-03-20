import {
  FETCH_TASKS,
  CREATE_TASK,
  DELETE_TASK,
  TOGGLE_TASK_STATUS,
} from "./types";
import Django from "../apis/Django";
import history from "../history";

export const fetchTasks = () => {
  return async (dispatch) => {
    const response = await Django.get("/api");
    dispatch({ type: FETCH_TASKS, payload: response.data });
  };
};

export const createTask = (values) => {
  return async (dispatch) => {
    const response = await Django.post("/api/", values);
    dispatch({ type: CREATE_TASK, payload: response.data });
    history.push("/");
  };
};

export const deleteTask = (id) => {
  return async (dispatch) => {
    await Django.delete(`/api/${id}`);
    dispatch({ type: DELETE_TASK, payload: id });
    history.push("/");
  };
};

export const toggleTaskStatus = (id, status) => {
  return async (dispatch) => {
    const response = await Django.patch(`/api/${id}/`, status);
    dispatch({ type: TOGGLE_TASK_STATUS, payload: response.data });
    history.push("/");
  };
};
