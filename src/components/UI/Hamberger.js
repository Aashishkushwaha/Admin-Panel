import React, {useState} from "react";
import classes from './Hamberger.module.css';

const Hamberger = (props) => {
  const [show, setShow] = useState(false)
  return (
    <span style={props.right && {right: '2rem'}} className={classes.hambergerWrapper} onClick={() => setShow(!show)}>
      <div className={classes.hamberger}></div>
    </span>
  );
};

export default Hamberger;
