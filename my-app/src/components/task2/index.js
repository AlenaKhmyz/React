import React from 'react';

class Checkbox extends React.Component {
	state = {
		value: 'V'
	}
    
	change = () => this.state.value === 'X' ? this.setState({value: 'V'}) : this.setState({value: 'X'})

	render() {
		return <div onClick={this.change}> 
        {this.state.value}
		</div>;
	}
}

export default Checkbox;