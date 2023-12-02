import Image from 'next/image';

interface IService {
  images: string;
  title: string;
  description: string;
}

function Services({ body }: { body: IService }) {
  const { images, title, description } = body;
  return (
    <div className="flex">
      <Image src={images} width={1000} height={1000} className='w-[100px] h-[100px] object-cover' alt="..." priority></Image>
      <div className="flex flex-col gap-2 p-3 md:p-5">
        <h1 className='font-bold text-xl md:text-2xl'>{title}</h1>
        <p className='font-medium text-[13px] md:text-sm text-gray-500'>{description}</p>
      </div>
    </div>
  );
}

export default Services;
