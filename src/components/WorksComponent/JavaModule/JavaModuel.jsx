import React from 'react'

import classes from './JavaModule.css'

const JavaModule = () => (
  <div className={classes.JavaModule}>
    <a href='https://github.com/cooksystemsinc/java-xml-file-transfer-assessment-BrownJason'>
      <div className={classes.JavaContent}>
        <span>
          <i class='fab fa-java' />
          &nbsp;&nbsp;Java Assessment XML Fil Transfer
        </span>
        <img src={require('../../../images/javaSnip.PNG')} alt='' />
        <p>
          Purpose of this snippet is get the elements of the file including the
          {' '}
          filename and convert that into XML (this is a longer version of doing it)
        </p>
      </div>
    </a>
  </div>
)

export default JavaModule
