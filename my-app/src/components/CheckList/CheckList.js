import React, {useState, propTypes, useCallback} from 'react'
import Task from './Task'
import './styles.css'



export const CheckList = ({ title, tasks  }) => {
    
    const[value, setValue]=useState(false)

    const onChecked = (value) => value === 'good' ? setValue(true) : setValue(false)

    const onClick = useCallback(() => value ? alert('You pass') :alert('You shall not pass'), [value]);
    

    return (
        <div className="checkList">
            <h1>{title}</h1>

            {tasks.map((item) => {
                return (
                    <Task 
                    key={item.id} 
                    text={item.text} 
                    onCheck={onChecked}
                    valueQustion = {item.value}
                    />       
                )
            })}

            <button onClick={onClick}>dfd</button> 
            
        </div>
    )
}