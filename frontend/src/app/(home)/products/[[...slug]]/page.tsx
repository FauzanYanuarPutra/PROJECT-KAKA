import Cards from "@/components/Card";
import CustomCarousel from "@/components/CarouselCustom";
import Container from "@/components/Container";
import Link from "next/link";
import { useState } from "react";
import DetailProduct from "./DetailProduct";



async function getData(id?: string) {

  const res = await fetch(`${!id ? `http://localhost:5000/products/` : `http://localhost:5000/products/${id}`}`, {
    next: {
      revalidate: 0
    },
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json()
}

export default async function Page({ params }: { params: { slug?: string[] } }) {
  const [id] = params.slug || [];

  const products = await getData(id);



  return (
    <>
      <Container>
        {id && (
          <DetailProduct product={products}></DetailProduct>
        )}

        {!id && (
          <div className="grid grid-cols-4 gap-10">
            <div className=" hidden lg:block  lg:col-span-1">
              <div className="bg-gray-200 h-[100vh]">

              </div>
            </div>
            <div className="col-span-4 lg:col-span-3 text-[10px] md:text-md">
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div className="grid grid-cols-4 gap-3">
                  <div className="px-4 py-2 bg-gray-200 rounded-lg h-10 col-span-1 flex justify-center items-center">Terbaru</div>
                  <div className="px-4 py-2 bg-gray-200 rounded-lg h-10 col-span-1 flex justify-center items-center">Terlaris</div>
                  <div className="px-4 py-2 bg-gray-200 rounded-lg h-10 col-span-2 flex justify-center items-center">Harga</div>
                </div>
                <div>
                  <div className="px-4 py-2 bg-gray-200 rounded-lg h-10"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
                {products.map((product: any) => (
                  <Cards {...product} key={product.id}></Cards>
                ))}
              </div>
            </div>
          </div>
        )}

      </Container>
    </>
  );
}


