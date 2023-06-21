import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const referer = req.headers.get('referer') || ''

  if (referer.includes('facebook.com') || referer.includes('linkedin.com') || referer.includes('lnkd.in')) {
    return NextResponse.redirect(`https://your-redirect-url.com${req.url.split("posts")[1]}`)
  }

  return NextResponse.next()
}
