import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
// import './Header.css'

export default class Header extends Component {
  handleLogoutClick=()=>{
    TokenService.clearAuthToken();
    //debugger

    //console.log(this.props)
  }
  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          onClick={()=> this.handleLogoutClick()}
          to='/login'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    console.log(TokenService.hasAuthToken(),'test has token')
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/login'>
          Log in
        </Link>
        <Link
          to='/register'>
          Register
        </Link>
      </div>
    )
  }

  render() {
    
    return <>
      <nav className='Header'>
       
       
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>

      
    </>
  }
}