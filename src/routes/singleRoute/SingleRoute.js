//  import React from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../../static/index'
import { DATA } from '../../static/index';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { incCart } from '../../redux/cartSlice';


import './SingleRoute.css'
function SingleRoute({data}) {
  const param = useParams();
  console.log(param);

  const item = DATA.find((item) => item.id === param.id)
  console.log(item);

  const dispatch = useDispatch();
  
 
  
  return (
    <div className='main_singleRoute'>
        <br />
      <div className="container">
       
        <div className="singlRoute">
          <img src={item.url[0]} width={400} alt="" />
          <div className="logo">
            
            <div className="logo__000">
            <h2>Texnika haqida malumot</h2>
            <br />
            <div className="the">
            
          
            <span className='title'> Nomi: {item.title}</span>
            
            </div>
           <br />
           
            <div className="the">
            
          
            <p className='title'> {item.malumot}</p>
            
            </div>
    {/* {
      data.map((el, index) => {
        return( */}

      <div
        // onClick={() => dispatch(incCart(el))}
       
      >
       <button className='btnnn1'>Buyurtma bering</button>
      </div>
        {/* )
    
      })
    }  */}
    </div>
          </div>
         




        </div>
      </div>  
    </div>
  )}
        


export default SingleRoute