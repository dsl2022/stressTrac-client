import React,{Component} from 'react'
import EventContext from '../../context/EventContext'
import EventApiService from '../../services/event-api-service';
import './EditEventForm.css'

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

    
    return (
      <form
        className='EditEventForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='stress_event'>
          <label htmlFor='EditEventForm__stress_event'>
            Event 
          </label>
          <input
            name='stress_event'
            type='text'
            defaultValue={event.stress_event}
            required
            id='EditEventForm__stress_event'>
          </input>
        </div>
        <div className='stress_cause'>
          <label htmlFor='EditEventForm__stress_cause'>
            Stress causes 
          </label>
          <input
            name='stress_cause'
            type='text'
            defaultValue={event.stress_cause}
            required
            id='EditEventForm__stress_cause'>
          </input>
        </div>
        <div className='coping'>
          <label htmlFor='EditEventForm__coping'>
            coping
          </label>
          <input
            name='coping'
            type='text'
            defaultValue={event.coping}
            required
            id='EditEventForm__coping'>
          </input>
        </div>
       
       <div className='edit_event_dropdown_selection'>
       <label htmlFor='EditEventForm__mood'>
            Mood 
          </label >
          <select name="mood" type='text' required id='EditEventForm__mood'>
          <option value="1">happy and relief</option>
            <option value="2">minor anxiety</option>
            <option value="3">Anxiety and agitation</option>
            <option value="4">Moodiness, irritability, or anger</option>
            <option value="5">Feeling overwhelmed,loss of control</option>
          </select>
       
       <label htmlFor='EditEventForm__stress_score'>
            Stress Score 
          </label>
          <select name="stress_score" type='text' required id='EditEventForm__stress_score'>
            <option value="1">Low stressful</option>
            <option value="2">Mild stressful</option>
            <option value="3">Somewhat stressful</option>
            <option value="4">Very stressful</option>
            <option value="5">Extremely stressful</option>
          </select>
      
       <label htmlFor='EditEventForm__work_efficiency'>
            Ability to work and focus 
          </label>
          <select name='work_efficiency' type='text' required id='EditEventForm__work_efficiency'>
          <option value="1">Doing well</option>
            <option value="2">Hard to focus</option>
            <option value="3">Completely distracted</option>
            <option value="4">No desire to perform</option>
            <option value="5">Can not work can not focus</option>
          </select>
       </div>
       <div className='symptoms'>
          <label htmlFor='EditEventForm__symptoms'>
            Symptoms 
            </label>
          <textarea
            name='symptoms'
            type='text'
            value={this.state.symptoms}
             onChange={this.handleChangeSymptoms}            
            required
            id='EditEventForm__symptoms'>
          </textarea>
          
        </div>
        
        
          
       
        <button className='edit_event_submit' type='submit'>
          submit
        </button>
      </form>
    )
  }
}