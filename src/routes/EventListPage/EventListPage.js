import React,{Component} from 'react'
import EventApiService from '../../services/event-api-service'
import EventListContext from '../../context/EventListContext'
import EventListItem from '../../components/EventListItem/EventListItem'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { format as formatDate } from 'date-fns'
import ParticleComponent from "../../ParticleComponent";
import './EventListPage.css'
export default class EventListPage extends Component{
  
  static contextType = EventListContext;
  state={
    showAll:true,
    startDate: '',
    searchTerm:''
  }

  

 


  handleChange=(date)=> {
    this.setState({
      startDate: date
    });
  }

  componentDidMount(){
    this.context.clearError()
    EventApiService.getEvents()
    
//      .then(data=>{console.log(data,'test data')}) chris told me this kills it, it added delay. 
      .then(this.context.setEventList)            
      .catch(this.context.setError)
  }

  renderEvents(){
    
    let { eventList = [] } = this.context
    //console.log(this.state,'test state eventlist')
    // if searchTerm is present, then filter events by it. 
    if(!this.state.startDate && !this.state.searchTerm)
      eventList = eventList.map(event=>event)
    if(this.state.searchTerm)
      eventList=eventList.filter(event=>event.stress_event.toLowerCase().includes(this.state.searchTerm))
    
    if(this.state.startDate)
    eventList=eventList.filter(event=>this.NiceDate({date:event.date_recorded}).includes(this.NiceDate({date:this.state.startDate}).slice(0,10)))
    return eventList.map(event=>
      <EventListItem
        key={event.id}
        event={event}
      />
      )
  }
  NiceDate({ date, format='Do MMMM YYYY h:mm a' }) {
    return formatDate(date, format)
  }

  searchByTitle=e=>{
    const searchTerm = e.target.value.toLowerCase()
    this.setState({searchTerm:searchTerm})
  }

  showAllEvent=()=>{
    this.setState({
      startDate:'',
      searchTerm:''
    })
  }
  render() {
    const { error } = this.context    
    return (
      <div className='EventListPage'>
      <div className='search-bar'>
        <div className='search_by_title'>
          <label>Search By Title: </label>
            <input className='search_by_title_input' type='text'
            onChange={this.searchByTitle}/> 
        </div>
        
        <div className='search_by_date'>
          <label>
        Search By Date:
          
          </label>
          <span className='date-picker'>
          <DatePicker 
            
            selected={this.state.startDate}
            onChange={this.handleChange}
          
          />
          </span>
         
          </div>
          
        <div className='show-all-event'>
        <button className='show-all-event-button'
             onClick={this.showAllEvent}
             type='button'>Show All Events</button>
          
          </div>
        </div>
        
      <section className='EventListPageSection'>
      <div className='EventItemsContainer'>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderEvents()}
      </div>
      </section>
      <ParticleComponent />
      </div>
    )
  }
}

