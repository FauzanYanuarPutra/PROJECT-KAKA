import { Carousel } from 'flowbite-react';
import Image from 'next/image';

function Carousels({images}: any) {
  return (
    <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]  ">
      <Carousel  pauseOnHover>
        {images.map((image: any) => (
          <Image key={image} src={image} width={1000} height={1000} className='w-full h-full object-cover' alt="..." loading="eager"  priority />
        ))}
      </Carousel>
    </div>

  );
}

export default Carousels;
