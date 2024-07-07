import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

import img1 from '../img/001.png'
import img2 from '../img/002.png'
import img3 from '../img/003.png'

function Carousel_() {
    return (
      <div style={{ width: "60%", margin: "auto", marginTop: "20px" }}>
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
        </CCarousel>
      </div>
    );
  }

  export default Carousel_;