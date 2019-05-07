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
import PublicOnlyRoute from '../Util/PublicOnlyRoute'
import PrivateRoute from '../Util/PrivateRoute'
import './App.css'



class App extends Component {
  state = {
    hasError:false,
    
  }



  render(){
    
    return(
    
      
      <div className='App'>
       
       <header className='App__header'>
          <Header/>
        </header>
      <main className='App__main'>
      
        <Switch>
        <PrivateRoute
              exact
              path={'/'}
              component={EventListPage}
            />
          <PublicOnlyRoute 
            path={'/register'}
            component={RegistrationPage}
          />
          <PublicOnlyRoute 
            path={'/login'}
            component={LoginPage}
          />
          <Route 
            path={'/home'}
            component={LandingPage}
          />
          <PrivateRoute 
            path={'/add-event'}
            component={AddEventPage}
          />
          <PrivateRoute 
            path={'/account'}
            component={AccountPage}
          />
          <PrivateRoute 
            path={'/events/:eventId'}
            component={EventPage}
          />
          <PrivateRoute
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
