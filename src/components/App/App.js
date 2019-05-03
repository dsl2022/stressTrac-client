import React,{Component} from 'react';
//import './App.css';
import { Route, Switch } from 'react-router-dom'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
//import TokenService from '../../services/token-service'
import EventListPage from '../../routes/EventListPage/EventListPage'
import Header from '../Header/Header'
class App extends Component {
  state = {
    hasError:false,
  }

  render(){
    
    return(
      <div className='App'>
      <h1>StresTrac</h1>
       <header className='App__header'>
          <Header/>
        </header>
      <main className='App__main'>
        <Switch>
        <Route
              exact
              path={'/'}
              component={EventListPage}
            />
          <Route 
            path={'/register'}
            component={RegistrationPage}
          />
          <Route 
            path={'/login'}
            component={LoginPage}
          />
        </Switch>
      </main>
      
      <footer>TODO..</footer>
      </div>
    )
  }

}

export default App;
