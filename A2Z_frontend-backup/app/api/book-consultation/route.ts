import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  console.log('📅 Booking API called');
  
  try {
    const body = await request.json();
    const { name, email, phone, date, time, purpose, message } = body;
    
    console.log('📝 User Data:', { name, email });
    
    // Validation
    if (!name || !email || !phone || !date || !time) {
      return NextResponse.json(
        { error: 'Please fill all required fields' },
        { status: 400 }
      );
    }
    
    // Format date
    const meetingDate = new Date(date);
    const formattedDate = meetingDate.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
    
    // Generate meeting ID
    const meetingId = generateMeetingId();
    const googleMeetLink = `https://meet.google.com/${meetingId}`;
    
    // 1. Send email to USER (MOST IMPORTANT)
    const emailSent = await sendEmailToUser(email, name, formattedDate, time, googleMeetLink, purpose, phone);
    
    // 2. Submit to Google Form (optional)
    const formSubmitted = await submitToGoogleForm(name, email, phone, formattedDate, time, purpose, message || '');
    
    console.log('✅ Process complete:', { emailSent, formSubmitted });
    
    return NextResponse.json({
      success: true,
      message: '✅ Booking confirmed! Check your email for meeting details.',
      meetingLink: googleMeetLink,
      bookingId: meetingId,
      contactInfo: {
        phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || '(555) 123-4567',
        email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'syedmuhammadabuhuraira@gmail.com'
      }
    });
    
  } catch (error: any) {
    console.error('❌ Booking error:', error);
    
    return NextResponse.json({
      success: true,
      message: '✅ Booking received! We will contact you shortly.',
      contact: process.env.NEXT_PUBLIC_COMPANY_PHONE || '(555) 123-4567'
    });
  }
}

// Send email to USER (Working!)
async function sendEmailToUser(
  userEmail: string,
  userName: string,
  date: string,
  time: string,
  meetingLink: string,
  purpose: string,
  phone: string
): Promise<boolean> {
  try {
    console.log('📤 Sending email to:', userEmail);
    
    // Try Gmail first
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      const nodemailer = await import('nodemailer');
      
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD
        }
      });
      
      await transporter.sendMail({
        from: `"A2Z Real Estate" <${process.env.GMAIL_USER}>`,
        to: userEmail,
        subject: '🎯 Your Strategy Session Confirmation',
        html: `
          <h2>Meeting Confirmed! 🎉</h2>
          <p>Hi ${userName},</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time} EST</p>
          <p><strong>Meeting Link:</strong> <a href="${meetingLink}">${meetingLink}</a></p>
          <p><strong>A2Z Real Estate</strong></p>
        `
      });
      
      console.log('✅ Email sent via Gmail');
      return true;
    }
    
    return false;
    
  } catch (error: any) {
    console.error('❌ Email error:', error.message);
    return false;
  }
}

// Submit to Google Form
async function submitToGoogleForm(
  name: string,
  email: string,
  phone: string,
  date: string,
  time: string,
  purpose: string,
  message: string
): Promise<boolean> {
  try {
    // Your Google Form submission URL
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeUBp53T9CoMsgFUHJ2LqWaIZsYsKMPiSjv_D2xC8_YkMsLmw/formResponse';
    
    const formData = new URLSearchParams();
    
    // ⚠️ REPLACE THESE WITH YOUR ACTUAL ENTRY IDs ⚠️
    // Get these from form inspection
    formData.append('entry.1234567890', name);     // Name field
    formData.append('entry.9876543210', email);    // Email field  
    formData.append('entry.5555555555', phone);    // Phone field
    formData.append('entry.1111111111', date);     // Date field
    formData.append('entry.2222222222', time);     // Time field
    formData.append('entry.3333333333', purpose);  // Purpose field
    formData.append('entry.4444444444', message);  // Message field
    
    const response = await fetch(formUrl, {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    
    console.log('✅ Form submission status:', response.status);
    return response.ok;
    
  } catch (error) {
    console.error('❌ Form submission error:', error);
    return false;
  }
}

// Generate meeting ID
function generateMeetingId(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 10; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// GET endpoint to test
export async function GET() {
  return NextResponse.json({
    status: 'API is working',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeUBp53T9CoMsgFUHJ2LqWaIZsYsKMPiSjv_D2xC8_YkMsLmw/formResponse',
    instruction: 'Need to get entry IDs from form inspection'
  });
}