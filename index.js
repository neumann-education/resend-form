import { Resend } from 'resend';

const resend = new Resend('re_123456789');

const { data, error } = await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: ['delivered@resend.dev'],
  subject: 'Hello World',
  html: '<strong>it works!</strong>'
});
