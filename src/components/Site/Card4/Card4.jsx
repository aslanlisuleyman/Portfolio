import React from 'react'
import "./Card4.css"
const Card4 = () => {
  return (
    <div className='container'>
      <div className='div11'>
        <img style={{width:"240px",height:"150px",marginTop:"50px"}} src="https://htmldemo.net/pustok/pustok/image/others/blog-grid-1.jpg" alt="" />
        <div style={{width:'268px'}} className='div11__content'>
            <div style={{display:'flex',gap:"20px",padding:'10px'}} className='div1__content__img'>
                <div>
                    <div style={{backgroundColor:"lightgray",color:"green",height:"23px",width:"30px",textAlign:"center"}}>13</div>
                    <p style={{backgroundColor:'green',color:'white'}}>AUG</p>
                </div>
                <div style={{backgroundColor:'white',fontSize:'16px'}} className='How'>How To Water Care <br />For Mounted</div>
            </div>
            <div style={{backgroundColor:'white',fontSize:'14px',padding:'10px'}} ><i class="fas fa-user-edit"></i> Post by Hastech </div>
            <div> </div>
            <div style={{backgroundColor:'white',fontSize:'14px',padding:'10px'}}>
            Virtual reality and 3-D technology are <br /> already well-established in the <br /> entertainment...
            </div>
        </div>
      </div>

      <div className='div11'>
        <img style={{width:"240px",height:"150px",marginTop:"50px"}} src="https://htmldemo.net/pustok/pustok/image/others/blog-grid-3.jpg" alt="" />
        <div style={{width:'268px'}} className='div11__content'>
            <div style={{display:'flex',gap:"20px",padding:'10px'}} className='div1__content__img'>
                <div>
                    <div style={{backgroundColor:"lightgray",color:"green",height:"23px",width:"30px",textAlign:"center"}}>19</div>
                    <p style={{backgroundColor:'green',color:'white'}}>JAN</p>
                </div>
                <div style={{backgroundColor:'white',fontSize:'16px'}} className='How'>How To Water Care <br />For Mounted</div>
            </div>
            <div style={{backgroundColor:'white',fontSize:'14px',padding:'10px'}} ><i class="fas fa-user-edit"></i> Post by Hastech </div>
            <div> </div>
            <div style={{backgroundColor:'white',fontSize:'14px',padding:'10px'}}>
            Virtual reality and 3-D technology are <br /> already well-established in the <br /> entertainment...
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card4
