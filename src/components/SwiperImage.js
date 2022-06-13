import React from 'react'

const SwiperImage = ({img,para}) => {
  return (
    <div className='swiper-card'>
        <div className='scard-main'>
            <img src={img} alt=""/>
            <p>{para}</p>
        </div>
    </div>
  )
}

export default SwiperImage