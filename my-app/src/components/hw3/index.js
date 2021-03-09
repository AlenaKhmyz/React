import React from 'react'
import './styles.css'

class ConditionalRendering extends React.Component {
    state = {
        loading: false,
        greeting: ''
    }

    changeResult = () => setTimeout(this.sayHi, 3000, this.changeState()) 
  

    sayHi = () => this.setState({loading: false, greeting: 'Hey'}) 

    render() {
        return (
          <div>
            <button  onClick={this.changeResult}>Say Hey</button>
            {this.state.loading && (
            <div className="loader"></div>
            )}
            {this.state.greeting && (
            <span>{this.state.greeting}</span>
            )}   
          </div>
        );
    }

}

export default ConditionalRendering;