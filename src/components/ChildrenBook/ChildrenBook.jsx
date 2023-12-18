import React from 'react'
import "./Children.css"
import { useSelector } from 'react-redux'
import Card2 from '../Site/Card2/Card2'

const ChildrenBook = () => {
  const { data } = useSelector(state => state.data)
  return (
    
    <div style={{marginTop:"30px",position:'relative'}}>
      <h3 style={{marginLeft:'43%',padding:'30px'}}>CHILDREN’S BOOKS</h3>
        <div className='cards2'>
          {
            data.map((item,index)=>{
              return <Card2 item={item} key={index}/>
            })
          }
        </div>

        <div className='children'>
            <div className='img_Chi' >
                <img className='cimg1' src="https://htmldemo.net/pustok/pustok/image/bg-images/promo-banner-mid.jpg" alt="" />
                
                <div style={{position:'absolute',top:"70%",marginLeft:"65px",textAlign:'center',display:'flex',flexDirection:'column',gap:"15px"}}>  
                    <h2 style={{fontSize:'25px'}}>BUY 3. GET FREE 1.</h2>
                <p  style={{fontSize:'17px'}}> <i>50% off for selected products in Pustok</i> </p>
                <button className='chib' style={{marginLeft:'90px',border:'1px solid red',width:'120px',height:'39px',borderRadius:'4px'}}>See More</button>
                </div>
               
            
            
            </div>
            <div className='img_Chi'>
                <img className='cimg2' src="https://htmldemo.net/pustok/pustok/image/bg-images/promo-banner-small.jpg" alt="" />
                
                <div style={{position:'absolute',top:"65%",marginLeft:"25px",display:'flex',flexDirection:'column',gap:"15px"}}>  
                   
                <p  style={{fontSize:'17px',color:"#62ab00",fontSize:'25px'}}>$26.00</p>
                 <h3 style={{fontSize:'25px',color:'white'}}>Praise For <br />The Night Child</h3>
                <button className='chibb' style={{border:'2px solid #62ab00 ',width:'120px',height:'39px',borderRadius:'4px'}}>Buy Now</button>
                </div>
                
                </div>
        </div>



    </div>
  )
}

export default ChildrenBook