import React from 'react'
import ReactDOM from 'react-dom';
import './styles.css'


const P = (props) => { 
    const Underline = props.textDecoration ? 'underline' : undefined
    return <p style= {{fontSize: props.size, color: props.color, textDecoration: Underline, fontFamily: props.fontFamily}}>Mur</p>
  } 
  
  
  ReactDOM.render(
    <div>
      <P size='50px' />
      <P color='red'/>
      <P fontFamily='serif'/>
      <P textDecoration={true} />
    </div>,
    document.getElementById('root')
  );

export default P;