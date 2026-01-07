// app/api/test-email/route.js (Test ke liye alag file)
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    message: 'API is working',
    env: {
      hasUser: !!process.env.GMAIL_USER,
      hasPass: !!process.env.GMAIL_APP_PASSWORD,
      userLength: process.env.GMAIL_USER?.length || 0
    }
  });
}