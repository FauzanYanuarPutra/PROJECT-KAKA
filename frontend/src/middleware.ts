import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    const apiResponse = await fetch('http://localhost:5000/auth/check-token', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const user = await apiResponse.json()


    if (apiResponse.status === 200) {
      if(!user.roles) {
        return NextResponse.redirect(new URL('/', req.url))
      }
      return NextResponse.next({
        request: req,
      });
    } else if (apiResponse.status === 401) {
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

export const config = {
  matcher: ["/dashboard"],
};
