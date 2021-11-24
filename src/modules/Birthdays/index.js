import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';


import "./index.scss";

const Birthdays = () => {
    const birthdays = useSelector((state) => state.birthdays.employees);

    const monthTable = [
        [11, "November", []], 
        [12, "December", []], 
        [1, "January", []], 
        [2, "February", []], 
        [3, "March", []], 
        [4, "April", []], 
        [5, "May", []], 
        [6, "June", []], 
        [7, "July", []], 
        [8, "August", []], 
        [9, "September", []],
        [10, "October", []]
    ];
    
    for ( let j = 0; j < birthdays.length; j++) {
        let monthOfBirthday = new Date(birthdays[j].dob).getMonth() + 1;
        for (let i = 0; i < monthTable.length; i++) {
            if (monthTable[i][0] === monthOfBirthday) {
                monthTable[i][2].push(birthdays[j]);
            };
        };
    };

    let getBirthdays = monthTable.map(birthday => {
        let birthdayList =  birthday[2].map(day => {
            let dateOfBirthday = new Date(day.dob).toDateString();
            return <p>{day.firstName + ' ' + day.lastName} - {dateOfBirthday}</p>
        });
        if (birthdayList.length === 0) {
            birthdayList = <p>No Employees</p>
        }

        return (
            <div>
                <h3>{birthday[1]}</h3>
                <div>
                    {birthdayList}
                </div>
            </div>
        )
    });

    if (birthdays.length === 0) {
        getBirthdays = <p> Employees List is empty</p>
    }
    

    return (
        <div className="birthday">
            <h2>
            Employees birthday
            </h2>
            <div className="birthday-list">
            {getBirthdays}
            </div>
        </div>
    )
};

export default Birthdays;