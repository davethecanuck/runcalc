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
          f = 1 + 0.0595&#8901;(d^1.85&#8901;(a^0.22)/10^8)
        </pre></p>
        <p>
          This factor is multiplied by the ideal time at sea level to predict your time at 
          a given altitude. 
        </p>

        <h3> Elevation Change Factor </h3>
        <p>
          Determining the effects of elevation gain and loss ultimately come down to 
          calculating the power output of the runner for a given distance and time, and then
          figuring out the fraction of this power which needs to be expended to gain 
          elevation (uphills), and the fractional power gains from elevation loss (downhills). 
          Easier said than done.  Power is relatively easy to measure on a 
          bike via torque sensors in the crankshaft. It is not however easily measured 
          on a runner. What follows are a combination of my own reasoning along
          with what I've learned from external sources.
          Note that power is simply energy expended over time, so you will 
          see both terms used below as is relevant.
        </p>
          
        <p>
          Energy expended on the push-off of a stride is largely translated into
          forward (and upwards) momentum (ignoring air resistance). There are of course 
          internal power/energy sapping functions going on (muscle friction, 
          respiration, etc), but I am mostly interested in the power that ends up being 
          applied to the bottom of your foot.
        </p>

        <p>
          For this calculator, I have used a <a 
          href="https://blog.stryd.com/2020/01/10/how-to-calculate-your-race-time-from-your-target-power/">
            formula provided by Stryd
          </a>
          , a running power meter company, to estimate the energy expenditure (e)
          for a runner of a given mass (m) for a given distance (d). Note that Stryd 
          presents the formula so that it predicts time as a function of
          power and distance, but I converted the fomula to calculate energy as a 
          function of distance. 
          </p>
          <p><pre>
            e = 1.04&#8901;d&#8901;m
          </pre> </p>
          <p>
          The takeaway from this is that you can generally assume a constant energy expenditure
          for a given runner of a given mass on a given flat race regardless of pace. 
          If you run faster, you will be expending more power over less time, but the energy 
          spent is about the same.
        </p>

        <p>
          It is on the landing phase where eccentric contractions of the muscles slow 
          your descent, and kinetic energy is translated into elastic potential energy 
          in your tendons/muscles, and also wasted as heat. The more elastic your tendons
          are (and perhaps the better match of your cadence to the natural rebound frequency
          of your tendons) the more kinetic energy you will recover, and the less energy 
          will be lost to heat. Likewise, the less vertical oscillation there is in your 
          stride, the less downward momentum will need to be halted in the landing 
          phase, and the less energy will be lost.
        </p>

        <p>
          When we run uphill, a larger portion of our stride is on the push-off phase, but 
          there is less eccentric muscle contraction on landing as your front foot ends up 
          higher than from where it took off. Thus, energy loss on the landing phase is lower
          when running uphill than it is on the flat. Conversely, running downhill requires 
          larger energy expenditure on landing (the foot lands below where it took off), 
          and thus energy loss on the landing phase is higher than it is on the flat. 
        </p>

        <p>
          Energy (e) expended to gain elevation is simple to calculate via Newtonian physics as
          a function of your mass (m) and the elevation gain (v&#8330;). 
        </p>
        <p><pre>
          e = 9.8&#8901;m&#8901;v&#8330;
        </pre>
        </p>
        <p>
          Energy gained back from elevation loss (running downhill) is also based on the same equation,
          but will be lower than the Newtonian ideal due to the imperfectly elastic collision of 
          the landing phase. As per work done by <a 
          href="https://www.brianmac.co.uk/articles/article147.htm">
          British researcher, Dr. Mervyn Davies
          </a>,
          the energy gained on downhills is only 55% of the energy expended on uphills. This 55% 
          number is a rule of thumb, and may be higher if you are more efficient, and lower if 
          you are less efficient.
        </p>

        <p>
          For this calculator, it is assumed that for a given amount of time, a runner will be 
          able to expend energy at a certain max rate. I.e. Power expended will be constant if 
          pacing is done evenly. You will run slower on the uphills due to power being used to 
          lift your mass upwards, and you will run faster on downhills thanks to your gravitational
          potential energy being converted to kinetic energy (at a 55% efficiency level, as discussed
          above). Your sustained power potential is higher for short distances and lower for 
          longer distances, which ultimately is why you run at a slower pace as distance 
          (and/or time) increases.
        </p>

        <p>
          Putting it all together, the total energy (e) you expend over a race of a given 
          distance (d) will be broken down into the energy to move you over the distance 
          on the flat (e&#8320;), plus the energy to gain elevation (e&#8330;) minus the energy 
          gained back while losing elevation (e&#8331;). 
        </p>
        <pre>
        <p>
          e = e&#8320; + e&#8330; - e&#8331;
        </p>
        <p>
          e = 1.04&#8901;d&#8901;m + 9.8&#8901;m&#8901;v&#8330; 
              - 0.55&#8901;9.8&#8901;m&#8901;v&#8331;
        </p>
        </pre>
        <p>
          The total power (energy / time) will be equal to your max power for a race of 
          equivalent time duration (t&#8320;) on the flat.  
        </p>
        <pre>
          p = e&#8320;/t&#8320; = 
            (1.04&#8901;d&#8901;m + 9.8&#8901;m&#8901;v&#8330; 
             - 0.55&#8901;9.8&#8901;m&#8901;v&#8331;) / t
        </pre>

        <p>
          Solving for the ratio of predicted time (t) to time on the flat (t&#8320;) 
          gives us our elevation change factor (f).
        </p>
        <pre>
          <p>
          f = t / t&#8320; = 1 + (4.71&#8901;v&#8330; - 2.59&#8901;v&#8331;) / d 
          </p>
        </pre>

        <h3> Power and Efficiency </h3>
        <p>
          The ability of an individual runner to recover energy from the landing phase and
          translate it to forward momentum is really the definition of the efficiency of the
          runner. A perfectly elastic landing (you bounce like a golf ball) would translate 
          100% of the power stored in your tendons to kinetic energy. A perfectly inelastic 
          landing (i.e. you stick to the ground like a lump of soft clay) would translate 
          0% of your gravitational potential energy to forward momentum. Though a typical 
          human has an efficiency of 55%, some people may be closer to 60% efficient and 
          some more like 50% efficient (though I have no idea what the actual typical range is).
        </p>
        <p> 
          Two equal size and pace runners may each have a different efficiency level for
          translating the landing phase to kinetic energy. This means that the less efficient
          runner has to expend more energy (and thus have a higher power potentitial) than 
          the more efficient runner.  Each individual can thus be thought of as more of 
          a 'power' runner or as an 'efficiency' runner. 
        </p>

        <p>
          What this means is that the 'efficiency' runner will have less energy 
          loss on the downhills than the 'power' runner. The 'power' runner 
          will suffer less of an efficiency disadvantage on the uphills as there is 
          less potential energy to lose. Thus in our example of the equal (flat) 
          paced efficiency and power runner, the power runner will be faster on 
          the uphills and the efficiency runner will be faster on the downhills.
          On a hilly course with equal elevation gain and loss, the power runner has the
          advantage over our efficiency runner (due to the 55% rule).
        </p>

        <p>
          The calculator doesn't currently calculate whether you are a power or 
          efficiency runner (i.e. Are you below or above 55% landing efficiency)
          but this may be added at a later date. An 'efficiency factor' could be 
          helpful in predicting times for hilly courses.
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