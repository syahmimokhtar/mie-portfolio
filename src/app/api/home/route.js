import { NextResponse } from "next/server";
import { sendMail } from "../../service/nodemailer";

export async function POST(req, res) {
  try {
    const data = await req.json();

    var toEmail=process.env.EMAIL;
    var fromEmail= data.email;

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
