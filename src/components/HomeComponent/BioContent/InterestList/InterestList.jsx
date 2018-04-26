import React from 'react'
import classes from './InterestList.css'

const InterestList = () => (
  <div className={classes.LinkedLikes}>
    <ul>
      <li>
        <a href='https://steamcommunity.com/profiles/76561198112819248/'>
          Video Games <i className='fa fa-gamepad' />
        </a>
      </li>
      <li className={classes.right}>
        <a href='http://www.michigangolf.com/courses/ypsilanti/green-oaks-gc/'>
          Golf <i className='fas fa-golf-ball' />
        </a>
      </li>
      <li>
        <a href='https://www.facebook.com/groups/BrownFamilyLeague/'>
          Bowling <i className='fas fa-bowling-ball' />
        </a>
      </li>
      <li />
      <li className={classes.right}>
        <a href='https://github.com/BrownJason'>
          Aspiring Developer <i className='fas fa-server' />
        </a>
      </li>
    </ul>
  </div>
)

export default InterestList
