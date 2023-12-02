"use client"
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import { useState } from 'react';

function CustomCarousel({ images }: any) {
  const [activeIndex, setActiveIndex] = useState<any>(0);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
      <Carousel onSlideChange={handleSlideChange} pauseOnHover>
        {images.map((image: any, index: number) => (
          <div key={index} className="relative">
            <Image
              src={image}
              width={1000}
              height={1000}
              className={`w-full h-full object-cover ${activeIndex === index ? 'border-b-2 border-blue-500' : ''}`}
              alt={`Slide ${index + 1}`}
              loading="eager"
              priority
            />
          </div>
        ))}
      </Carousel>

      <div  className='flex gap-4 mt-4 justify-center'>
        {images.map((_: any, index: any) => (
          <Image
            key={index}
            src={images[index]}
            width={100}
            height={100}
            className={`w-14 h-14 ${activeIndex === index ? 'border-2 border-blue-500' : 'bg-gray-300'}`}
            alt="..."
            quality={100}
            loading="eager"
            priority
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default CustomCarousel;
