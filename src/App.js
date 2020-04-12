import React from 'react';
import SideBar from './components/SideBar/SideBar';
import DashBoard from './components/DashBoard/DashBoard';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.AppContainer}>
      <SideBar />
      <DashBoard />
    </div>
  );
}

export default App;
