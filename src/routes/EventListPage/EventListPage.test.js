import React from 'react';
import ReactDOM from 'react-dom';
import EventListPage from './EventListPage';



jest.mock('react-plotly.js', () => () => <div/>)
jest.mock('react-particles-js', () => () => <div/>)
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EventListPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});