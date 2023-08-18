"use server";

import { emailHtml } from "@/components/email";
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
      html: emailHtml({ firstName, lastName, email, message }),
    };

    await transporter.sendMail(options);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
