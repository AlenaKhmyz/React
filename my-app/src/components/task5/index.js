import React from 'react';
import './styles.css'

class Animation extends React.Component {

    state = {
        btn: false
    }

    changeState = () => {
        this.state.btn ? this.setState ({btn: false}) : this.setState({btn: true})
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