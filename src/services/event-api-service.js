import config from '../config'
import TokenService from '../services/token-service'

const EventApiService = {
  getEvents(){
    return fetch(`${config.API_ENDPOINT}/events`,{
      headers:{
        'authorization':`bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(res=>
        (!res.ok)
          ?res.json().then(e=>Promise.reject(e))
          :res.json()
      )    
    },
  
  getEvent(eventId){
    return fetch(`${config.API_ENDPOINT}/events/${eventId}`,{
      headers:{
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res=>
        (!res.ok)
          ?res.json().then(e=>Promise.reject(e))
          :res.json()
      )
    },
  postEvent(content){
    return fetch(`${config.API_ENDPOINT}/events`,{
      method:'POST',
      headers:{
        'content-type':'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body:JSON.stringify(     
        content
      ),
    })
      .then(res=>
        (!res.ok)
          ?res.json().then(e=>Promise.reject(e))
          :res.json())
  },
  updateEvent(content,eventId){
    return fetch(`${config.API_ENDPOINT}/events/${eventId}`,{
      method:'PATCH',
      headers:{
        'content-type':'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body:JSON.stringify(
      content
    )
  })
    // .then(res=>
    //   (!res.ok)
    //   ?res.json().then(e=>Promise.reject(e))
    //   :res.json())
  },
  deleteEvent(eventId){
    return fetch(`${config.API_ENDPOINT}/events/${eventId}`,{
      method:'DELETE',
      headers:{
        'content-type':'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
      // .then(res=>{
      //   (!res.ok)
      //     ?res.json().then(e=>Promise.reject(e))
      //     :res.json()
        
      // })
      // .then(data=>{
      //   console.log({data})
      // })
      .catch(error=>{
        console.log(error)
      })
  }
}

export default EventApiService