import React from 'react'

const Womensfashion = (props) => {
    const {title, image1, image2, image3, image4, image5, image6}=props.ladiesfashion
    return (
        <div className='imagesection'>
         <h2>{title}</h2>
         <div className='ladiesbanner '>
         <img src='assets/LadiesBanner.gif' alt=''></img>
         </div>
        

         <div className='womenimages'>
          <img src={image1} alt={title}></img>
          <img src={image2} alt={title}></img>
          <img src={image3} alt={title}></img>
          <img src={image4} alt={title}></img>
          <img src={image5} alt={title}></img>
          <img src={image6} alt={title}></img>
         </div>
        </div>
      )
    }
    

export default Womensfashion
