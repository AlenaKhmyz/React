import React from 'react';
import './styles.css'

     const Button = ({name}) => {
        return (
             <div>
                {name ? <button className="loader" name={true}></button> : <button name={false}>Load</button>}
            </div>
        )
    }
export default Button;