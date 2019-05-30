import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import LoginLogoutContext from '../../context/LoginLogoutContext'
import './Header.css'


export default class Header extends Component {
  
  state = {
       hideLogout:!TokenService.hasAuthToken()
  }
  static contextType = LoginLogoutContext


  handleLogoutClick=()=>{
    TokenService.clearAuthToken();
    this.context.setHideLogoutTrue()
    this.setState(TokenService.hasAuthToken)

  }
  renderLogoutAndAccountLink() {   
    return (
      <div className='Header__logged-in'>
        <Link
          
          to='/account'>
          Account
        </Link>
        <Link
          onClick={this.handleLogoutClick}
          to='/login'>
          Logout
        </Link>
        <Link
          
          to='/'>
          Events
        </Link>
        <Link
          
          to='/add-event'>
          Add an event        
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>      
        <Link
          to='/home'>
          Home
        </Link>
        
        <Link
          to='/demo'>
          Demo
        </Link>
      
        <Link
          to='/login'>
          Sign in
        </Link>
     
        <Link
          to='/register'>
          Sign Up
        </Link>
    
      </div>
    )
  }

  render() {
    let renderHeader
    
     if(TokenService.hasAuthToken())
     renderHeader = this.renderLogoutAndAccountLink()

     if(!TokenService.hasAuthToken())
     renderHeader = this.renderLoginLink()

    return <>
      <nav className='Header'>
      <Link to='/home'>
         <h1 className='logo'>StresTrac</h1>
      </Link>
          {renderHeader}    
      </nav>
    </>
  }
}