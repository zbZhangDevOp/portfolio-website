'use server';

import { validateString } from '@/lib/utils';
import { Resend } from 'resend';

import ContactFormEmail from '@/email/contact-form-email';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

const getErrorMessages = (error: unknown): string => {
  let message: string;
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'Something went wrong';
  }

  return message;
};

export const sendEmail = async (formData: FormData) => {
  const message = formData.get('message');
  const senderEmail = formData.get('senderEmail');

  if (!validateString(senderEmail, 500)) {
    throw new Error('Invalid sender email');
  }

  if (!validateString(message, 5000)) {
    throw new Error('Invalid message');
  }

  let data;

  try {
    data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'zb.zhang.devop@gmail.com',
      subject: 'Message from personal portfolio contact form',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return { error: getErrorMessages(error) };
  }

  return { data };
};
