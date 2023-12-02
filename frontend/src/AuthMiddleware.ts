import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default async function AuthMiddleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;

  console.log('asdas')

  if (!token) {
      return NextResponse.next({
        request: req,
      });
  }

  try {
    const apiResponse = await fetch('http://localhost:5000/auth/check-token', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });


    if (apiResponse.status === 401) {
      return NextResponse.next({
        request: req,
      });
    } else if (apiResponse.status === 200) {
      // Handle 401 Unauthorized specifically
      return NextResponse.redirect(new URL('/login', req.url));
    } else {
      // Handle other status codes as needed
      return NextResponse.redirect(new URL('/error', req.url));
    }
  } catch (error) {
    return NextResponse.error();
  }
}

export const config = [
  {
    matcher: '/login',
    handler: AuthMiddleware,
  },

]