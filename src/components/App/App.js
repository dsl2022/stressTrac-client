import React,{Component} from 'react';
//import './App.css';
import { Route, Switch } from 'react-router-dom'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
//import TokenService from '../../services/token-service'
import EventListPage from '../../routes/EventListPage/EventListPage'
import EventPage from '../../routes/EventPage/EventPage'
import EditEventPage from '../../routes/EditEventPage/EditEventPage'
import AddEventPage from '../../routes/AddEventPage/AddEventPage'
import LandingPage from '../../routes/LandingPage/LandingPage'
import Header from '../Header/Header'
import Footer from '../../components/Footer/Footer'
import AccountPage from '../../routes/AccountPage/AccountPage'
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
          <Route 
            path={'/home'}
            component={LandingPage}
          />
          <Route 
            path={'/add-event'}
            component={AddEventPage}
          />
          <Route 
            path={'/account'}
            component={AccountPage}
          />
          <Route 
            path={'/events/:eventId'}
            component={EventPage}
          />
          <Route
            path={'/edit-event/:eventId'}
            component={EditEventPage}/>

        </Switch>
      </main>
      
      <footer>
        <Footer />
      </footer>
      </div>
    )
  }

}

export default App;
