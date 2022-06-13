import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import SwiperImage from './SwiperImage';

const RichestPersonsImages = () => {
    const lists=[
        {
            img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit_%28cropped%29.jpg/220px-Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit_%28cropped%29.jpg',
            para:'Warren Edward Buffett is an American business magnate, investor, and philanthropist. He is currently the chairman and CEO of Berkshire Hathaway.'
        },
        {
            img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Bernard_Arnault_%283%29_-_2017_%28cropped%29.jpg/220px-Bernard_Arnault_%283%29_-_2017_%28cropped%29.jpg',
            para:'Bernard Jean Étienne Arnault is a French business magnate, investor, and art collector the second-richest person in the world and the richest person from Europe.'
        },
        {
            img:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg/220px-Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg',
            para:'Lawrence Edward is an American computer scientist and internet entrepreneur. He is best known as one of the co-founders of Google, along with Sergey Brin.'
        },
        {
            img:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sergey_Brin_cropped.jpg/220px-Sergey_Brin_cropped.jpg',
            para:'Sergey Mikhailovich Brin  is an American business magnate, computer scientist, and Internet entrepreneur. Together with Larry Page, he co-founded Google.'
        },
        {
            img:'https://upload.wikimedia.org/wikipedia/commons/6/69/Mukesh_Ambani.jpg',
            para:'Mukesh Dhirubhai Ambani is an Indian business magnate, chairman, managing director, and the largest shareholder of Reliance Industries Ltd. '
        },
        
    ]
  return (
    <div style={{overflow:'visible',width:'100%',alignItems:'center',padding:'20px'}}>
        <h1 style={{color:'gray'}}><u>Top Billionaires</u></h1>
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        pagination={{clickable:true}}
        >
            {
                lists.map((item,id)=>{
                    return(
                        <SwiperSlide key={id}>
                            <SwiperImage img={item.img} para={item.para} />
                      </SwiperSlide>
                    )
                })
            }

           

        </Swiper>
      
    </div>
  )
}

export default RichestPersonsImages
