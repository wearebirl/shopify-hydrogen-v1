import React, {useState} from 'react';
import { LeftArrow } from '../icons/LeftArrow';
import { RightArrow } from '../icons/RightArrow';

const Carousel = ({slides}) => {
  const [currentSlide, setCurrentSlide] = useState(0);



  function nextSlide(){
    // if the current slide is the last slide, go back to the first slide
    if(currentSlide === slides.length - 1){
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }
  }

  function prevSlide(){
    // if the current slide is the first slide, go to the last slide
    if(currentSlide === 0){
      setCurrentSlide(slides.length - 1)
    } else {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
    <div className="relative mx-6 my-8 w-full max-w-50% p-10 min-h-[356px] rounded-md border border-gray-300 bg-white shadow-[0_10px_16px_0_rgba(0,0,0,0.05)]">
      <h2 className="text-black mt-0 text-center font-sans text-[22px] font-medium leading-[16px] w-full pb-7 border-b border-[#E1E3E5]">
        How it Works
      </h2>
      {/* main carousel */}
      <div className={`block`}>
        {slides &&
          slides.map((slide, index) => (
            <div
              key={index}
              className={`${
                currentSlide === index ? 'flex flex-col' : 'hidden'
              } w-full py-[35px]`}
            >
              {/* <img src={}/> */}
              <h3 className="text-[#585858] my-2 mx-0 text-center font-sans text-lg font-semibold">
                {slide.title}
              </h3>
              <p className="text-[#585858] text-center font-sans text-sm font-normal leading-5 mx-auto max-w-[295px] min-h-[60px]">
                {slide.text}
              </p>
            </div>
          ))}
      </div>
      {/* main carousel */}

      <div className={`flex justify-center mt-5 w-full items-center`}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              currentSlide === index ?  'bg-black': 'bg-[#C4C4C4]'
            } w-2 h-2 rounded-[50%] block mx-1 cursor-pointer`}
          ></div>
        ))}
      </div>
      {/* carousel controls */}
      <div className="w-full  flex justify-between absolute top-[calc(50%-17px)] px-10 left-0">
        <button onClick={() => prevSlide()} 
        className="w-11 h-11 text-black px-[17px] py-[22px] bg-white rounded-[50%] shadow flex-col justify-start items-start gap-2.5 inline-flex" 
        ><LeftArrow/></button>
        <button onClick={() => nextSlide()}
        className="w-11 h-11 text-black px-[17px] py-[22px] bg-white rounded-[100px] shadow flex-col justify-start items-start gap-2.5 inline-flex" 
        
        ><RightArrow/></button>
      </div>
      {/* carousel controls */}
    </div>
  );
};

export default Carousel;
