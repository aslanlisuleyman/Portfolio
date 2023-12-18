import React from 'react'
import './SectionCard.css'

const SectionCard = ({item}) => {
  return (
      
    // </div>
    <div className='swi2'>
        <div>
             <img src={item.image} alt="" />
        </div>
        <div>
            <p>{item.name}</p>
            <div style={{display:"flex",gap:"15px",justifyContent:"center",marginLeft:'8px',fontSize:'15px'}}> 
                <div className='pricee'> ${ item.unitPrice}</div>
                <div style={{color:'lightgray'}}><del>$21.20</del></div>  
                <div className='dell'>20% </div>
            </div>
        </div>
    </div>
  )
}

export default SectionCard