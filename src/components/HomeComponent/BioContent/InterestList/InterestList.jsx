import React from 'react'
import classes from './InterestList.css'

const InterestList = () => (
<div className={classes.LinkedLikes}>
              <ul>
                <li><a href='https://steamcommunity.com/profiles/76561198112819248/' >Video Games <i class='fa fa-gamepad' /></a></li>
                <li className={classes.right}><a href='http://www.michigangolf.com/courses/ypsilanti/green-oaks-gc/'>Golf <i class='fas fa-golf-ball' /></a></li>
                <li>
                  <a href='https://www.facebook.com/groups/BrownFamilyLeague/?multi_permalinks=1505068672949853&notif_id=1524528902152711&notif_t=group_activity&ref=notif'>
                    Bowling <i class='fas fa-bowling-ball' />
                  </a>
                </li>
                <li />
                <li className={classes.right}>
                  <a href='https://github.com/BrownJason'>
                  Aspiring Developer <i class='fas fa-server' />
                  </a>
                </li>
              </ul>
            </div>
)

export default InterestList