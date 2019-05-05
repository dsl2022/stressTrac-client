import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import LoginLogoutContext from '../../context/LoginLogoutContext'

// import './Header.css'
//import { Redirect } from 'react-router-dom'

export default class Header extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     hasAuthToken:TokenService.hasAuthToken()
  //   }
  // }
  state = {
       hasAuthToken:TokenService.hasAuthToken()
  }
  static contextType = LoginLogoutContext


  handleLogoutClick=()=>{
    TokenService.clearAuthToken();
    this.context.setHideLogoutTrue()
    //this.setState({hideLogout:this.context.hideLogout})
    //debugger

    //console.log(this.props)
  }
  renderLogoutAndAccountLink() {
    console.log(this.context,'test context in header')
    return (
      <div className='Header__logged-in'>
        <Link
          
          to='/account'>
          Accout
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
          Add a Event        
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    console.log(TokenService.hasAuthToken(),'test has token')
    console.log(this.context.setHideLogoutTrue)
    return (
      <div className='Header__not-logged-in'>
      
        <Link
          to='/login'>
          Sign in
        </Link>
        <Link
          to='/register'>
          Sign Up
        </Link>
        <Link
          to='/home'>
          Home
        </Link>
      </div>
    )
  }

  render() {
    // TODO: login and logout doesn't refresh immediately. 
    //console.log(window.location.pathname,'test location')
    // if(window.location.pathname==='/login'){
    //   const hideLogout=true
    // }
    let renderHeader
    
     if(TokenService.hasAuthToken())
     renderHeader = this.renderLogoutAndAccountLink()

     if(!TokenService.hasAuthToken())
     renderHeader = this.renderLoginLink()

    // {TokenService.hasAuthToken()
    //   ? this.renderLogoutAndAccountLink()
    //   :this.renderLoginLink()
    //   }
    return <>
      <nav className='Header'>
       
       {renderHeader}
        
          
      </nav>

      
    </>
  }
}