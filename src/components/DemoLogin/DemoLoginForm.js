import React, { Component } from 'react'
//import { button, input } from '../Utils/Utils'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
//import UserIdContext from '../../context/UserIdContext'
import LoginLogoutContext from '../../context/LoginLogoutContext'
import './DemoLoginForm.css'
export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }
  static contextType = LoginLogoutContext;

  state = { error: null }

  handleSubmitJwtAuth = () => {
      //  ev.preventDefault()
       this.setState({ error: null })
      //  const { user_name, password } = ev.target
    
       AuthApiService.postLogin({
         user_name: 'demo',
         password: 'demo',
       })
         .then(res => {
           
           
          //  user_name.value = ''
          //  password.value = ''
           TokenService.saveAuthToken(res.authToken)
           this.props.onLoginSuccess()                               
         })
         .then(()=>this.context.setHideLogutFalse())
         .catch(res => {
           this.setState({ error: res.error })
         })
     }

  render() {
    
    return (
      <div className='LoginInForm'>
      
        <button onClick = {()=>this.handleSubmitJwtAuth()} className='demo_login' type='button'>
          Explore Demo
        </button>
      
      </div>
    )
  }
}
