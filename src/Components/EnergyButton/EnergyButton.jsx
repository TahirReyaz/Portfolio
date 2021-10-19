import React from 'react'
import classes from './EnergyButton.module.css'

const EnergyButton = props => {

  return (
    <div className={classes.eButton}>
      <span>
        {props.children}
      </span>
    </div>
  );
}

export default EnergyButton;