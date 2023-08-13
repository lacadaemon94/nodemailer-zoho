import nodemailer from "nodemailer";

const { NEXT_PUBLIC_ZOHO_USER, NEXT_PUBLIC_ZOHO_PASSWORD } = process.env;

export const transporter = nodemailer.createTransport({
  host: "smtppro.zoho.in",
  port: 465,
  auth: {
    user: NEXT_PUBLIC_ZOHO_USER,
    pass: NEXT_PUBLIC_ZOHO_PASSWORD,
  },
});
