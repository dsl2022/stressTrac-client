import React,{Component} from 'react'
import ParticleComponent from "../../ParticleComponent";
import Plot from 'react-plotly.js';
import EventApiService from '../../services/event-api-service'
import './AccountPage.css'

export default class AccountPage extends Component{
  state = { 
    error:'',
    x:[],
    mood:[],
    work_eff:[],
    stress_level:[],
    date_recorded:[],
    stress_score:[],
    plot_y_data:{},
    user:''
    
    
 }
 componentDidMount(){
  this.setState({error:null})
  EventApiService.getEvents()
  
//      .then(data=>{console.log(data,'test data')}) chris told me this kills it, it added delay. 
    .then(res=>{
      const moodArray=res.map(res=>{return res.mood})
      const stressScoreArray=res.map(res=>{return res.stress_score})
      const workEfficiencyArray=res.map(res=>{return res.work_efficiency})
      const stressLevelArray=res.map(res=>{return res.stress})
      const dateRecordedArray=res.map(res=>{return res.date_recorded})
      const moodIndex = moodArray.map((element,index)=>index)
      console.log(moodIndex,'moodIndex',moodArray,'moodArray',stressScoreArray,'stress score',
      workEfficiencyArray,'work efficiency',stressLevelArray,'stress level',dateRecordedArray,'date recorded')
      const plot_y_data ={
        Mood_Array:moodArray,
        Stress_Score_Array:stressScoreArray,
        Work_Efficiency_Array:workEfficiencyArray,
      }
      
      this.setState({
        x:dateRecordedArray,
        mood:moodArray,
        user:res[0].full_name,
        plot_y_data:plot_y_data
      })
      

    })            
    .catch(error=>this.setState({error:error}))
}
  render(){
    console.log(this.state,'test line1')
    const options = Object.keys(this.state.plot_y_data)
    let optionsKey = options.map(option=>
      {return `<option value='${option}'>${option.split('_').join(' ')}</option>`})
    optionsKey = optionsKey.join('')
    console.log(typeof optionsKey)
    const test = "<option value='Mood_Array'>Mood Array</option><option value='Stress_Score_Array'>Stress Score Array</option><option value='Work_Efficiency_Array'>Work Efficiency Array</option>"
    return(
      <div className='AccountPage'>
        <div className='account_title'>
          {this.state.user} stress analysis
        </div>
        <div className='plots'>
        <div className='yvalue_selector'>
          <select className='select_yvalue'>
            {test}
          </select>
        </div>
        <Plot
            data={[
               {
                x: this.state.x,
                y: this.state.mood,
                name: 'mood chart',
                showlegend:true,
                marker: {color: 'white'}
             },
              
           ]}
           graphDiv="graph"
           layout={ {width: 780, height: 540, title: 'Mood Chart'
           ,plot_bgcolor:'#049c41',paper_bgcolor:'#049c41',font:{color:'white'},
           xaxis:{
              showgrid: false,
              gridcolor:'white',
              gridwidth:0.01,
              linecolor:'white',
              zerolinecolor:'white',
              tickcolor:'white'

           },
           yaxis:{
            showgrid: false,
            gridcolor:'white',
            gridwidth:0.01,
            linecolor:'white',
            zerolinecolor:'white',
            tickcolor:'white'
           }
          } }
          />
          </div>
          <div className='plots'>
        <Plot
            data={[
               {
                x: this.state.x,
                y: this.state.workEfficiencyArray,
                name: 'work efficiency chart',
                showlegend:true,
                marker: {color: 'white'}
             },
              
           ]}
           graphDiv="graph"
           layout={ {width: 680, height: 440, title: 'work efficiency chart'
           ,plot_bgcolor:'#049c41',paper_bgcolor:'#049c41',font:{color:'white'},
           xaxis:{
              showgrid: false,
              gridcolor:'white',
              gridwidth:0.01,
              linecolor:'white',
              zerolinecolor:'white'

           },
           yaxis:{
            showgrid: false,
            gridcolor:'white',
            gridwidth:0.01,
            linecolor:'white',
            zerolinecolor:'white'
           }
          } }
          />
          </div>
        <ParticleComponent />
      </div>
    )
  }
}