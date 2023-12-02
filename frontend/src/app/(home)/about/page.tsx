import Container from "@/components/Container";
import Image from "next/image";

export default function DijualPage() {
  return (
    <div>
      <Image src="https://source.unsplash.com/random?banner-company" alt="about" width={500} height={500} quality={100} className="w-full h-[40vh] lg:h-[50vh] object-cover mb-10" priority></Image>
      <Container>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          <div className='order-2 lg:order-1 flex flex-col gap-4 '>
            <div className='flex flex-col gap-4 '>
              <p className="break-words line-clamp-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eius perferendis cumque quibusdam saepe quisquam non quis, suscipit quod ducimus alias laudantium excepturi fugiat tenetur similique minus magni! Facere aut deserunt dolorem quis dolore, molestias, mollitia harum velit voluptas ducimus libero sequi eius quam enim. Accusantium fuga, earum atque illo blanditiis quam expedita inventore, quia velit dolore consectetur commodi? Adipisci?
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 ">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex gap-2 text-sm">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
                  <p className="w-[150px]">Lorem ipsum dolor sit amet.</p>
                </div>
              ))}
          </div>
          </div>
          <div className='order-1 lg:order-2'>
            <Image src="https://source.unsplash.com/random?company" width={1000} height={1000} className='w-full h-[45vh] object-cover rounded-lg' alt="..."></Image>
        </div>
      </div>
        <div className="my-16 mt-20">
          <h1 className="text-3xl text-center font-bold mb-10">Awarding</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mx-auto">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className=" w-full h-[100px] flex justify-center items-center">
                <div className="w-[100px] h-[100px] bg-gray-300 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}