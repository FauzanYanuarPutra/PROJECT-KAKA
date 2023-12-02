// import Carousel from '@/components/carousel'
import Cards from '@/components/Card';
import Carousels from '@/components/Carousel'
import Container from '@/components/Container';
import Services from '@/components/Service';
import { IconSearch } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link';

export default function Home() {

  const images = [
    "https://source.unsplash.com/random/700x700/?electronics",
    "https://source.unsplash.com/random/800x800/?electronics",
    "https://source.unsplash.com/random/800x800/?electronics",
    "https://source.unsplash.com/random/900x900/?electronics",
    "https://source.unsplash.com/random/1000x1000/?electronics",
    "https://source.unsplash.com/random/1100x1100/?electronics",
  ];

  const services = [
    {
      images: "/Project.png",
      title: "PROJECT",
      description: "Kami siap mensuport pendingin ruangan dalam proyek pembangunan Anda.",
    },
    {
      images: "/tools.png",
      title: "MAINTENANCE",
      description: "Kami siap melayani pemeliharaan rutin perabotan elektronik rumah tangga Anda.",
    },
    {
      images: "/Engine.png",
      title: "INSTALLATION",
      description: "Kami melayani jasa pemasangan unit perabotan elektronik rumah tangga Anda.",
    },
    {
      images: "/headquarter.png",
      title: "DEALER",
      description: "Kami menjualkan produk dalam skala besar dengan harga dan kualitas yang terbaik",
    },
    {
      images: "/download.svg",
      title: "SERVICE CENTER",
      description: "Kami melayani jasa perbaikan perabotan elektronik rumah tangga Anda.",
    },
    {
      images: "/download (1).svg",
      title: "RETAIL",
      description: "Kami menjualkan produk dalam skala retail dengan harga dan kualitas yang terbaik",
    }
  ]


  
  return (
    <div>
      <Carousels images={images}></Carousels>
      <Container>
        <div className='my-10 mx-2 '>
          <h1 className='text-xl font-semibold mb-4'>Recomendation Product</h1>

          <div className='h-[318px] rounded-lg  overflow-hidden grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5  gap-2 md:gap-5 '>
            {Array.from({ length: 5 }).map((_, index) => (
              <Cards key={index} className="mb-12" />
            ))}
          </div>
        </div>


        <div className='my-20 mx-2'>
          <div className='flex flex-col justify-center items-center gap-2  mb-10'>
            <div className='flex justify-center items-center gap-4  '>
              <div className='w-20 h-[3px] bg-gray-500 opacity-50'></div>
            <h1 className='text-xl md:text-3xl font-black text-center'>OUR SERVICES</h1>
            <div className='w-20 h-[3px] bg-gray-500 opacity-50'></div>
            </div>
            <p className='text-center font-medium text-gray-500 text-md md:text-lg'>Pelayanan kami memprioritaskan kepuasan pelanggan</p>
          </div>
          <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {services.map((service, index) => (
              <Services key={index} body={service} />
            ))}
          </div>
        </div>

        <div className='my-10 mx-2    '>
          <h1 className='text-xl font-semibold mb-4'>Our Product</h1>

          <div className='h-[616px] md:h-[637px] rounded-lg  overflow-hidden grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5  gap-2 md:gap-5 '>
            {Array.from({ length: 10 }).map((_, index) => (
              <Cards key={index} className="" />
            ))}
          </div>
          <div className='flex justify-center my-5 mb-20'>
            <Link href="/products" className='bg-green-500 text-white px-4 py-2 rounded-full'>
              Show More
            </Link>
          </div>
        </div>

        <div className='my-10 mx-2 '>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 bg-gray-200 p-5 lg:p-10 rounded-lg'>
            <div className='order-2 lg:order-1 flex justify-center items-center '>
              <div className='flex flex-col gap-4'>
                <p>
                  CV Syailendra Elektronik adalah perusahaan yang berdiri sejak tahun 2007. Kami bergerak dibidang  proyek, pemasangan, penjualan, perbaikan, dan pemeliharaan rutin alat elektronik rumah tangga dan spesialis pendingin ruangan (AC).
                </p>
                <div className='flex gap-3'>
                  <div className='border-2 border-green-500  text-green-500 px-4 py-2 rounded-full flex justify-center items-center'>About US</div>
                  <div className='bg-green-500 text-white px-4 py-2 rounded-full flex justify-center items-center'>Contact US</div>
                </div>
              </div>
            </div>
            <div className='order-1 lg:order-2'>
              <Image src="https://source.unsplash.com/random?company" width={1000} height={1000} className='w-full h-[300px] object-cover rounded-lg' alt="..."></Image>
            </div>
          </div>
        </div>

        <div className='my-10 mx-2    '>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 p-5 lg:p-10 rounded-lg '>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className='flex flex-col justify-center items-center gap-2'>
                <div className='w-14 h-14 bg-gray-300 rounded-full'></div>
                <p>Value Perusahaan</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

    </div>
  )
}

