import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
    if (req.method === 'POST') {
    const role = req.headers.get("authorization");
    if (role !== "admin") {
        return NextResponse.redirect('/unauthorized');
    }
    console.log('Request:', req.url,"midle ware works");
  }
  return NextResponse.next();
}

export const config = {
    matcher: ['/api/sliderImages/:path*']
};