import { combineReducers } from "redux";
import employeeReducer from '../modules/Alphabet/EmployeeReducer';
import birthdaysReducer from "../modules/Birthdays/birthdaysReducer";

/**
 * @desc Reducer function that invokes every reducer inside the passed object.
 * @const
 * @type {object}
 */
const rootReducer = combineReducers({
    employee: employeeReducer,
    birthdays: birthdaysReducer
});

export default rootReducer;