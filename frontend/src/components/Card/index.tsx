"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ICard {
  id?: string;
  images?: string;
  name?: string;
  description?: string;
  className?: string;
}

function Cards({ id, images, name, description, className = "" }: ICard) {
  const navigation = useRouter();
  
  return (
    <>
      <div onClick={(e) => { e.preventDefault(); navigation.push(`/products/${id}`); }} className={`h-[300px] group bg-white shadow-lg rounded-lg overflow-hidden  cursor-pointer ${className ? className : ""} `}>
        <div className='relative h-[150px] overflow-hidden'>
          <Image src="https://source.unsplash.com/random/1400x1600/?electronics" alt="image" width={500} height={500} className='w-full h-[150px] object-cover group-hover:scale-110 transition duration-400'  priority></Image>
          <div className='absolute bottom-0 left-0 bg-red-500 text-white px-6 py-1 text-[12px]'>
            Diskon 50%
          </div>
        </div>
        <div className='grid gird-cols-1  h-[150px] p-4 md:p-5  items-center w-full'>
          <a href="#">
            <h5 className="text-[12px] md:text-[13px] lg:text-[15px] md:text-md font-medium tracking-tight text-gray-900 dark:text-white line-clamp-2">
              {name} lorem20
            </h5>
          </a>
          <div className=" flex items-center">
            <svg
              className="h-3 w-3 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <svg
              className="h-3 w-3 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <svg
              className="h-3 w-3 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <svg
              className="h-3 w-3 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <svg
              className="h-3 w-3 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className="text-smml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-[9px] ml-1 font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
              5.0
            </span>
          </div>
          <div className="flex items-end justify-between text-sm ">
            <div className='flex flex-col '>
              <span className="font-medium text-[9px] md:text-[10px] lg:text-[12px] text-gray-400 dark:text-white line-through">Rp. 1.000.000</span>
              <span className="font-medium text-[12px] md:text-[13px] lg:text-[15px] text-green-600 dark:text-white">Rp. 250.000</span>
            </div>
            <div>
              <span className='font-medium text-[9px] md:text-[10px] lg:text-[12px]'>120 terjual</span>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Cards