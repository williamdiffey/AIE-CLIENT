import React, { Component } from 'react'
import NewPostForm from '../../components/NewPostForm/NewPostForm'
import { Section } from '../../components/Utils/Utils'
import NewRegcodeForm from '../../components/NewCodeForm/NewCodeForm'
import { Link } from 'react-router-dom'

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
        <Link to='/help'>Need Help?</Link>
        <h2>Make a new post</h2>
        <NewPostForm onPostSuccess={this.handlePostSuccess} />
        <h2>Add a new student registration code</h2>
        <NewRegcodeForm />
      </Section>
    )
  }
}
