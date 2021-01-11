import React from 'react';

import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

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
               <FormInput
                  name='email'
                  value={this.state.email}
                  handleChange={this.handleChange}
                  type='email'
                  label='Email'
                  required
               />
               <FormInput
                  name='password'
                  value={this.state.password}
                  handleChange={this.handleChange}
                  type='password'
                  label='Password'
                  required
               />
               <CustomButton type='submit'>Sign in</CustomButton>
            </form>
         </div>
      )
   }
}

export default SignIn;