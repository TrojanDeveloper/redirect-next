import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const referer = req.headers.get('referer') || ''

  if (referer.includes('facebook.com') || referer.includes('linkedin.com') || referer.includes('lnk.d')) {
    const requestPath = req.url.replace('post/', '')
    const redirectUrl = `https://your-redirect-url.com${requestPath}`
    return NextResponse.redirect(redirectUrl)
  }

  return NextResponse.next()
}
