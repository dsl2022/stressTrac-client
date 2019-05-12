export default function eventPageFixture(){
  const mood_labels = ['happy and relief',
  'minor anxiety',
  'Anxiety and agitation',
  'Moodiness, irritability, or anger',
  'Feeling overwhelmed,loss of control']
  
  const stress_score = ['Low stressful',
  'Mild stressful',
  'Somewhat stressful',
  'Very stressful',
  'Extremely stressful']
  
  const work_efficiency = [
  'Doing well',
  'Hard to focus',
  'Completely distracted',
  'No desire to perform',
  'Can not work can not focus'
  ]
  return {mood_labels,stress_score,work_efficiency}
}