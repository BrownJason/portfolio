import React,{Fragment} from 'react'

import classes from './Module.css'

const Modules = props => {
  return (
    <div className={classes.Module}>
      <a href={`${props.link}`}>
        <div className={classes.ModuleContent}>
          <span>
              <i class={props.icon}/>&nbsp;&nbsp;
              {props.headerText}
          </span>
          <img src={require(`../../../images/${props.img}.PNG`)} alt='' />
          <p>{props.pBefore}<br />{props.pAfter}</p>
        </div>
      </a>
    </div>
  );
}

export default Modules