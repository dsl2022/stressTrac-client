import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {BrowserRouter} from 'react-router-dom'
import { EventListProvider } from './context/EventListContext'
import {EventProvider} from './context/EventContext'
import {LoginLogoutContextProvider} from './context/LoginLogoutContext'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fab)
jest.mock('react-plotly.js', () => () => <div/>)


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter>
    <EventListProvider>
      <EventProvider>
        <LoginLogoutContextProvider>
          <App />
        </LoginLogoutContextProvider>
      </EventProvider>
    </EventListProvider>
  </BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});
