import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils'
import AuthApiService from '../../services/auth-api-service'

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  }

  state = { error: null }

  handleSubmit = (ev) => {
    ev.preventDefault()
    const { regcode, user_name, password, confirm_password } = ev.target
    console.log(password.value)
    console.log(confirm_password.value)

    if (password.value !== confirm_password.value) {
      this.setState({ error: 'passwords do not match' })
      password.value = ''
      confirm_password.value = ''
    } else {
      this.setState({ error: null })
      AuthApiService.postUser({
        user_name: user_name.value,
        password: password.value,
        regcode: regcode.value,
        admin: false,
      })
        .then((user) => {
          regcode.value = ''
          user_name.value = ''
          password.value = ''
          confirm_password.value = ''
          this.props.onRegistrationSuccess()
        })
        .catch((res) => {
          this.setState({ error: res.error })
        })
    }
  }

  render() {
    const { error } = this.state
    return (
      <form className='RegistrationForm' onSubmit={this.handleSubmit}>
        <div role='alert'>{error && <p className='red'>{error}</p>}</div>
        <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>
            User name <Required />
          </label>
          <Input
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'
          ></Input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'
          ></Input>
        </div>
        <div className='confirm_password'>
          <label htmlFor='RegistrationForm__confirm_password'>
            Confirm Password <Required />
          </label>
          <Input
            name='confirm_password'
            type='password'
            required
            id='RegistrationForm__confirm_password'
          ></Input>
        </div>
        <div className='regcode'>
          <label htmlFor='RegistrationForm__regcode'>
            Registration Code <Required />
          </label>
          <Input
            name='regcode'
            type='text'
            required
            id='RegistrationForm__regcode'
          ></Input>
        </div>

        <Button type='submit'>Register</Button>
      </form>
    )
  }
}
