import React from 'react'
import classes from './InterestList.css'

const InterestList = () => (
  <div className={classes.LinkedLikes}>
    <ul>
      <li>
        <a href='https://steamcommunity.com/profiles/76561198112819248/'>
          Video Games <i className={`fa fa-gamepad ${classes.fontAwesome}`} />
        </a>
      </li>
      <li className={classes.right}>
        <a href='https://www.facebook.com/groups/311739072291023/'>
          Golf <i className={`fas fa-golf-ball ${classes.fontAwesome}`} />
        </a>
      </li>
      <li>
        <a href='https://www.facebook.com/groups/BrownFamilyLeague/'>
          Bowling <i className={`fas fa-bowling-ball ${classes.fontAwesome}`} />
        </a>
      </li>
      <li />
      <li className={classes.right}>
        <a href='https://github.com/BrownJason'>
          Aspiring Developer
          {' '}
          <i className={`fas fa-server ${classes.fontAwesome}`} />
        </a>
      </li>
    </ul>
  </div>
)

export default InterestList
