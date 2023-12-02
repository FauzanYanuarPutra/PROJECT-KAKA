import Image from "next/image";
import { redirect } from "next/navigation"
import { cookies } from 'next/headers'

async function getData() {
  const cookiesList = cookies()
  const token = cookiesList.get('token')?.value

  const res = await fetch('http://localhost:5000/auth/check-token', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    next: {
      revalidate: 0
    }
  });


  return res.json();
}

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getData();

  if (data.id){
    redirect('/dashboard')
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 max-h-[100vh] min-h-screen">
      <div className="hidden lg:flex col-span-1 max-h-[100vh] min-h-screen">
        <Image src="https://source.unsplash.com/random" width={1000} height={1000} alt="..." className="w-full h-full object-cover" />
      </div>
      <div className="col-span-1 max-h-[100vh] min-h-screen">
        {children}
      </div>
    </div>
  );
}
