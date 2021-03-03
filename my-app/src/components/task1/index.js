import React from 'react'
import ReactDOM from 'react-dom';
import './styles.css'


const P = ({name, clName, underline}) => {
        return (<div className ={clName} style = {underline ? {textDecoration: 'underline'} : {textDecoration: 'none'}}>
        {name}
        </div>)
    }
    
ReactDOM.render(
    <>
    <div>
        <P name="Mur" clName="fontSize"/>
        <P name="Miw" clName="color" />
        <P name="Cat" clName="fontFamily" underline/>
        <P name="Says" clName="underline"/>
    </div>,
    
    </>,
    document.getElementById('root')
);

export default P;