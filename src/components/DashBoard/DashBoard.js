import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import NavBar from "./NavBar";
import InfoBox from "./InfoBox";
import classes from "./DashBoard.module.css";
import Table from "../Table/Table";

const DashBoard = (props) => {
  let [showAlert, setShowAlert] = useState(true);
  let alert = showAlert ? (
    <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
      <Alert.Heading>Congratulation! Signed in successful!</Alert.Heading>{" "}
    </Alert>
  ) : null;
  return (
    <div className={classes.DashBoardWrapper}>
      <NavBar />
      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          color: "#aaa",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: ".4rem 1rem",
          borderBottom: "2px solid #dcdcdc",
        }}
      >
        <h1>Dashboard</h1>
      </div>
      <div style={{ margin: "1rem 2rem" }}>{alert}</div>
      <div className={classes.InfoBoxWrapper}>
        <InfoBox value="13204" title="Total User" />
        <InfoBox value="13204" title="Total User" />
        <InfoBox value="13204" title="Total User" />
        <InfoBox value="13204" title="Total User" />
      </div>
      {/* <div>
        <table>
          <thead>
            <tr>
              <th>one</th>
              <th>two</th>
              <th>three</th>
              <th>four</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>data</td>
              <td>data</td>
              <td>data</td>
              <td>data</td>
              <td>data</td>
            </tr>
            <tr>
              <td>data</td>
              <td>data</td>
              <td>data</td>
              <td>data</td>
              <td>data</td>
            </tr>
            <tr>
              <td>data</td>
              <td>data</td>
              <td>data</td>
              <td>data</td>
              <td>data</td>
            </tr>
            <tr>
              <td>data</td>
              <td>data</td>
              <td>data</td>
              <td>data</td>
              <td>data</td>
            </tr>
            <tr>
              <td>data</td>
              <td>data</td>
              <td>data</td>
              <td>data</td>
              <td>data</td>
            </tr>
            <tr>
              <td>data</td>
              <td>data</td>
              <td>data</td>
              <td>data</td>
              <td>data</td>
            </tr>
            <tr>
              <td>data</td>
              <td>data</td>
              <td>data</td>
              <td>data</td>
              <td>data</td>
            </tr>
            <tr>
              <td>data</td>
              <td>data</td>
              <td>data</td>
              <td>data</td>
              <td>data</td>
            </tr>
          </tbody>
        </table>
      </div> */}
      <Table />
    </div>
  );
};

export default DashBoard;
