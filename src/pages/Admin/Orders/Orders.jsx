import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Orders = () => {
  const [orders,setOrders]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/orders").then(res=>{
      setOrders(res.data)
    })
  },[])
  return (
    <div style={{paddingTop:'90px',backgroundColor:'white',paddingLeft:'40px'}}>
      <ul>

         {
        orders.map((item,index)=>{ 
          return(
             <li key={index}>{item.totalPrice}AZN 

             
          <select name="" id="" onChange={(e)=>{
            axios.put(`http://localhost:3000/orders/${item.id}`,{...item,status:e.target.value}).then(res=>console.log(res))
          }}>
           <option value="pending">pending</option>
           <option value="acepted">Accepted</option>
           <option value="onCourier">On Courier</option>
           <option value="rejected">Rejected</option>

          </select>
          
          </li>
          )
         
        })
      }
      </ul>
     
    </div>
  )
}

export default Orders