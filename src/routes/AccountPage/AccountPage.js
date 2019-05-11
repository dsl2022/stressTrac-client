import React,{Component} from 'react'
import ParticleComponent from "../../ParticleComponent";
import Plot from 'react-plotly.js';
import EventApiService from '../../services/event-api-service'
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
    count:{}
 }
 
 componentDidMount(){
  this.setState({error:null})
  EventApiService.getEvents()
  
//      .then(data=>{console.log(data,'test data')}) chris told me this kills it, it added delay. 
    .then(res=>{
      const moodArray=res.map(res=>{return res.mood+1})
      const stressScoreArray=res.map(res=>{return res.stress_score+1})
      const workEfficiencyArray=res.map(res=>{return res.work_efficiency+1})
      
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
    const count ={one:[],two:[],three:[],four:[],five:[]}
    this.state.plot_y_data[e.target.value].forEach(element=>{
      if(element===0)
        count.one.push(element)
        if(element===1)
        count.two.push(element)  
        if(element===2)
        count.three.push(element)
        if(element===3)
        count.four.push(element)
        if(element===4)
        count.five.push(element)
    })
    this.setState({y:this.state.plot_y_data[e.target.value],chart_name:title,count:count})
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
    
    let countObject = this.state.count
    let countKeys = Object.keys(this.state.count)
    let countArray = countKeys.map(key=>{return countObject[key].length})
    console.log(countArray,'test count keys')


const mood_label = ['happy and relief',
'minor anxiety',
'Anxiety and agitation',
'Moodiness, irritability, or anger',
'Feeling overwhelmed,loss of control']


const stress_score_label = ['Low stressful',
'Mild stressful',
'Somewhat stressful',
'Very stressful',
'Extremely stressful']

const work_efficiency_label = ['Can not work can not focus',
'No desire to perform',
'Completely distracted',
'Hard to focus',
'Doing well']
let pie_chart_label
console.log(this.state.chart_name,'test chart name')
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
        <div className='yvalue_selector'>
          <select onChange={this.selectYValue} className='select_yvalue'>
         {optionsKey}
          </select>
        </div> 
        <div className='plots'>
        
        <div className='plot_1'>

        <Plot  
          data={[
            {values:countArray,
            labels:pie_chart_label,
            domain: {column: 0},
            name: 'work efficiency',
            hoverinfo: 'label+percent+name',
            hole: .4,
            type: 'pie'}

          ]}

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