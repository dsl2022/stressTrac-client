import React,{Component} from 'react'
//import EventApiService from '../../services/event-api-service'
//import config from '../../config'

import EventApiService from '../../services/event-api-service';
import './AddEventForm.css'

export default class AddEventForm extends Component{

  state = {error:null,
      }
  
  

  handleSubmit=ev=>{
    ev.preventDefault()
   
    const { stress_event,coping,mood,stress_cause,stress_score,symptoms,work_efficiency } = ev.target
    const newEvent={
      coping: coping.value,            
      mood:mood.value,
      stress_cause:stress_cause.value,
      stress_event:stress_event.value,
      stress_score:stress_score.value,
      symptoms:symptoms.value,
   
      work_efficiency:work_efficiency.value
    }
   
    
    EventApiService.postEvent(newEvent)
    this.props.props.history.push('/')
    

  }
  handleChangeDescription = e => {
    this.setState({ description: e.target.value })
  };

 
  render() {
    const { error } = this.state
    
    return (
      <form
        className='AddEventForm'
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
            required
            id='AddEventForm__coping'>
          </input>
        </div>
       
       <div className='add_event_dropdown_selection'>
       <label htmlFor='AddEventForm__mood'>
            Mood 
          </label >
          <select name="mood" type='text' required id='AddEventForm__mood'>
            <option value="1">Depression or general unhappiness</option>
            <option value="2">Loneliness and isolation</option>
            <option value="3">Anxiety and agitation</option>
            <option value="4">Moodiness, irritability, or anger</option>
            <option value="5">Feeling overwhelmed,loss of control</option>
          </select>
       
       <label htmlFor='AddEventForm__stress_score'>
            Stress Score 
          </label>
          <select name="stress_score" type='text' required id='AddEventForm__stress_score'>
            <option value="1">Low stressful</option>
            <option value="2">Mild stressful</option>
            <option value="3">Somewhat stressful</option>
            <option value="4">Very stressful</option>
            <option value="5">Extremely stressful</option>
          </select>
       
       <label htmlFor='AddEventForm__work_efficiency'>
            Ability to work and focus 
          </label>
          <select name='work_efficiency' type='text' required id='AddEventForm__work_efficiency'>
            <option value="1">Doing well</option>
            <option value="2">Hard to focus</option>
            <option value="3">Completely distracted</option>
            <option value="4">No desire to perform</option>
            <option value="5">Can not work can not focus</option>
          </select>
       </div>
       <div className='symptoms'>
          <label htmlFor='AddEventForm__symptoms'>
            Symptoms 
            </label>
          <textarea
            name='symptoms'
            type='text'
            required
            id='AddEventForm__symptoms'>
          </textarea>
          
        </div>
        
        
          
       
        <button className='add_event_submit' type='submit'>
          submit
        </button>
      </form>
    )
  }
}