import React,{Component} from 'react'
import ParticleComponent from "../../ParticleComponent";
import Plot from 'react-plotly.js';
import EventApiService from '../../services/event-api-service'
import Plotly from 'plotly.js/dist/plotly'
import './AccountPage.css'

export default class AccountPage extends Component{
  state = { 
    error:'',
    x:[],
    y:[],
    work_eff:[],
    stress_level:[],
    date_recorded:[],
    chart_name:'',
    stress_score:[],
    plot_y_data:{},
    user:'',
       layout:{}    
 }
 
 componentDidMount(){
  this.setState({error:null})
  EventApiService.getEvents()
  
//      .then(data=>{console.log(data,'test data')}) chris told me this kills it, it added delay. 
    .then(res=>{
      const moodArray=res.map(res=>{return res.mood+1})
      const stressScoreArray=res.map(res=>{return res.stress_score})
      const workEfficiencyArray=res.map(res=>{return res.work_efficiency})
      
      const stressSymptom=res.map(res=>{return res.symptoms})
      const stressEvents=res.map(res=>{return res.stress_event})
      const dateRecordedArray=res.map(res=>{return res.date_recorded})
      
      //console.log(moodIndex,'moodIndex',moodArray,'moodArray',stressScoreArray,'stress score',
      //workEfficiencyArray,'work efficiency',stressLevelArray,'stress level',dateRecordedArray,'date recorded')
      const plot_y_data ={
        Mood_Array:moodArray,
        Stress_Score_Array:stressScoreArray,
        Work_Efficiency_Array:workEfficiencyArray,        
      }
      
      this.setState({
        x:dateRecordedArray,
        mood:moodArray,
        user:res[0].full_name,
        plot_y_data:plot_y_data,
        Stress_symptoms:stressSymptom,
        Stress_Events:stressEvents
      })
      

    })            
    .catch(error=>this.setState({error:error}))
}

  selectYValue=(e)=>{
    
    const title=e.target.value.split('_').join(' ')
    console.log(title,'test event value')
    this.setState({y:this.state.plot_y_data[e.target.value],chart_name:title})
    console.log(this.state.x,this.state.y,'test')

  }

  chartRelayout () {
    this.setState({
       layout: {width: 0.5 * window.innerWidth}
    })
}




  render(){
    //console.log(this.state,'test line1')
    const options = Object.keys(this.state.plot_y_data)
    let optionsKey = options.map((option,index)=>
      {return <option key={index} value={option}>{option.split('_').join(' ')}</option>})
  
    // console.log( this.state.x,
    //   this.state.plot_y_data.Work_Efficiency_Array,'test arrays')
    
    return(
      <div className='AccountPage'>
        <div className='account_title'>
          {this.state.user} stress analysis
        </div>
        <div className='yvalue_selector'>
          <select onChange={this.selectYValue} className='select_yvalue'>
         {optionsKey}
          </select>
        </div> 
        <div className='plots'>
        
        <div className='plot_1'>
        <Plot
            data={[
               {
                x: this.state.x,
                y: this.state.y,
                name: this.state.chart_name,
                showlegend:true,
                marker: {color: 'white'},
                mode:'line',
                type:'bar'
             },
              
           ]}
           
           graphDiv="graph"
           layout={ {width: 780, height: 540, title: this.state.chart_name.slice(-5,this.state.chart_name.length)+' Mood Chart'
          
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
          <div className='plot_2'>
        <Plot
            data={[
               {
                x: this.state.x,
                y: this.state.y,
                name: this.state.chart_name,
                showlegend:true,
                marker: {color: 'white'},
                type:'histogram2d',
               
                
             },
              
           ]}
           graphDiv="graph"
           layout={ {width: 680, height: 440, title: this.state.chart_name+' 2d histogram'
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
      </div>
    )
  }
}