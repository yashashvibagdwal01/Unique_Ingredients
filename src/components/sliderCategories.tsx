import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      style={{ 
        ...style, 
        display: "circle", 
        right: "-30px",
        background: "red"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      style={{ 
        ...style, 
        display: "circle", 
        left: "-30px", 
        zIndex: 1,
        background: "red" 
      }}
      onClick={onClick}
    />
  );
}

function CustomArrows() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
    prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
  };

  const items = [
    "Indian", "Korean", "Turkish", "Italian", "Thai", 
    "Japanese", "Chinese", "Greek", "Spanish", "Mexican", "French"
  ];

  return (
    <div className="slider-container rounded-lg relative px-8">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="px-2">
            <div 
              className={`cursor-pointer p-2 rounded-full transition-colors duration-300 ${
                selectedItem === index ? 'bg-[#FFC4C4]' : 'hover:bg-[#FFC4C4]'
              }`}
              onClick={() => setSelectedItem(index)}
            >
              <h3 className={`text-center ${selectedItem === index ? 'text-[#C30F16]' : 'text-black'}`}>
                {item}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomArrows;
