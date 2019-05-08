import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fab)
jest.mock('react-plotly.js', () => () => <div/>)
jest.mock('react-particles-js', () => () => <div/>)



it('render without crashing',()=>{
  const div = document.createElement('div')
  ReactDOM.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>,div)
  ReactDOM.unmountComponentAtNode(div)
})