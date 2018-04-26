import React, { Component } from 'react'
import classes from './StoryComponent.css'

class StoryComponent extends Component {
  render () {
    return (
      <div className={classes.Outer}>
        <div className={classes.OuterContent}>
          <div className={classes.StoryQuestions}>
            <ul>
              <li className={classes.QuestionsStart}>
                <h3>Where are you from?</h3>
                <p>
                  I’m from Wayne, Michigan. Small town in the southeastern part of Michigan
                </p>
              </li>
              <li className={classes.Questions}>
                <h3>What is your educational background</h3>
                <p>
                  2 years of Architectural Engineering from a community college and changed degree
                  {' '}
                  to computer programming towards the end of it because I didn’t see myself enjoying
                  {' '}
                  that degree to the fullest. Ended up loving computer programming because of the fact
                  {' '}
                  that I love video games and one day aspire to be able to create my own and this drew
                  {' '}
                  out the fantasy. Transferred to University of Toledo towards the end of the program
                </p>
              </li>
              <li className={classes.Questions}>
                <h3>
                  What started or accelerated your interest in technology/development?
                </h3>
                <p>
                  I would have to say my love for video game and wanting to create my own game
                  {' '}
                  and release it on steam or mobile or both. It would have to go back when Sega
                  {' '}
                  Genesis or SNES was out, was playing games in my grandparents attic on the SNES
                  {' '}
                  and it captivated me. I wanted to play more; later in life around high school
                  {' '}
                  when my parents had a PC I would play Oregon Trail on it along with some other games.
                </p>
              </li>
              <li className={classes.Questions}>
                <h3>
                  What relevant or interesting work experience do you have?
                </h3>
                <p>
                  No relevant work experience, but i’ve been teaching myself different languages
                  {' '}
                  while looking for jobs after Graduation from Toledo
                </p>
              </li>
              <li className={classes.Questions}>
                <h3>What about your story is unique or interesting?</h3>
                <p>
                  It doesn’t really have much to do with my story but one of the times when
                  {' '}
                  I was going to donate blood; a nurse that was prepping me to make sure my
                  {' '}
                  vitals were good didn’t have a stethoscope. She ended up using just her index and middle fingers on my wrist and a watch to get my pulse; she told me that my heart skipped 16 beats in a minute and I should get it checked out before donating again. Ended up getting a holter monitor and CT scan to make sure everything was fine. Turned out that I have what he called a CV Block (not 100% sure i remember this correctly) but my heart has an irregular heartbeat and it is also partially enlarged.
                </p>
              </li>
              <li className={classes.Questions}>
                <h3> What are your hobbies or free-time activities?</h3>
                <p>
                  Some hobbies would include bowling with family and friends; family has
                  {' '}
                  our own league every other saturday night in Michigan called
                  {' '}
                  <a href='https://www.facebook.com/groups/BrownFamilyLeague/?multi_permalinks=1505068672949853&notif_id=1524528902152711&notif_t=group_activity&ref=notif'>
                    Brown Family League
                  </a>
                  {' '}
                  that started with
                  {' '}
                  my Grandma and Grandpa Brown and has been continuing for over 40 years now.
                </p>
              </li>
              <li className={classes.QuestionsEnd}>
                <h3>Do you volunteer?</h3>
                <p>
                  Not really, but I do donate blood every now and then and also grow my hair
                  out to donate it to an organization called
                  {' '}
                  <a href='http://www.childrenwithhairloss.us/home'>
                    Children with Hair Loss
                  </a>
                  {' '}
                  - provides free wigs to children by volunteer’s help.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default StoryComponent
