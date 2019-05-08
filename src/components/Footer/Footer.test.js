import React from 'react'
import ReactDOM from 'react-dom'
import Footer from '../Footer/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fab)
it('render without crashing',()=>{
  const div = document.createElement('div')
  ReactDOM.render(
  
  <Footer/>
  ,div)
  ReactDOM.unmountComponentAtNode(div)
})