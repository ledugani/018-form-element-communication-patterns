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
      <div>
        <label htmlFor="user[full_name]">Full Name</label>
        <input
          type="text"
          name="user[full_name]"
          value={fullName}
          // arrow function ansures it only fires when the field is updated
          onChange={(e) => this.handleChange(e, 'fullName')}
        />
      </div>

      <div>
        <label htmlFor="user[email]">Email</label>
        <input
          type="text"
          name="user[email]"
          value={email}
          onChange={(e) => this.handleChange(e, 'email')}
        />
      </div>

      <div>
        <label htmlFor="user[password]">Password</label>
        <input
          type="password"
          name="user[password]"
          value={password}
          onChange={(e) => this.handleChange(e, 'password')}
        />
      </div>

      <div>
        <button>Sign Up</button>
      </div>
    </form>
  }
}

export default App;
