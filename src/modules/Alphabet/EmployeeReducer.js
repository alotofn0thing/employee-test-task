import {
    GET_EMPLOYEE_REQUEST,
    GET_EMPLOYEE_SUCCESS,
    GET_EMPLOYEE_FAILURE,
  } from "./const";
  
  const initialState = {
    employeeData: [],
    loading: false
  };
  
  /**
   * @desc Handlers of payment reducer for changin sign in state.
   * @const
   * @type {object}
   */
  const handlers = {
    [GET_EMPLOYEE_REQUEST]: (state) => ({ ...state, loading: true }),
    [GET_EMPLOYEE_SUCCESS]: (
      state,
      { payload: { employeeData } }
    ) => ({
      ...state,
      employeeData,
      loading: false,
    }),
    [GET_EMPLOYEE_FAILURE]: (state) => ({ ...state, loading: false }),
    DEFAULT: (state) => state,
  };
  
  const employeeReducer = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
  };
  
  export default employeeReducer;