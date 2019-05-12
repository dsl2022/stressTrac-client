export default function accountPageFixture(){

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

  const intro_analysis = `There are 3 stress descriptors, mood, stress score and work 
  performance available foranalysis. You can click the dropdown menu to select each one for details.
  The Pie chart features the percentage of each of the score levels each descriptor. 
  The bar chart is showing the frequency of each descriptor every month, in conjuction with 
  the 2D histogram heatmap, which tells which score appears more fequent for each descriptor
  , for example, level 2 is stands out for stress score during May and July(select to verify).
  Frequency of entry histogram is showing how active the user has been keeping track of events.
  And the 2D contour map shows a similar picture compared to the 2D histogram, and it's give
  a more general view about the score level distribution.`

  return {mood_label,stress_score_label,work_efficiency_label,intro_analysis}
}