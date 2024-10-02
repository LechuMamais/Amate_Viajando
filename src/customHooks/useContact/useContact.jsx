import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export const useContact = (tourName, destinationName, coachMessage) => {
  const whatsappText = encodeURIComponent(
    coachMessage
      ? coachMessage
      : `Hola, estoy interesado en el tour ${tourName} en ${destinationName} y quisiera obtener más información. Muchas gracias!`,
  );

  const emailText = encodeURIComponent(
    `Hola,\n\nEstoy interesado en el tour ${tourName} en ${destinationName} y quisiera obtener más información.\n\nMuchas gracias.`,
  );
  const emailSubject = encodeURIComponent("Solicitud de información");

  return {
    whatsappUrl: `https://wa.me/5492942639282?text=${whatsappText}`,
    emailUrl: `mailto:amateviajandoreservas@gmail.com?subject=${emailSubject}&body=${emailText}`,
    icons: {
      whatsapp: FaWhatsapp,
      email: FaEnvelope,
    },
  };
};
