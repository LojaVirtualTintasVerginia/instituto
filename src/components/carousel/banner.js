import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Banner() {

  return (
                <Carousel>
                                <div>
                <img src="/img/vida-no-tom.png" />

                    
                </div>
                <div>

                    <img src="/img/banner-1.png" />
                    
                </div>
            </Carousel>
  )
}