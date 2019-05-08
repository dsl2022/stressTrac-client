import React from 'react';
import ReactDOM from 'react-dom';
import AddEventPage from './AddEventPage';



jest.mock('react-plotly.js', () => () => <div/>)
jest.mock('react-particles-js', () => () => <div/>)
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddEventPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});