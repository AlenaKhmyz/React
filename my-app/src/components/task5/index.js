import React from 'react';
import './styles.css'

class Animation extends React.Component {

    state = {
        btn: false
    }

    changeState = () => {
        this.setState ({btn: this.state.btn ? <button>Load</button> : <button className="loader"></button>})
    }
    

    render () {

        return (
            <div>
                {this.state.btn ? <button className="loader" onClick={this.changeState}></button> : <button onClick={this.changeState}>Load</button> }

            </div>
        ) 
    } 
}

export default Animation;