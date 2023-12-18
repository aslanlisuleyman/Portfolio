import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import './Detail.css'

const Detail = () => {
    const { id } = useParams()
    
    const [details, setDetails] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3000/books/${id}`).then(res => {
            setDetails(res.data)
            console.log(res.data)
        })
    }, [])
    return (
        <div className='details'>
            <img src={details.image} alt="" />
            <div>
                <div className='content'> <p>{details.name}</p></div>
                <div className='content'><p>{details.quantityPerUnit}</p></div>
                <div className='content'><p>{details.unitPrice}</p></div>
            </div>
            
        </div>
    )
}

export default Detail
