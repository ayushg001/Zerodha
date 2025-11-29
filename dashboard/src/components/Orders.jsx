import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {

    const [ allOrders , setAllOrders ] = useState([]);

    useEffect( () => {
      axios.get("http://localhost:3002/allOrders")
      .then( (res) => {
        console.log(res.data);
        setAllOrders(res.data);
      })
    } , [])

  return (
    <div className="orders">
      {allOrders.length === 0  ? (
         <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
      ) : (
        
        

      <div className="order-table">
        <h3 className="title">Orders ({allOrders.length})</h3>
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>

          </tr>

          {allOrders.map( (stock , index) => {
            // const curValue = stock.price * stock.qty;
            // const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            // const profClass = isProfit ? "profit" : "loss";
            // const dayClass = stock.isLoss ? "loss" : "profit";

            return(
               <tr key={index}>
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.price.toFixed(2)}</td>
            <td>{stock.mode}</td>
          </tr>
            )
          } )};
        </table>
      </div>
      )}
     
    </div>
    
  );
};

export default Orders;
