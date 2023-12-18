
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/orders").then(res => {
      setOrders(res.data);
    });
  }, []);

  return (
    <div style={{ paddingTop: '90px', backgroundColor: 'white', paddingLeft: '40px' }}>
      <ul style={{display:'flex',justifyContent:'space-around',listStyle:'none'}}>
        {orders.map((order, orderIndex) => {
          return (
            <li key={orderIndex}>
             <p style={{marginRight:'50px',backgroundColor:'red',textAlign:'center',height:'30px',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'10px',color:'white'}}>Sifarişin: {order.totalPrice}AZN</p> 
              <ul style={{display:'flex',flexDirection:'column'}}>
                {order.items.map((item, itemIndex) => (
                  <li style={{marginTop:'20px'}} key={itemIndex}>
                     <p>Sifarişin məhsulu: {item.totalPrice}AZN</p>
                    <img  style={{width:'150px',height:'100px',}} src={item.product.image} alt="" />
                    <p style={{marginLeft:'30px'}}>{item.product.name}</p>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Order;
