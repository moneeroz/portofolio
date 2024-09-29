"use server";

import { emailHtml, ContactEmail } from "@/components/email";
import { render } from "@react-email/render";
import nodemailer from "nodemailer";

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const sendEmail = async ({
  firstName,
  lastName,
  email,
  message,
}: Props) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAILER_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAILER_EMAIL,
        pass: process.env.MAILER_PASSWORD,
      },
    });

    const options = {
      from: process.env.SENDER_EMAIL,
      to: process.env.SENDER_EMAIL,
      subject: "Portfoilo contact message",
      html: await emailHtml({ firstName, lastName, email, message }),
    };

    transporter.sendMail({
      subject: options.subject,
      html: options.html,
      from: options.from,
      to: options.to,
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};
