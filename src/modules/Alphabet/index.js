import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {receiveEmployees} from './EmployeeActions';
import {addEmployeeAC} from '../Birthdays/birthdaysActions';
import {deleteEmployeeAC} from '../Birthdays/birthdaysActions';

import "./index.scss";

const Alphabet = () => {
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(receiveEmployees())
    }, [])
    
    const employees = useSelector((state) => state.employee.employeeData);
    const birthdays = useSelector((state) => state.birthdays.employees);

    const letters = "abcdefghijklmnopqrstuvwxyz".split("");

    const employeeBirthday = (name) => employees.filter(person => (person.firstName + ' ' + person.lastName) === name)[0]; 
    const getChecked = (id) => {
        let check = birthdays.filter(person => person.id === id).length  ===  0 ? false : true;
        return check;
      }

    const sortedArray = letters.map(letter => {
        let letterWords = [];
        for (let i = 0; i < employees.length; i++) {
            if(employees[i].firstName[0] === letter.toUpperCase()) {
                letterWords.push(employees[i].firstName + ' ' + employees[i].lastName)
            }
        }
        letterWords.sort();
        const letterWordsSorted = letterWords.map((name, index) => {
            return (
                <div className="employee-letter-radio">
                    <p>{name}</p>
                    <label htmlFor={`active${index + letter}`}>Active</label>
                    <input onChange={()=> {                        
                        dispatch(addEmployeeAC(employeeBirthday(name)))
                        }} 
                        id={`active${index + letter}`} name={`birthday${index + letter}`} type='radio' checked={getChecked(employeeBirthday(name).id)} />
                    <label htmlFor={`not-active${index + letter}`}>Not Active</label>
                    <input onChange={()=> {                       
                        dispatch(deleteEmployeeAC(name))
                        }} 
                        id={`not-active${index + letter}`} name={`birthday${index + letter}`} type='radio' defaultChecked/>
                </div>
            )
         });
        return(
            <div className="employee-letter">
                <h3>{letter.toUpperCase()}</h3>
                {letterWordsSorted.length === 0 ? <h4>No Employees</h4> : letterWordsSorted}
            </div>
        )
    });
    
    return (
        <div className="employee">
            {sortedArray}
        </div>
    )
};

export default Alphabet;