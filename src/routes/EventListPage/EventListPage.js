import React,{Component} from 'react'
import EventApiService from '../../services/event-api-service'
import EventListContext from '../../context/EventListContext'
import EventListItem from '../../components/EventListItem/EventListItem'
export default class EventListPage extends Component{

  static contextType = EventListContext;

  componentDidMount(){
    this.context.clearError()
    EventApiService.getEvents()
      .then(data=>{console.log(data,'test data')})
      .then(this.context.setEventList)
      .then(()=>{console.log(this.context,'test context after')})
      .catch(this.context.setError)
  }

  renderEvents(){
    const { eventList = [] } = this.context
    console.log(this.context,'test eventList')
    return eventList.map(event=>
      <EventListItem
        key={event.id}
        event={event}
      />
      )
  }

  render() {
    const { error } = this.context
    console.log(this.context,'test inside render')
    return (
      <section className='EventListPage'>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderEvents()}
      </section>
    )
  }
}