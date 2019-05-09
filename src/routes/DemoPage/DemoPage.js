import React, { Component } from 'react'
import DemoLoginForm from '../../components/DemoLogin/DemoLoginForm'
import './DemoPage.css'
import ParticleComponent from "../../ParticleComponent";

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
      <section className='DemoLoginPage'>
      <div className='demo_container'>
      <div className='demo_about'>
        <h2>Welcome!</h2>
        <p>
        StresTrac is a tool designed to help you understand your stress,through this
        demo you will get to experience the core functionality of StresTrac, we hope
        you enjoy it.

        </p>
        </div>
        <div className='LoginFormContainer'>
        <DemoLoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
        </div>
        <ParticleComponent />
        </div>
      </section>
    )
  }
}
