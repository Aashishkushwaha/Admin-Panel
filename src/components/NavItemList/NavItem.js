import React from "react";
import classes from "./NavItemList.module.css";
import { Accordion, Card } from "react-bootstrap";

const NavItem = (props) => {
  console.log(props.itemType);
  if (props.type) {
    return (
      <li className={classes.accordion}>
        <Accordion style={{color: 'black', background: 'transparent'}} defaultActiveKey="0">
          <Card style={{color: 'black', background: 'transparent', border: 'none', width: '100%'}}>
            <Accordion.Toggle style={{color: 'white', margin: '0', padding: '0', border: 'none', background: 'transparent'}}
            as={Card.Header} eventKey="0">
              {props.title}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              {props.children}
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </li>
    );
  }
  return <li className={props.type && classes.accordion}>NavItem</li>;
};

export default NavItem;
