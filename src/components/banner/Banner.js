import React from 'react'
import './Banner.css'
import bannerPhoto from '../../assets/Аннотация 2024-07-29 232153.png'


function Banner() {
  return (
    <div className='banner container'>
      <img src={bannerPhoto} alt="" />
    </div>
  )
}

export default Banner