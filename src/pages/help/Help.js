import React from 'react';
import {Paper} from '@material-ui/core';
import {contentStyles} from '../../components/Content'

function Help(props) {
  const classes = contentStyles()

  return (
    <div>
      <Paper className={classes.pageContent}>
        <h2> What does this do? </h2>
        <p>
          This application uses your running race history to predict your time 
          in upcoming races.
        </p>
        <h2> How do I use this? </h2>
        <p> 
          Use the 'History' section to enter in a few past races which 
          you want to use to predict future races at various distances.
          Then go to the 'Predict' section to see your expected race times 
          for various distances.
        </p>
        <h2> How does this work? </h2> 
        <p>
          A regression of 
          <a href='https://www.worldathletics.org/records/by-category/world-records'
          target='_blank'> world records </a> by men and women for all major events
          from 400m to marathon was done to create a formula for predicting 
          race times for a given distance based on a time for a different distance.
          The resultant formula is very accurate for predicting men's world records
          for all distances given a single women's distance record (and vice versa) 
          when a male-&lt;female age grade equivalent of about 90.9% is applied.
          For slower runners like myself (around 68% age grade) the predictions match 
          up as well. 
        </p>
        <p>
          A similar regression was done for altitude adjustements based on raw
          data from the NCAA altitude adjustment <a href='https://www.ustfccca.org/assets/ncaa-info/2009-outdoor-alt-adjust.pdf'
          target='_blank'> tables</a>. 
          The formula has been tweaked
          to account for physiological effects where below 800m you might run faster 
          at altitude (less air resistance, and you can run with a certain amount
          oxygen debt). Another interesting finding from the NCAA tables is that 
          the longer you run at altitude the larger the effect of a given altitude. 
          For example, if you run 3% slower at a given altitude in the 5000m, you might
          run 4% slower in the 10000m. A consequence of this is that a more accurate 
          altitude table might be based on time rather than distance. This gets a bit
          tricky as time now becomes both the input and output, but it would not be hard
          to adjust the algorithm to do this. It does however produce somewhat different
          results than the standard NCAA tables (e.g. Adjustment for D3 woman will be 
          greater than that for a D1 male, but NCAA uses the same % adjustment for both).
        </p>  
        <p>
          Roughly, the formula takes the square of the altitude times the square root of the
          distance as input, and applies this to a 2nd-degree formula which was derived 
          via regression.
        </p>
        <p>
          The app lets you enter multiple races and it uses a weighted average of the 
          predictions made from each race to give you a final result. The weighting is
          currently done such that races closer to the prediction distance are weighted 
          higher. For example, your half marathon time will be weighted higher than 
          your 800m time for predicting your marathon time, but the 800m time will be weighted
          higher when predicting your 1500m time. 
        </p>

        <h2> What's next? </h2>
        <p> 
          I will include age grading so that you can predict future
          races for a given age, or even check to see what your younger 
          self could have run. Adding dates to races will be helpful for 
          age grading as well as for weighting the race for our predictions.
          For example, a race run last year will carry more predictive weight than
          a race you ran 10 years ago. The 10 year old race is still useful though
          when properly age-graded.
        </p>
        <p> 
          Similarly, I will be adding altitude options in the Predict section
          so you can see what your predicted times will be for various altitudes.
        </p>
        <p> 
          There are several graphs/charts I may be implementing. In particular, 
          it might be nice to have a chart that tells you which distance is your 
          best. A graph of predicted marathon times by age or altitude would be cool.
        </p>
      </Paper>
    </div>
  )
}

export default Help;