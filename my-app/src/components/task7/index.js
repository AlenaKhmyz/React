import React from 'react'
import './styles.css'


class Dropdown extends React.Component {
    state = {
        show: false,
    }
    
    render() {
        return (
            <div>
                <button onClick={() => this.setState((prevState) => ({ show: !prevState.show }))}>
                    Ingredients
                </button>
                
                {this.state.show && (
                    <div
                    style={{ maxWidth: '200px' }}>
                    <p>pepperoni</p>
                    <p>pineapple</p>
                    <p>cheese</p>
                    <p>mushrooms</p>
                    </div>
                )}
            </div>
        );
      }
       
}

export default Dropdown;