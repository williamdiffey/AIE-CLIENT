import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import { Link } from 'react-router-dom'

export default class Help extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  render() {
    return (
      <Section className='LoginPage'>
        <h2>Help For Admin & Teachers</h2>
        <h3>Adding a new Article</h3>
        <p>
          Simply complete the fields and press submit to create a new article
          for students to respond to. Articles can be edited and deleted if you
          are logged in with admin credentials.
        </p>

        <h2>Adding a new registration code</h2>
        <p>
          Each new student registration will require a code - this protects
          unwanted members of the public joining. Once a code has been used by a
          student it is consumed and cannot be reused so that disposed of codes
          cannot be found and used.
        </p>
        <p>
          Codes can be of any length and contain any conbination of letters,
          numbers or symbols. If you are completing registration in class you
          may wish to keep them simple however if registration is done offsite a
          more complex code is strongly recommended.
        </p>

        <p>
          For security considerations, once a code has been entered it will not
          be shown again, so please made a note of any codes you enter.
        </p>

        <Link to='/Admin'>Back to Admin Page</Link>
      </Section>
    )
  }
}
