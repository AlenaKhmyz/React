import React, { Component, useState, useCallback} from "react";


const Task = ({text,valueQustion,onCheck}) => {

    const onChange = useCallback((event) => {
        onCheck(event.target.value);
    }, [])

    return (
        <div className="Task">
            <input type="radio" name="task"  onChange = {onChange} value = {valueQustion}/>
            <span>{text}</span>
        </div>
    )
}

export default Task;