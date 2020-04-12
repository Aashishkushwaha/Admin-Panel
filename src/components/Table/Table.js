import React, { useEffect, useState } from "react";
import classes from "./Table.module.css";
import data from "../../tableData";

const Table = (props) => {
  let [newData, setData] = useState([]);
  useEffect(() => {
    setData(data.data);
    console.log(`data:`);
    console.log(newData);
    console.log(`------`);
  });

  return (
    <div className={classes.tableWrapper}>
      <table>
        <thead>
          <tr>
            <th>&amp;</th>
            <th colSpan="7">Admin</th>
            <th colSpan="4">Users</th>
            <th>Difference</th>
          </tr>
          <tr>
            <th>Currency</th>
            <th>Alphaex</th>
            <th>Alphaex Auto</th>
            <th>BitFinex</th>
            <th>Indodax</th>
            <th>Liquid</th>
            <th>Reserve</th>
            <th>Total</th>
            <th>Users</th>
            <th>In Thade</th>
            <th>Profit</th>
            <th>Total</th>
            <th>Difference</th>
          </tr>
        </thead>
        <tbody>
          {
            Object.keys(newData).map(key => {
              let [Currency,Alphaex,AlphaexAuto,BitFinex,Indodax,Liquid,Reserve,Total,Users,InThade,Profit,Difference] = newData[key];
              return (
                <tr>
                  <td>{Currency}</td>
                  <td>{Alphaex}</td>
                  <td>{AlphaexAuto}</td>
                  <td>{BitFinex}</td>
                  <td>{Indodax}</td>
                  <td>{Liquid}</td>
                  <td>{Reserve}</td>
                  <td>{Total}</td>
                  <td>{Users}</td>
                  <td>{InThade}</td>
                  <td>{Profit}</td>
                  <td>{Total}</td>
                  <td>{Difference}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Table;