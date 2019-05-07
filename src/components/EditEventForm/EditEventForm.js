import React,{Component} from 'react'
import EventContext from '../../context/EventContext'
import EventApiService from '../../services/event-api-service';


export default class EditEventForm extends Component{

  state = {
    error:null,    
    symptoms:this.context.event.symptoms
  }

  static contextType = EventContext
  static defaultProps = {
    match:{params:{}}
  }
  handleChangeSymptoms = e => {
    this.setState({ symptoms: e.target.value })
  }

  handleSubmit=ev=>{
    ev.preventDefault()
    const { stress_event,coping,mood,stress_cause,stress_score,work_efficiency } = ev.target
    
    const eventToUpdate={
      coping: coping.value,            
      mood:mood.value,
      stress_cause:stress_cause.value,
      stress_event:stress_event.value,
      stress_score:stress_score.value,
      symptoms:this.state.symptoms,
      work_efficiency:work_efficiency.value,
      date_recorded:new Date().toISOString()
    }
    console.log(this.props,'test props')
    EventApiService.updateEvent(eventToUpdate,this.context.event.id)
    .then(()=>{
      this.props.props.history.push('/')
    })
  }



  render() {
    const { error } = this.state
    const event = this.context.event

    console.log(this.state.symptoms,'test symptoms')
    return (
      <form
        className='EditEventForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='stress_event'>
          <label htmlFor='AddEventForm__stress_event'>
            Event 
          </label>
          <input
            name='stress_event'
            type='text'
            defaultValue={event.stress_event}
            required
            id='AddEventForm__stress_event'>
          </input>
        </div>
        <div className='stress_cause'>
          <label htmlFor='AddEventForm__stress_cause'>
            Stress causes 
          </label>
          <input
            name='stress_cause'
            type='text'
            defaultValue={event.stress_cause}
            required
            id='AddEventForm__stress_cause'>
          </input>
        </div>
        <div className='coping'>
          <label htmlFor='AddEventForm__coping'>
            coping
          </label>
          <input
            name='coping'
            type='text'
            defaultValue={event.coping}
            required
            id='AddEventForm__coping'>
          </input>
        </div>
       
       <div>
       <label htmlFor='AddEventForm__mood'>
            Mood 
          </label >
          <select name="mood" type='text' required id='AddEventForm__mood'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
       </div>
       <div>
       <label htmlFor='AddEventForm__stress_score'>
            Stress Score 
          </label>
          <select name="stress_score" type='text' required id='AddEventForm__stress_score'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
       </div>
       <div>
       <label htmlFor='AddEventForm__work_efficiency'>
            Ability to work and focus 
          </label>
          <select name='work_efficiency' type='text' required id='AddEventForm__work_efficiency'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
       </div>
       <div className='symptoms'>
          <label htmlFor='AddEventForm__symptoms'>
            Symptoms 
            </label>
          <textarea
            name='symptoms'
            type='text'
            value={this.state.symptoms}
             onChange={this.handleChangeSymptoms}            
            required
            id='AddEventForm__symptoms'>
          </textarea>
          
        </div>
        
        
          
       
        <button type='submit'>
          submit
        </button>
      </form>
    )
  }
}