import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm//LoginForm'
import './LoginPage.css'
//import { Section } from '../../components/Utils/Utils'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <section className='LoginPage'>
        
        <div className='LoginFormContainer'>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
        </div>
      </section>
    )
  }
}
