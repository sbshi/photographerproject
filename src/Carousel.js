import React from 'react';
import './Carousel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import firstcar from './assets/firstcar.png';
import secondcar from './assets/secondcar.png';
import thirdcar from './assets/thirdcar.png';

class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
    };
    return (
      <Slider className='shami' {...settings}>
        <div className='firstcar' style={{width:"460px"}}>
        </div>
        <div className='secondcar' style={{width:"460px"}}>
        </div>
        <div className='thirdcar' style={{width:"460px"}}>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
