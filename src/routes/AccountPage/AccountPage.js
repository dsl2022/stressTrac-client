import React,{Component} from 'react'
import ParticleComponent from "../../ParticleComponent";
import Plot from 'react-plotly.js';
import EventApiService from '../../services/event-api-service'
import accountPageFixture from './AccountPageFixture'
import './AccountPage.css'

export default class AccountPage extends Component{
  state = { 
    error:'',
    x:[],
    y:[],
    work_eff:[],
    stress_level:[],
    date_recorded:[],
    chart_name:'Mood Array',
    stress_score:[],
    plot_y_data:{},
    user:'',
    count:{},
    countArray:[]
 }
 
 componentDidMount(){
  this.setState({error:null})
  EventApiService.getEvents()  
    .then(res=>{
      const moodArray=res.map(res=>{return res.mood+1})
      const stressScoreArray=res.map(res=>{return res.stress_score+1})
      const workEfficiencyArray=res.map(res=>{return res.work_efficiency+1})
      
      const stressSymptom=res.map(res=>{return res.symptoms})
      const stressEvents=res.map(res=>{return res.stress_event})
      const dateRecordedArray=res.map(res=>{return res.date_recorded})
         
      const plot_y_data ={
        Mood_Array:moodArray,
        Stress_Score_Array:stressScoreArray,
        Work_Efficiency_Array:workEfficiencyArray,        
      }
      
      // temporary set the initial data for pie chart, need to refractor in the future for cleaner code.
     
      const countarray = [0,0,0,0,0]
      moodArray.forEach(element=>{
        if(element===1)
          countarray[0]+=1
          if(element===2)
          countarray[1]+=1
          if(element===3)
          countarray[2]+=1
          if(element===4)
          countarray[3]+=1
          if(element===5)
          countarray[4]+=1
      })      
    // let countObject = this.state.count
    // let countKeys = Object.keys(this.state.count)
    // let countArray = countKeys.map(key=>{return countObject[key].length})
      
      this.setState({
        x:dateRecordedArray,
        y:moodArray,        
        mood:moodArray,
        user:res[0].full_name,
        plot_y_data:plot_y_data,
        Stress_symptoms:stressSymptom,
        Stress_Events:stressEvents,
        countArray:countarray
      })
      console.log(moodArray,countarray,this.state.countArray,'test inside mount array')      
    })            
    .catch(error=>this.setState({error:error}))
}

  selectYValue=(e)=>{    
    const title=e.target.value.split('_').join(' ') 
   
    // set up count array for pie chart and store it in state. 
    const countarray = [0,0,0,0,0]
    this.state.plot_y_data[e.target.value].forEach(element=>{
      if(element===1)
      countarray[0]+=1
      if(element===2)
      countarray[1]+=1
      if(element===3)
      countarray[2]+=1
      if(element===4)
      countarray[3]+=1
      if(element===5)
      countarray[4]+=1
    })
        
    this.setState({y:this.state.plot_y_data[e.target.value],chart_name:title,countArray:countarray})    
  }

  chartRelayout () {
    this.setState({
       layout: {width: 0.5 * window.innerWidth}
    })
}


  render(){    
    const options = Object.keys(this.state.plot_y_data)
    let optionsKey = options.map((option,index)=>
      {return <option key={index} value={option}>{option.split('_').join(' ').slice(0,option.length-5)}</option>})
    
    
   
    console.log(this.state.countArray,'test state count')
    const {mood_label,stress_score_label,work_efficiency_label,intro_analysis} = accountPageFixture()
    
    let pie_chart_label
    if(this.state.chart_name==='Stress Score Array')
    pie_chart_label=stress_score_label
    if(this.state.chart_name==='Work Efficiency Array')
    pie_chart_label=work_efficiency_label
    if(this.state.chart_name==='Mood Array')
    pie_chart_label=mood_label
  return(
      <div className='AccountPage'>
        <div className='account_title'>
          {this.state.user} stress analysis
        </div>
        <div className='chart_intro'>
          <p>
            {intro_analysis}    
          </p>
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
            {values:this.state.countArray,
            labels:pie_chart_label,
            domain: {column: 0},
            name: 'work efficiency',
            hoverinfo: 'label+percent+name',
            hole: .4,
            type: 'pie'}

          ]}
          useResizeHandler
          style={{ width: '100%', height: '100%' }}
          graphDiv="graph"

          layout={ {autosize: true, title: this.state.chart_name.slice(0,this.state.chart_name.length-5)+'Pie Chart'
          
           ,plot_bgcolor:'#049c41',paper_bgcolor:'#049c41',font:{color:'white'},
        }}
        />
        
        <Plot
            data={[
               {
                x: this.state.x,
                y: this.state.y,
                name: this.state.chart_name.slice(0,this.state.chart_name.length-5),
                showlegend:true,
                marker: {color: 'white',
                line:{
                  color:'white',
                  width:15
                }},
                mode:'line',
                type:'bar',
               
                
             },
              
           ]}
           useResizeHandler
          style={{ width: '100%', height: '100%' }}
           graphDiv="graph"
           
           layout={ {autosize: true, title: this.state.chart_name.slice(0,this.state.chart_name.length-5)+'Bar Chart'
          
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
          
          <Plot
            data={[
               {
                x: this.state.x,
                y: this.state.y,
                name: this.state.chart_name,
                showlegend:true,
                marker: {color: 'white'},
                mode:'line',
                type:'histogram2d',
               
                
             },
              
           ]}
           useResizeHandler
          style={{ width: '100%', height: '100%' }}
           graphDiv="graph"
           
           layout={ {autosize: true, title: this.state.chart_name.slice(0,this.state.chart_name.length-5)+'2D Histogram'
          
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
      <Plot
            data={[
               {
                x: this.state.plot_y_data.Mood_Array,
                y: this.state.plot_y_data.Stress_Score_Array,
                name: this.state.chart_name.slice(0,this.state.chart_name.length-5),
                showlegend:true,
                marker: {color: 'white'},
                mode:'markers',
                type:'histogram',
               
                
             },
              
           ]}
           useResizeHandler
          style={{ width: '100%', height: '100%' }}
           graphDiv="graph"
           
           layout={ {autosize: true, title: 'Frequency of Entry'
          
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

<Plot
            data={[
               {
                x: this.state.x,
                y: this.state.y,
                name: '',
                showlegend:true,
                marker: {color: 'white'},
                mode:'line',
                type:'histogram2dcontour',
               
                
             },
              
           ]}
           useResizeHandler
          style={{ width: '100%', height: '100%' }}
           graphDiv="graph"
           
           layout={ {autosize: true, title: this.state.chart_name.slice(0,this.state.chart_name.length-5)+'2D Contour Chart'
          
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
        <ParticleComponent />
      </div>
      </div>
    )
  }
}