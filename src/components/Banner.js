import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Banner() {
  return (
    <div className='relative'>
        <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false}>
            <div>
                <img loading='lazy' src='https:links.papareact.com/gi1'/>
            </div>

            <div>
                <img loading='lazy' src='https:links.papareact.com/6ff'/>
            </div>

            <div>
                <img loading='lazy' src='https:links.papareact.com/7ma'/>
            </div>
        </Carousel>
      {/* <h1>MAAKII CHUU</h1> */}
    </div>
  )
}

export default Banner
