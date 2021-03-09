import React from 'react';
import './styles.css';


class Signed extends React.Component {

    state = {
        isSignedIn: false
    }

    changeState = () => setTimeout(() => this.setState({isSignedIn: !this.state.isSignedIn}), 3000)

    render () {

        return  this.state.isSignedIn ? <p className="user" onClick={this.changeState}>Hello user</p> : <button  onClick={this.changeState}>Sign in</button>
    } 
}

export default Signed;