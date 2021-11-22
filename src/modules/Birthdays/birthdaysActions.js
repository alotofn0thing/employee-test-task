import axios from 'axios';
import {
    ADD_EMPLOYEE_BIRTHDAY,
    DELETE_EMPLOYEE_BIRTHDAY
} from "./const";

const addEmployeeA = (employeeData) => ({
  type: ADD_EMPLOYEE_BIRTHDAY,
  payload: { employeeData },
});

const deleteEmployeeA = (employeeData) => ({
    type: DELETE_EMPLOYEE_BIRTHDAY,
    payload: { employeeData },
  });


export const addEmployeeAC = (employeeData) => (dispatch) => {
    dispatch(addEmployeeA(employeeData))
};

export const deleteEmployeeAC = (employeeData) => (dispatch) => {
    dispatch(deleteEmployeeA(employeeData))
};