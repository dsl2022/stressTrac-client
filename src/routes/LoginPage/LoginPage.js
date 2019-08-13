import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm//LoginForm'
import './LoginPage.css'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    console.log(this.props,'test props')
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <section className='LoginPage'>
        <h2>Sign in</h2>
        <div className='LoginFormContainer'>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
        </div>
      </section>
    )
  }
}
