import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const bearerToken = req.headers.get("Authorization");
  
  if (bearerToken) {
    const token = bearerToken.replace('Bearer ', '')

    if (token == 'ozJCvYlO9C5TN0TxiLOtwNPo9K2RkmQBmnZBtoCezWuVnXSEm7EZSSHJlTkJm6TK') {
      return NextResponse.next();
    } 
  }
  
  return new Response('Unauthorized', { status: 401 })
}
