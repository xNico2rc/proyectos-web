import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>
      Hola, {firstName}!, espero que estes bien si recibes esto es que todo
      salio muy bien
    </h1>
  </div>
);
