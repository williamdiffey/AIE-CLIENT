import React, { Component } from 'react'
import NewPostForm from '../../components/NewPostForm/NewPostForm'
import { Section } from '../../components/Utils/Utils'
import NewRegcodeForm from '../../components/NewCodeForm/NewCodeForm'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'

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
    const adminToken = TokenService.readJwtToken(
      localStorage.getItem('aie-client-auth-token'),
    )

    if (adminToken.admin) {
      return (
        <Section className='AdminPage'>
          <Link to='/help'>Need Help?</Link>
          <h2>Make a new post</h2>
          <NewPostForm onPostSuccess={this.handlePostSuccess} />
          <h2>Add a new student registration code</h2>
          <NewRegcodeForm />
        </Section>
      )
    } else
      return (
        <Section className='AdminPage'>
          <h1>Unauthorised</h1>
          <p>
            You must be signed in as a user with admin privilages to see this
            page
          </p>

          <Link to='/'>Go back</Link>
        </Section>
      )
  }
}
