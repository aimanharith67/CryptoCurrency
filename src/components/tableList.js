import React, {useState} from "react";
import {Table} from 'react-bootstrap'
import "../style.css";


export default function TableItems({tableList,search}) {

  return (
    <div>
     {
       tableList.filter((val) =>{
         if(search == ""){
           return val
         } else if (val.name.toLowerCase().includes(search.toLowerCase())){
           return val
         } 
       }).map((tab,index) => {
        return(
      <Table>
        <tbody>
          <tr key={index}>
            <td><img src={tab.image} alt="something" style={{width:'20%',marginRight:'10px'}}/>{tab.name}</td>
            <td>{tab.symbol}</td> 
            <td>${tab.current_price.toFixed(2)}</td>
            <td>${tab.market_cap.toFixed(2)}</td>
            <td>{tab.price_change_percentage_24h}</td>
            <td>{tab.market_cap}</td>
          </tr>
        </tbody>
      </Table>
          )
       })
     }


    </div>
  );
}
