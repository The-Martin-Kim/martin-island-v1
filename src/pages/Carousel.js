import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

import img1 from '../img/001.jpg'
import img2 from '../img/002.jpg'
import img3 from '../img/003.jpg'
import img7 from '../img/007.jpg'
import img8 from '../img/008.jpg'
import img9 from '../img/009.jpg'

function Carousel_() {
    return (
      <div style={{ width: "80%", margin: "auto", marginTop: "20px" }}>
        <CCarousel controls dark>
          <CCarouselItem>
            <CImage className="d-block w-100" src={img1} alt="slide 1" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100 carousel-image" src={img2} alt="slide 2" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100 carousel-image" src={img3} alt="slide 3" />
          </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100 carousel-image" src={img7} alt="slide 4" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100 carousel-image" src={img8} alt="slide 5" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100 carousel-image" src={img9} alt="slide 6" />
            </CCarouselItem>
        </CCarousel>
      </div>
    );
  }

  export default Carousel_;