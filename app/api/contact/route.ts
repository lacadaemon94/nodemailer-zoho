// Contact Route - api/contact
import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/app/utils/mailConfig";

type ContactRequestBody = {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const { NEXT_PUBLIC_ZOHO_USER, NEXT_PUBLIC_ZOHO_RECIPIENT_EMAIL } = process.env;

export async function POST({ json }: NextRequest) {
  const { fname, lname, email, phone, service, message }: ContactRequestBody =
    await json();

  const mailOptions = {
    from: NEXT_PUBLIC_ZOHO_USER,
    to: NEXT_PUBLIC_ZOHO_RECIPIENT_EMAIL,
    subject: `New message from ${fname} ${lname}`,
    text: `
      Name: ${fname}
      Last Name: ${lname}
      Email: ${email}
      Phone: ${phone}
      Service: ${service}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      status: "success",
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error(error); // Consider using a dedicated logging service for production.
    return NextResponse.json({
      status: "error",
      message: (error as Error).message,
    });
  }
}
