import React from 'react'
import './Card2.css'
const Card2 = ({item}) => {
  return (
    <div className='card2'>
        <div>
             <img src={item.image} alt="" />
        </div>
        <div>
            <p>{item.name}</p>
            <div style={{display:"flex",gap:"15px",justifyContent:"center",marginLeft:'8px',fontSize:'15px'}}> 
                <div className='price'> ${ item.unitPrice}</div>
                <div style={{color:'lightgray'}}><del>$21.20</del></div>  
                <div className='del'>20% </div>
            </div>
        </div>
    </div>
  )
}

export default Card2
