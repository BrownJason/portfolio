import React from 'react'

import classes from './Questions.css'


const Questions = props => (
    <li className={classes.Questions}
        h3={props.h3}
        p={props.p}
    />
)


export default Questions