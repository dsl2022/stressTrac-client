import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './components/App/App';
import {BrowserRouter} from 'react-router-dom'
import { EventListProvider } from './context/EventListContext'
import {EventProvider} from './context/EventContext'
import {LoginLogoutContextProvider} from './context/LoginLogoutContext'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


library.add(fab,faCoffee)

ReactDOM.render(
<BrowserRouter>
  <EventListProvider>
    <EventProvider>
      <LoginLogoutContextProvider>
        <App />
      </LoginLogoutContextProvider>
    </EventProvider>
  </EventListProvider>
</BrowserRouter>, document.getElementById('root'));


