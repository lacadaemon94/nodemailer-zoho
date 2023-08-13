import nodemailer from "nodemailer";

const { NEXT_PUBLIC_ZOHO_USER, NEXT_PUBLIC_ZOHO_PASSWORD } = process.env;

export const transporter = nodemailer.createTransport({
  host: "smtppro.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: NEXT_PUBLIC_ZOHO_USER,
    pass: NEXT_PUBLIC_ZOHO_PASSWORD,
  },
});
