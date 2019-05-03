import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
// import './Header.css'
//import { Redirect } from 'react-router-dom'

export default class Header extends Component {
  handleLogoutClick=()=>{
    TokenService.clearAuthToken();
    //debugger

    //console.log(this.props)
  }
  renderLogoutAndAccountLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/login'>
          Logout
        </Link>
        <Link
          onClick={()=> this.handleLogoutClick()}
          to='/events'>
          Events
        </Link>
        <Link
          onClick={()=> this.handleLogoutClick()}
          to='/add-event'>
          Add a Event        
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
    // TODO: login and logout doesn't refresh immediately. 
    console.log(window.location.pathname,'test location')
    // if(window.location.pathname==='/login'){
    //   const hideLogout=true
    // }
    return <>
      <nav className='Header'>
       
       
        {TokenService.hasAuthToken()
          ? this.renderLogoutAndAccountLink()
          : this.renderLoginLink()}
          
      </nav>

      
    </>
  }
}