import React from 'react';
import ReactDOM from 'react-dom';
import EventPage from './EventPage';
import {BrowserRouter} from 'react-router-dom'
import { EventListProvider } from '../../context/EventListContext'
import {EventProvider} from '../../context/EventContext'
import {LoginLogoutContextProvider} from '../../context/LoginLogoutContext'

jest.mock('react-plotly.js', () => () => <div/>)
jest.mock('react-particles-js', () => () => <div/>)
it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <BrowserRouter>
    <EventListProvider>
      <EventProvider>
        <LoginLogoutContextProvider>
          <EventPage />
        </LoginLogoutContextProvider>
      </EventProvider>
    </EventListProvider>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});