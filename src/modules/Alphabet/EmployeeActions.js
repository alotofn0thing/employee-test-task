import axios from 'axios';
import {
  GET_EMPLOYEE_REQUEST,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_FAILURE,
} from "./const";

const request = () => ({ type: GET_EMPLOYEE_REQUEST });

const success = (employeeData) => ({
  type: GET_EMPLOYEE_SUCCESS,
  payload: { employeeData },
});

const failure = () => ({ type: GET_EMPLOYEE_FAILURE });

export const receiveEmployees = () => async (dispatch) => {
  dispatch(request());
  try {
    const { data: employeeData } = await axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users');
    dispatch(success(employeeData));
  } catch (e) {
    dispatch(failure());
  }
};