"use server"
import React from 'react';
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import emailTemplate from "@/email/emailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderName = formData.get("senderName") || "No name";
    const subject = formData.get("subject") || "No Subject";
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    if (!validateString(senderEmail, 500)) {
        return {
          error: "Invalid sender email",
        };
      }
      if (!validateString(message, 5000)) {
        return {
          error: "Invalid message",
        };
      }

      if (!validateString(subject, 500)) {
        return {
          error: "Invalid message",
        };
      }

      if (!validateString(senderName, 500)) {
        return {
          error: "Invalid message",
        };
      }

    let data;
    try {
        data = await resend.emails.send({
            from: 'Portofolio Form <onboarding@resend.dev>',
            to: 'ahnaful456@gmail.com',
            subject: subject as string,
            replyTo: senderEmail as string,
            react: React.createElement(emailTemplate, {
              message: message,
              senderEmail: senderEmail,
              senderName: senderName,
            }),
        })
    } catch (error: unknown) {
        return {
          error: getErrorMessage(error),
        };
      }

      return {
        data,
      };
}