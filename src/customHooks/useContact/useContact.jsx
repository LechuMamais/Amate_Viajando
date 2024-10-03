import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export const useContact = (tourName, destinationName, coach = false) => {
  const coachMessage =
    'Hola! me interesa el coaching viajero y quisiera más información. ¿Cuándo podríamos agendar una cita?';
  const whatsappTourMessage = `Hola, estoy interesado en el tour ${tourName} en ${destinationName}, y quisiera obtener más información. Muchas gracias!`;
  const emailTourMessage = `Hola,\n\nEstoy interesado en el tour ${tourName} en ${destinationName}, y quisiera obtener más información.\n\nMuchas gracias.`;

  const whatsappText = encodeURIComponent(coach ? coachMessage : whatsappTourMessage);
  const emailText = encodeURIComponent(emailTourMessage);
  const emailSubject = encodeURIComponent('Solicitud de información');

  return {
    whatsappUrl: `https://wa.me/5492942639282?text=${whatsappText}`,
    emailUrl: `mailto:amateviajandoreservas@gmail.com?subject=${emailSubject}&body=${emailText}`,
    icons: {
      whatsapp: FaWhatsapp,
      email: FaEnvelope,
    },
  };
};
