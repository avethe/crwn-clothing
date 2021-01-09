import React from 'react';

import './sign-in.styles.scss';

class SignIn extends React.Component {
   constructor() {
      super()

      this.state = {
         email: '',
         password: '',
      }
   }

   handleSubmit = event => {
      event.preventDefault();
      this.setState({ email: '', password: '' })
      console.log(this.state)
   }
   handleChange = event => {
      const { value, name } = event.target;
      console.log(event);
      this.setState({ [name]: value })
   }

   render() {
      return (
         <div className="sign-in">
            <h1 className="sign-in-title">I already have an account</h1>
            <span className="sign-in-text">Sign in with an email and password</span>

            <form onSubmit={this.handleSubmit}>
               <input
                  name='email'
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
               />
               <label>Email</label>
               <input
                  name='password'
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
               />
               <label>Password</label>
               <input type="submit" value='submit' />
            </form>
         </div>
      )
   }
}

export default SignIn;