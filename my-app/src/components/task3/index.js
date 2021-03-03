import React from 'react';

import state1 from './state1.png'
import state2 from './state2.png'
import state3 from './state3.png'

class Click extends React.Component {
    
    state = {
        value: state1
    }
    
    change = () => this.state.value === state1 ? this.setState({value: state2}) : this.setState({value: state3})

    render () {
        return <div onClick = {this.change}>
            <img src = {this.state.value} alt = 'img'/>
        </div>
    }
}

export default Click;