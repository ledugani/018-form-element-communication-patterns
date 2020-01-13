import React, { Component } from 'react';
import FormField from './form-field';

class App extends Component {
  state = {
    fullName: '',
    email: '',
    password: '',
  }

  // the arrow function signifies that the THIS keyword is referring to the App class
  handleChange = (e, attr) => {
    this.setState({
      [attr]: e.target.value,
    })
  }

  render() {
    const { fullName, email, password } = this.state;

    return <form>
      <h1>Registration form</h1>

      <FormField
        attr='fullName'
        type='text'
        label='Full name'
        value={fullName}
        handleChange={this.handleChange}
      />

      <FormField
        attr='email'
        type='text'
        label='Email'
        value={email}
        handleChange={this.handleChange}
      />

      <FormField
        attr='password'
        type='password'
        label='Password'
        value={password}
        handleChange={this.handleChange}
      />

      <div>
        <button>Sign Up</button>
      </div>
    </form>
  }
}

export default App;
