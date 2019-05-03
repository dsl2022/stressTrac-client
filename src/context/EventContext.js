import React, { Component } from 'react'

export const nullEvent = {
  author: {},
  tags: [],
}

const EventContext = React.createContext({
  event: nullEvent,
  error: null,
  setError: () => {},
  clearError: () => {},
  setArticle: () => {},
  clearArticle: () => {},
})

export default EventContext

export class ArticleProvider extends Component {
  state = {
    event: nullEvent,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setEvent = event => {
    this.setState({ event })
  }

  

  clearEvent = () => {
    this.setEvent(nullEvent)    
  }

  render() {
    const value = {
      event: this.state.event,      
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setEvent: this.setEvent,      
      clearEvent: this.clearEvent,      
    }
    return (
      <EventContext.Provider value={value}>
        {this.props.children}
      </EventContext.Provider>
    )
  }
}