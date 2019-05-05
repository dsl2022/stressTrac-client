import React,{Component} from 'react'

const LoginLogoutContext = React.createContext({
  hideLogout:true,
  setHideLogutTrue:()=>{},
  setHideLogutFalse:()=>{}
})

export default LoginLogoutContext


export class LoginLogoutContextProvider extends Component{
  state={
    hideLogout:''
  };

  setHideLogutTrue=()=>{
    this.setState({hideLogout:true})
  }

  setHideLogutFalse=()=>{
    this.setState({hideLogout:true})
  }

  render(){
    const value={
      setHideLogutTrue:this.setHideLogutTrue,
      setHideLogutFalse:this.setHideLogutFalse,
      hideLogout:this.state.hideLogout
    }
    return(
      <LoginLogoutContext.Provider value={value}>
         {this.props.children}
      </LoginLogoutContext.Provider>
    )
  }
}