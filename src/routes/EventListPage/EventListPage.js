import React,{Component} from 'react'
import EventApiService from '../../services/event-api-service'
import EventListContext from '../../context/EventListContext'
import EventListItem from '../../components/EventListItem/EventListItem'
export default class EventListPage extends Component{
  
  static contextType = EventListContext;
  
  state={}

  componentDidMount(){
    this.context.clearError()
    EventApiService.getEvents()
    
//      .then(data=>{console.log(data,'test data')}) chris told me this kills it, it added delay. 
      .then(this.context.setEventList)            
      .catch(this.context.setError)
  }

  renderEvents(){
    
    let { eventList = [] } = this.context
    console.log(this.state,'test state eventlist')
    // if searchTerm is present, then filter events by it. 
    if(this.state.searchTerm)
      eventList=eventList.filter(event=>event.stress_event.includes(this.state.searchTerm))
    
    return eventList.map(event=>
      <EventListItem
        key={event.id}
        event={event}
      />
      )
  }

  searchByTitle=e=>{
    const searchTerm = e.target.value
    this.setState({searchTerm:searchTerm})
  }

  render() {
    const { error } = this.context
    console.log(this.state,'test inside render')
    return (
      <div>
        <div>
          <label>Search By Title
            <input type='text'
            onChange={this.searchByTitle}/>
          </label>
        </div>
      <section className='EventListPage'>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderEvents()}
      </section>
      </div>
    )
  }
}