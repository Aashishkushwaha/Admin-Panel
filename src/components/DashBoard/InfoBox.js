import React from 'react';
import classes from './DashBoard.module.css';


const InfoBox = props => {
  return (
    <div className={classes.InfoBoxContainer}>
      <div>
        <span>{props.value}</span>
        <span>{props.title}</span>
      </div>
    </div>
  )
}

export default InfoBox;