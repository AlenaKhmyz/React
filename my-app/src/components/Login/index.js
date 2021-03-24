import React, {Component} from 'react'
import './styles.css'

class PersonForm extends Component {
    state = {
        fullName: '',
        phone: '',
        password: '',
        user: null,
        eror: ''
    }

    componentDidUpdate = async (prevProps, prevState) => {
        console.log(prevState, this.state);
        if (
            this.state.phone.length === 13 && 
            (prevState.password.length === 7 || prevState.password.length === 0) &&
            this.state.password.length === 8
        ) {
            try {
                const response = await fetch('blabla', {
                    phone: this.state.phone,
                    password: this.state.password,
                    fullName: this.state.fullName
                })
                this.setState({user: response.data, phone: '', password: '', fullName: ''})
            } catch (err) {
                console.log(err.response)
                this.setState({ error: err.response.data })
            }
        }
    }

    onChangeCredentials = (event, fieldName) => {
        this.setState({ [fieldName]: event.target.value, error: '' });
    }

    render() {
        return (
          <div className="App">
              <input
              type="text"
              placeholder="Full name"
              onChange={(event) => this.onChangeCredentials(event, 'fullName')}
              value={this.state.fullName}
            />
            <input
              type="text"
              placeholder="phone number"
              onChange={(event) => this.onChangeCredentials(event, 'phone')}
              value={this.state.phone}
            />
            <input
              type="text"
              placeholder="password"
              onChange={(event) => this.onChangeCredentials(event, 'password')}
              value={this.state.password}
            />
            <div>
              {this.state.user && (
                <span>{this.state.user.name.first} {this.state.user.name.last}</span>
              )}
            </div>
            <div>{this.state.error}</div>
          </div>
        );
    }
}

export default PersonForm;
