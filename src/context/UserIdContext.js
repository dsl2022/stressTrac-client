import React,{Component} from 'react'

const UserIdContext = React.createContext({
  userId:'',  
  setEventList: () => {},
})

export default UserIdContext

export class UserIdProvider extends Component{
  state ={
    userId:''
  }

  setUserId = userId =>{
    this.setState({userId})
  }
  render(){
    const value={
      userId:this.state.userId
    }
    return(
      <UserIdContext.Provider value={value}>
        {this.props.children}
      </UserIdContext.Provider>
    )
  }
}