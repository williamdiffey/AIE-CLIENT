import React, { Component } from 'react'
import { Button, Input } from '../Utils/Utils'
import RegcodeApiService from '../../services/regcode-api-service'
export default class NewRegcodeForm extends Component {
  static defaultProps = {
    onPostSuccess: () => {},
  }

  state = { error: null }

  handleSubmitRegcode = (ev) => {
    ev.preventDefault()
    this.setState({ error: null })
    const { regcode } = ev.target

    RegcodeApiService.postRegcode({
      regcode: regcode.value,
    })
      .then((res) => {
        regcode.value = ''
      })
      .catch((res) => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form className='NewRegcodeForm' onSubmit={this.handleSubmitRegcode}>
        <div role='alert'>{error && <p className='red'>{error}</p>}</div>

        <div className='title'>
          <label htmlFor='NewRegcodeForm__title'>Enter Registration Code</label>
          <Input required name='regcode' id='NewRegcodeForm__regcode'></Input>
        </div>

        <Button type='submit'>Make New Code</Button>
      </form>
    )
  }
}
