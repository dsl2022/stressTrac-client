import React, { Component } from 'react'
import DemoLoginForm from '../../components/DemoLogin/DemoLoginForm'
import './DemoPage.css'


export default class DemoPage extends Component {
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
        <h2>Sign in</h2>
        <div className='LoginFormContainer'>
        <DemoLoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
        </div>
      </section>
    )
  }
}
