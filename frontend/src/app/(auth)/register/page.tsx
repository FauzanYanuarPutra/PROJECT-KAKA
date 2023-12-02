"use client"
import api, { setAuthHeader } from "@/app/config/getApi";
import { FloatingLabel } from "flowbite-react";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { useState } from "react";

export default function RegisterPage() {

  const [login, setLogin] = useState({
    email: '',
    username: '',
    password: ''
  });
  
  const [error, setError] = useState(null); 

  const router = useRouter();

  const handleRegister = async (e:any) => {
      e.preventDefault()
      try {
        const res = await api.post('/auth/register', login);
        Cookies.set('token', res.data.access_token);
        router.push('/dashboard');
      } catch (error: any) {
        if(error.response.status === 401) {
          setError(error.response.data.message);
        }
      }
  }

  return (
    <div className="w-full h-full flex  flex-col  justify-center items-center">
      <div className="grid gap-12 w-[80%]  ">
        <h1 className="font-medium text-4xl">Register</h1>
        {error && <p>{error}</p>} 
        <form onSubmit={(e) => handleRegister(e)} className="grid gap-5">
          <div>
            <FloatingLabel variant="outlined" id="email" label="Email"  className="cursor-text" onChange={(e) => setLogin({ ...login, email: e.target.value })} />
          </div>
          <div>
            <FloatingLabel variant="outlined" id="username" label="Username"  className="cursor-text" onChange={(e) => setLogin({ ...login, username: e.target.value })} />
          </div>
          <div>
            <FloatingLabel variant="outlined" id="password" label="Password" type="password"  className="cursor-text" onChange={(e) => setLogin({ ...login, password: e.target.value })}/>
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">Register</button>
        </form>
        <div className="flex items-center gap-1">
          <p className="text-sm text-gray-500">
            Already have an account?
          </p>
          <Link href="/login" className="text-green-500 font-bold">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
