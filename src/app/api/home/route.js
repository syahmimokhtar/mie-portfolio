import { NextResponse } from "next/server";
import { sendMail } from "../../service/nodemailer";



export async function POST(req, res) {
  try {
    const data = await req.json();
    console.log(data)

    var toEmail=process.env.EMAIL;
    var fromEmail= data.email;

    // if(data.email.includes('gmail')){
    //   var service='gmail';
    //   var toEmail=process.env.EMAIL;
    // }

    // else if(data.email.includes('outlook')){
    //   var service='outlook';
    //   var toEmail=process.env.EMAIL_OUTLOOK;
    // }

    // else if(data.email.includes('yahoo')){
    //   var service='yahoo';
    //   var toEmail=process.env.EMAIL_YAHOO;
    // }

    const transfer = await sendMail(
      fromEmail, 
      data.name,
      toEmail, 
      data.subject,
      data.message
    );

    return NextResponse.json({ "success": "email sent" });

  } catch (error) {
    return NextResponse.json({ "error": error.message });
  }
}
