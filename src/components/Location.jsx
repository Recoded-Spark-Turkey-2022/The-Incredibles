import React, {useState} from 'react';
import Worldmap from '../assets/pics/world-map.svg';
import LocationSlide from './LocationSlide';


function Location() {
  const slides = [
    {text: "Two lines of a short testimonial from someone want to say something, and can say more to explain.", author:"Omer,"},
    {text: "onelines of a short testimonial from someone want to say something, and can say more to explain.", author:"Ahmad,"},
    {text: "Two lines of a short testimonial from someone want to say something, and can say more to explain.", author:"Miray,"},
    {text: "three lines of a short testimonial from someone want to say something, and can say more to explain.", author:"Rabia,"},
  ]
  const [current, setCurrent] = useState (0)

  // for making the pointer working bellow the text
  const goToSlide = (slideIndex) => {
    setCurrent(slideIndex);
  }

  return (
    <div 
    name= 'main'
    className= ' py-44 px-14 mx-20 flex justify-between  max-lg:flex-col '>
      <div 
      name= 'Photo' 
      className=' h-fit'>
        <img src={Worldmap} alt="world-map" />
      </div>


      <div 
      name='paragraphs' 
      className=' h-fit w-1/3 flex justify-center flex-col align-middle '>
       <LocationSlide data= {slides[current]}/> 
       
{/* points for clicking and slicking */}
<div className=' flex pt-4 '>
  {slides.map((slide, slideIndex)=> (
    <div 
        key={slideIndex} onClick={()=> goToSlide(slideIndex)}
        className =' '> 

        
       <button
          data-bs-target="#carouselDarkVariant"
          data-bs-slide-to="2"
          className="focus:border-blue-500 focus:bg-blue-500 rounded-full p-1 mx-1 border-solid border-2 border-gray-300"
          aria-current="false"
          aria-label="Slide 1"
        ></button>
        
        
        </div>
      ))}
     </div>

      </div>
      
      

    </div>
  )
}

export default Location
