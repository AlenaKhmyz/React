import React from 'react'

class DoubleSidedBinding extends React.Component {
    state = {
        value: '',
    }

    onChange = (event) =>  this.setState({value: event.target.value})
    render() {
        return (
        <div className="App">
            <input 
                type="text"
                value={this.state.value}
                onChange={this.onChange}
                />
        </div>
        );
    }
}

export default DoubleSidedBinding;