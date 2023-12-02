
'use client';

import { IconBrandInstagram } from '@tabler/icons-react';
import { Footer } from 'flowbite-react';
import Image from 'next/image';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function Footers() {
  return (
    <Footer container className=' mb-[70px] pt-14 lg:mb-0 bg-green-500 text-white rounded-t-20 rounded-b-none'>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 max-w-[1300px]  gap-7  lg:mx-auto">
          <div className='flex gap-3'>
            <Image src="/tools.png" width={1000} height={1000} className='w-[40px] h-[40px] rounded-full object-cover' alt="..." priority></Image>
            <h1 className='text-xl font-semibold'>Syailendra Elektronik</h1>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 text-white">
            <div>
              <Footer.Title className='text-white' title="about" />
              <Footer.LinkGroup className='text-white' col >
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className='text-white' title="Follow us" />
              <Footer.LinkGroup className='text-white' col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className='text-white' title="Legal" />
              <Footer.LinkGroup className='text-white' col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between max-w-[1300px]   lg:mx-auto">
          <Footer.Copyright className='text-white' href="#" by="Syailendra Elektronik" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <IconBrandInstagram size={24} />
            {/* <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} /> */}
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Footers;