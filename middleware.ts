import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const referer = req.headers.get('referer') || ''

  if (referer.includes('facebook.com') || referer.includes('linkedin.com') || referer.includes('lnk.d')) {
    return NextResponse.redirect('https://your-redirect-url.com')
  }

  return NextResponse.next()
}
