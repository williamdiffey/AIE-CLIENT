import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'
import { Button, Input } from '../Utils/Utils'

export default class NewPostForm extends Component {
  static defaultProps = {
    onPostSuccess: () => {},
  }

  state = { error: null }

  handleSubmitArticle = (ev) => {
    ev.preventDefault()
    this.setState({ error: null })
    const { user_name, password } = ev.target

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        user_name.value = ''
        password.value = ''
        this.props.onLoginSuccess()
      })
      .catch((res) => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form className='LoginForm' onSubmit={this.handleSubmitArticle}>
        <div role='alert'>{error && <p className='red'>{error}</p>}</div>
        <div className='title'>
          <label htmlFor='PostForm__title'>User name</label>
          <Input required name='title' id='LoginForm__title'></Input>
        </div>
        <div className='type'>
          <label htmlFor='PostForm__type'>Type</label>
          <select required name='type' id='PostForm__type'>
            <option value='Story'>Story</option>
            <option value='Grammar'>Grammar</option>
            <option value='Vocabulary'>Vocabulary</option>
            <option value='Chat'>Chat</option>
          </select>
        </div>
        <div className='content'>
          <label htmlFor='PostForm__content'>Content</label>
          <textarea required name='content' id='PostForm__password'></textarea>
        </div>
        <Button type='submit'>Submit New Post</Button>
      </form>
    )
  }
}
