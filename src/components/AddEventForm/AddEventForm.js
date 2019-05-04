import React,{Component} from 'react'
//import EventApiService from '../../services/event-api-service'
//import config from '../../config'
import UserIdContext from '../../context/UserIdContext'
import EventApiService from '../../services/event-api-service';
export default class AddEventForm extends Component{

  state = {error:null,
      }
  
  

  handleSubmit=ev=>{
    ev.preventDefault()
    const userId = window.localStorage.getItem('userId')    
    const { stress_event,coping,mood,stress_cause,stress_score,symptoms,work_efficiency } = ev.target
    const newEvent={
      coping: coping.value,            
      mood:mood.value,
      stress_cause:stress_cause.value,
      stress_event:stress_event.value,
      stress_score:stress_score.value,
      symptoms:symptoms.value,
      // user_id:userId,
      work_efficiency:work_efficiency.value
    }
    // const newEvent={
    //     stress_event: "llulu",
    //     mood: 4,
    //     work_efficiency: 5,
    //     stress_cause: "work related",
    //     stress_score:4,
    //     symptoms: "headache",
    //     coping: "listen to music"
    // }
    console.log(newEvent,'test stress_event')
    EventApiService.postEvent(newEvent)

  }

  static contextType = UserIdContext;
  render() {
    const { error } = this.state
    console.log(window.localStorage.getItem('userId'),'test userid')
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