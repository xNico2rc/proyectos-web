import type { APIRoute } from "astro";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";
const resend = new Resend(import.meta.env.RESEND_API_KEY);
export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json();
  const { to, from, html, subject } = body;
  if (!to || !from || !html || !subject) {
    return new Response(null, {
      status: 404,
      statusText: "Informacion incorrecta",
    });
  }
  const send = await resend.emails.send({
    from,
    to,
    subject,
    html,
  });
  if (send.data) {
    return new Response(
      JSON.stringify({
        message: send.data,
      }),
      {
        status: 200,
        statusText: "ok",
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: send.error,
      }),
      {
        status: 500,
        statusText: "Error del servidor Resend",
      }
    );
  }
};
