"use client"
import CustomCarousel from "@/components/CarouselCustom";
import { useState } from "react";

const images = [
  "https://source.unsplash.com/random/700x700",
  "https://source.unsplash.com/random/800x800",
  "https://source.unsplash.com/random/800x800",
  "https://source.unsplash.com/random/900x900",
  "https://source.unsplash.com/random/1000x1000",
  "https://source.unsplash.com/random/1100x1100",
];

export default function DetailProduct({ product }: any) {
  const [qty, setQty] = useState(0)

    const handleQty = (value: number) => {
    if (value == -1) {
      if (qty === 0) {
        setQty(0)
      } else {
        setQty(qty - 1)
      }
    } else[
      setQty(qty + 1)
    ]
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-[100vh]">
      <div className="md:col-span-2 bg-white">
        <CustomCarousel images={images}></CustomCarousel>
        <div className="mt-[120px]">
          hh
        </div>
      </div>
      <div className="md:col-span-1 flex flex-col gap-3">
        <div className="bg-white grid gap-4 p-5 rounded-lg">
          <h1 className="text-3xl font-bold">Nama Product</h1>
          <p className="text-sm font-medium">Stool, black</p>
          <p>Rp 4.000.000</p>
          <p>Rp 1.000.000</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, modi!</p>
          <div className="grid grid-cols-3">
            <p className="col-span-2">quantity</p>
            <div className="grid grid-cols-4 col-span-1 border-2 border-gray-300 rounded-full h-10 justify-center items-center" >
              <div onClick={() => handleQty(-1)} className="cursor-pointer w-full h-full items-center col-span-1 flex justify-center ">-</div>
              <div className="w-full col-span-2 flex justify-center">{qty}</div>
              <div onClick={() => handleQty(+1)} className="cursor-pointer w-full h-full items-center col-span-1 flex justify-center ">+</div>
            </div>
          </div>
        </div>
        <div className="bg-white grid gap-4 p-5 rounded-lg">
          <h1 className="text-3xl font-bold">Deskripsi Product</h1>
          <hr />
          <p className="text-sm font-medium">Stool, black</p>
        </div>
      </div>
    </div>
  )
}