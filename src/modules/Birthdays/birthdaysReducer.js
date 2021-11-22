import {
  ADD_EMPLOYEE_BIRTHDAY,
  DELETE_EMPLOYEE_BIRTHDAY
} from "./const";
  
  const initialState = {
    employees: []
  };
  
  /**
   * @desc Handlers of payment reducer for changin sign in state.
   * @const
   * @type {object}
   */
  const handlers = {
    [ADD_EMPLOYEE_BIRTHDAY]: (
      state,
      { payload: { employeeData } }
    ) => ({
      ...state,
      employees: [...state.employees, employeeData]
    }),
    [DELETE_EMPLOYEE_BIRTHDAY]: (
      state,
      { payload: { employeeData } }
    ) => ({
      ...state,
      employees: state.employees.filter(employee => (employee.firstName + ' ' + employee.lastName) !== employeeData)
    }),
    DEFAULT: (state) => state,
  };
  
  const birthdaysReducer = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
  };
  
  export default birthdaysReducer;