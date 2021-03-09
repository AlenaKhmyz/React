import React from 'react'
import './styles.css'


class Dropdown extends React.Component {

  ingredients = [
    {text: 'pepperoni', id:'pizza'},
    {text:'pineapple', id:'fruit'},
    {text: 'cheese', id: 'cheese'}, 
    {text:'mushrooms', id: 'mushroom'}
  ]
    state = {
        show: false,
    };

    onToggle = () =>{
        this.setState({ show: !this.state.show })
    }
    
    render() {
        return (
          <div>
            <button onClick={this.onToggle}>
              Ingredients
              {this.state.show ? '▲' : '▼'}
            </button>

            {this.state.show && this.ingredients.map((item) => {
                return <div key={item.id}>{item.text}</div>
            })}
          </div>
        );
    }
    
}
 export default Dropdown;