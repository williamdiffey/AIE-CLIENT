import React, { Component } from 'react'
import NewPostForm from '../../components/NewPostForm/NewPostForm'
import { Section } from '../../components/Utils/Utils'

export default class Admin extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handlePostSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <Section className='LoginPage'>
        <h2>Make a new post</h2>
        <NewPostForm onPostSuccess={this.handlePostSuccess} />
      </Section>
    )
  }
}
