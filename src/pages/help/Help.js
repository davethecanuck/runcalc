import React from 'react'
import {Paper} from '@material-ui/core'
//import MathJax from 'react-mathjax'
import {contentStyles} from '../../components/Content'

function Help(props) {
  const classes = contentStyles()

  return (
    <div>
      <Paper className={classes.pageContentMain}>
        <h2> What does this do? </h2>
        <p>
          This application uses your running race history to predict your time 
          in other race distances. You can adjust the race day scenarios (age, 
          altitude, elevation change) to see what effect these factors have on 
          your race times.
        </p>
        <h2> How do I use this? </h2>
        <p> 
          The 'Profile' section lets you set your age and gender so that age
          adjustments can be calculated.
        </p>
        <p> 
          The 'History' section allows you to enter in past races including the race day
          scenario. E.g. How old were you, what was the starting altitude, what 
          was the elevation gain and loss. Then go to the 'Predict' section to 
          see your expected race times for various distances and race day 
          scenarios.
        </p>
        <p>
          The only required fields for the race history are time and distance. Altitude and
          elevation gain/loss will greatly help predictions if any of these values are 
          significant. Your age at race day is used to help you predict race times for 
          the past or future.
        </p>
        <p>
          The 'time' field may be entered in as hh:mm:ss, hh:mm, hhmm, mm:ss, or mmss
          format. The calculator makes a best guess as to what you intended and what is 
          reasonable for the distance selected.
        </p>
        <h2> How does this work? </h2> 
        <p> 
          Though the calculator (currently) uses American units for altitude/pace/etc, 
          the calculations on the back-end are all done in metric. For the following, 
          assume all distances/elevations/altitudes are in meters, energy is in Joules, 
          power is in Watts, and masses are in kilograms.
        </p>
        <p>
          The basis of the calculator is to normalize past race times using adjustment
          factors for altitude, elevation change, and age to get the equivalent time 
          for the same distance on the flat at sea level at your peak running age (around 25).
          This normalized time is divided by the world record 'ideal' time to get 
          something like an age grade factor. This factor is then used to calculate your 
          'ideal' time for other distances by multiplying it by the world records 
          (or actually a formula which predicts the world record) for 
          each distance. Finally, these ideal predictions are converted to times for 
          the scenario you provide (actual age, altitude, and elevation change) by 
          calculating the adjustment factor for each of these elements and multiplying them
          by the ideal time.
        </p>
        <h3> Distance Conversions </h3>
        <p>
          A regression of 
          <a href='https://www.worldathletics.org/records/by-category/world-records'
          target='_blank' rel='noopener noreferrer'> world records </a> by men and 
          women for all major events from 800m to marathon was done to create a 
          formula for predicting race times (t) for a given distance (d).
        </p>

        <p><pre>
          t =-19.964 + 0.152&#8901;d + 9.098E-7&#8901;d&sup2; - 9.556E-12&#8901;d&sup3;
        </pre></p>

        <p>
          This formula is pretty accurate for predicting men's world records
          for all distances given a single women's distance record (and vice versa) 
          when a male-&gt;female age grade equivalent of about 90.9% is applied.
          This provides a baseline 'ideal' standard for each race distance, and 
          is the basis for converting times between your different race distances.
        </p>

        <h3> Altitude Factor </h3>
        <p>
          A similar regression was done for altitude adjustements based on raw
          data from the <a 
            href='https://www.ustfccca.org/assets/ncaa-info/2009-outdoor-alt-adjust.pdf'
            target='_blank' rel='noopener noreferrer'> 
          NCAA altitude adjustment tables
          </a>. 
          The formula has been tweaked to account for physiological effects 
          where below 800m you might run faster at altitude (less air resistance, 
          and you can run with a certain amount oxygen debt). At least that's what the 
          NCAA tables suggest, and it makes some intuitive sense.
        </p>
          
        <p>
          An interesting finding from the NCAA tables is that the longer you run at 
          altitude the larger the effect of a given altitude. 
          For example, if you run 3% slower at a given altitude in the 5000m (versus at 
          sea level), you might run 4% slower in the 10000m. A consequence of this is 
          that the altitude table ought be based on time rather than distance. This gets 
          a bit tricky however as time now becomes both the input and output of the table. 
          My take on this is to adjust the distance input slightly when calculating the altitude
          factor. Effectively, I calculate the effect on time for a given altitude, then
          adjust the distance by this time factor, and then recalculate the final time 
          factor in a second pass. Not perfect, but probably good enough.
        </p>

        <p>
          Another observation of the NCAA tables is that they used the same adjustment factor
          for a given distance whether you are a D1 male runner (~28min 10km time) or a 
          D3 female runner (~33 min 10km time). As discussed above, the adjustement really 
          ought to be higher for slower runners, but NCAA took a shortcut by applying the 
          same factor across all divisions.
        </p>  
        <p>
          Trial-and-error was used to create a linear regression from the NCAA tables that provides 
          good predictions over the race distances and altitudes covered by this calculator.
          The (aproximate) square of the altitude and (approximate) square root of the distance 
          are multiplied to create a factor which, along with predicted time, is the input 
          to this regression. The end result is a function which returns an altitude 
          factor (f) as a function of the distance (d) and altitude (a). 
        </p>
        <p><pre>
          f = 1 + 0.0595&#8901;d^1.85&#8901;(a&#8901;0.3048)^0.22/10^8
        </pre></p>
        <p>
          This factor is multiplied by the ideal time at sea level to predict your time at 
          a given altitude. 
        </p>

        <h3> Elevation Change Factor </h3>
        <p>
          An accurate assessment of the effects of elevation change is very difficult to 
          calculate accurately.  For instance, some people are simply better at 
          uphills than others. For two people of equal pace on the flat, the one that 
          is more efficient (better energy return from the landing phase) will be able 
          to keep pace despite having lower power output. Unintuitively, the more 
          efficient runner may be at a disadvantage on the uphills as the landing phase 
          is truncated (your foot hits the hill while the leg is already bent) so 
          energy return is less important. The runner with a higher power output 
          (i.e. lower efficiency in our example) will be able to apply greater force 
          on the push-off phase of the stride, and will be able to gain gravitational
          potential energy faster; they will run the uphills faster. Conversely, the 
          elongated landing phase on a downhill means there is more gravitational 
          potential energy to be stored in your tendons (to be later returned as 
          kinetic energy), thus putting more emphasis on efficient energy return.
          Thus the more efficient (less powerful in our example) runner will run 
          the downhills faster. 
        </p>
        <p>
          As per research by Strava for their <a 
          href="https://medium.com/strava-engineering/an-improved-gap-model-8b07ae8886c3"> 
          Grade Adjusted Pace model (GAP) 
          </a> the effects of grade on pace are non-linear, tracing a parabolic 
          function. Downhills help to about a 10% grade after which they become 
          counter-productive, and at about 20% downhill grade your pace will 
          likely match your pace on the flat. However, from about a -5% grade up to a 
          +35% grade (which is as far as the Strava data takes us) the effect of 
          grade on pace is fairly linear. Because of this, we are able to make 
          assumptions about grade based solely on elevation gain/loss and the race
          distance and do not need the minute details of every little up and down 
          on the race course.  For purposes of this calculator, we assume the grade 
          up and down are the same. So for example, if there is 900m elevation gain 
          and 100m elevation loss over a 10,000m race, we assume the elevation gain 
          is happening over 9,000m of the race (+10% grade) and the elevation loss 
          is happening over 1,000m of the race (-10% grade).
        </p>
        <p> 
          Once we have converted the elevation gain and loss each to a grade (g),
          we feed each into the GAP model to get a factor for the elevation 
          gain and a factor for the elevation loss:
        </p>
        <p><pre>
          f = 1 + 0.03&#8901;g + 1.5e-3&#8901;g&#178;
        </pre></p>
        <p>
          The factor for the elevation gain side is applied to the portion of the 
          race that is uphill, and the factor for the elevation loss side is applied
          to the portion of the race that is downhill. The net effect is such that 
          a course with equal uphill and downhill will always have an elevation 
          factor &gt; 1 and thus it will be a slower course than a flat one. 
        </p>
        <p>
          Note that the elevation changes entered into the Prediction scenarios 
          obviously result in vastly different grades for different distances. 
          For example, if you enter an elevation gain of 1000ft (~300m) this is 
          a relatively small grade for a marathon (~0.75%) and a very large 
          grade for an 800m race (&gt;35%). If the elevation gain was set to 
          3300ft (~1000m), then the elevation gain would be greater than the 
          length of the shorter races; an absurd value. To combat this, the 
          calculations for grade are adjusted so that they are &lt;35% up or down.
        </p>
        <h3> Age Factor </h3>
        <p>
          The 2015 <a 
          href="https://github.com/AlanLyttonJones/Age-Grade-Tables">
          age grading tables
          </a> by WMA (World Masters Athletics) was chosen to calculate the factors
          to convert races by an individual at different ages. 2015 was before the 
          advent of the carbon-plate "supershoes" so the age group records should be 
          pretty consistent. Age records are recorded for men and women for each distance
          for each age from 5 to 100.
        </p>
        <p>
          The calculator uses this table directly to determine the age factor (used to
          convert your race times to a younger or older version of yourself). I.e. The 
          factor is directly looked up or interpolated, and no attempt was made to 
          regress the data to a formula (unlike what was done for the distance conversion 
          formula).
        </p>

        <h3> Combining Multiple Past Races </h3>
        <p>
          The calculator lets you enter multiple races and it uses a weighted average of the 
          predictions made from each race to give you a final result. The weighting is
          currently done such that races closer to the prediction distance are weighted 
          higher. For example, your half marathon time will be weighted higher than 
          your 800m time for predicting your marathon time, but the 800m time will be weighted
          higher when predicting your 1500m time. 
        </p>
        <p>
          Potential future development may weigh more recent races more than older races, 
          but this is not currently implemented.
        </p>
      </Paper>
    </div>
  )
}

export default Help;