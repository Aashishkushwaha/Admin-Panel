import React, { useState } from "react";
import classes from "./SideBar.module.css";
import NavItemList from "../NavItemList/NavItemList";
import NavItem from "../NavItemList/NavItem";

const SideBar = (props) => {
  const [show, setShow] = useState(false);
  let assignedClasses = [classes.menuContainer];
  if (show) {
    assignedClasses.push(classes.show);
  }
  return (
    <div className={classes.container}>
      <header>Admin</header>
      <span className={classes.hambergerWrapper} onClick={() => setShow(!show)}>
        <div className={classes.hamberger}></div>
      </span>
      <section className={assignedClasses.join(" ")}>
        <div>
          <img
            src={"https://image.flaticon.com/icons/svg/149/149071.svg"}
            alt="admin logo"
          />
          <span>Admin</span>
        </div>
        {/* <div className={classes.NavListMobile}> */}
        <NavItemList>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem title={"Accordion"} type="accordion">
            <div>
              <NavItem>Link 1</NavItem>
              <NavItem>Link 2</NavItem>
              <NavItem>Link 3</NavItem>
              <NavItem>Link 4</NavItem>
            </div>
          </NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem title={"Accordion"} type="accordion">
            <div>
              <NavItem>Link 1</NavItem>
              <NavItem>Link 2</NavItem>
              <NavItem>Link 3</NavItem>
              <NavItem>Link 4</NavItem>
            </div>
          </NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem title={"Accordion"} type="accordion">
            <div>
              <NavItem>Link 1</NavItem>
              <NavItem>Link 2</NavItem>
              <NavItem>Link 3</NavItem>
              <NavItem>Link 4</NavItem>
            </div>
          </NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem title={"Accordion"} type="accordion">
            <div>
              <NavItem>Link 1</NavItem>
              <NavItem>Link 2</NavItem>
              <NavItem>Link 3</NavItem>
              <NavItem>Link 4</NavItem>
            </div>
          </NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem title={"Accordion"} type="accordion">
            <div>
              <NavItem>Link 1</NavItem>
              <NavItem>Link 2</NavItem>
              <NavItem>Link 3</NavItem>
              <NavItem>Link 4</NavItem>
            </div>
          </NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem title={"Accordion"} type="accordion">
            <div>
              <NavItem>Link 1</NavItem>
              <NavItem>Link 2</NavItem>
              <NavItem>Link 3</NavItem>
              <NavItem>Link 4</NavItem>
            </div>
          </NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
        </NavItemList>
        {/* </div> */}
      </section>
      <div className={classes.desktopNavList}>
        <div>
          <img
            src={"https://image.flaticon.com/icons/svg/149/149071.svg"}
            alt="admin logo"
          />
          <span>Admin</span>
        </div>
        <NavItemList>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem title={"Accordion"} type="accordion">
            <div>
              <NavItem>Link 1</NavItem>
              <NavItem>Link 2</NavItem>
              <NavItem>Link 3</NavItem>
              <NavItem>Link 4</NavItem>
            </div>
          </NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem title={"Accordion"} type="accordion">
            <div>
              <NavItem>Link 1</NavItem>
              <NavItem>Link 2</NavItem>
              <NavItem>Link 3</NavItem>
              <NavItem>Link 4</NavItem>
            </div>
          </NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem title={"Accordion"} type="accordion">
            <div>
              <NavItem>Link 1</NavItem>
              <NavItem>Link 2</NavItem>
              <NavItem>Link 3</NavItem>
              <NavItem>Link 4</NavItem>
            </div>
          </NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem title={"Accordion"} type="accordion">
            <div>
              <NavItem>Link 1</NavItem>
              <NavItem>Link 2</NavItem>
              <NavItem>Link 3</NavItem>
              <NavItem>Link 4</NavItem>
            </div>
          </NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem title={"Accordion"} type="accordion">
            <div>
              <NavItem>Link 1</NavItem>
              <NavItem>Link 2</NavItem>
              <NavItem>Link 3</NavItem>
              <NavItem>Link 4</NavItem>
            </div>
          </NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem title={"Accordion"} type="accordion">
            <div>
              <NavItem>Link 1</NavItem>
              <NavItem>Link 2</NavItem>
              <NavItem>Link 3</NavItem>
              <NavItem>Link 4</NavItem>
            </div>
          </NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
          <NavItem>hello</NavItem>
        </NavItemList>
      </div>
    </div>
  );
};

export default SideBar;
