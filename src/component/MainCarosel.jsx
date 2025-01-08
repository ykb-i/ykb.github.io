import Carousel from 'react-bootstrap/Carousel';
import './MainCarosel.css'; // 일반적인 CSS 파일 import

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div 
          className="slidercontents" 
          style={{ backgroundImage: `url(/img/slider1.jpg)` }}
        >
          <div className="wrapText">
            <h1>Organic fresh fruits for your health</h1>
            <div className="d-none d-md-block">
              <p>
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Mauris eleifend sagittis mollis. Nulla finibus arcu eu tortor
                gravida aliquet
              </p>
            </div>
            <button>SHOP NOW</button>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div 
          className="slidercontents" 
          style={{ backgroundImage: `url(/img/slider2.jpg)` }}
        >
          <div className="wrapText">
            <h1>Organic fresh fruits for your health</h1>
            <div className="d-none d-md-block">
              <p>
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Mauris eleifend sagittis mollis. Nulla finibus arcu eu tortor
                gravida aliquet
              </p>
            </div>
            <button>SHOP NOW</button>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div 
          className="slidercontents" 
          style={{ backgroundImage: `url(/img/slider3.png)` }}
        >
          <div className="wrapText">
            <h1>Organic fresh fruits for your health</h1>
            <div className="d-none d-md-block">
              <p>
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Mauris eleifend sagittis mollis. Nulla finibus arcu eu tortor
                gravida aliquet
              </p>
            </div>
            <button>SHOP NOW</button>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
