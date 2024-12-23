import { Text, Flex, Button } from '@chakra-ui/react';
import { useContact } from '../../customHooks/useContact/useContact';
import { useTranslation } from 'react-i18next';

const ContactTourButtons = ({ tourName, destinationName, coaching = false }) => {
  const { whatsappUrl, emailUrl, icons } = useContact(tourName, destinationName, coaching);
  const { t } = useTranslation('ContactTourButtons');

  return (
    <>
      <Text
        px={{ base: 4, sm: 6, md: 0 }}
        textAlign='justify'
        color='gray.600'
        lineHeight='1.5em'
        letterSpacing={{ base: 0, md: '0.04em' }}
        fontSize='lg'
      >
        {coaching ? t('Coaching') : t('Tour')}
      </Text>
      <Flex direction={{ base: 'column', md: 'row' }} gap={2}>
        <Button
          as='a'
          href={whatsappUrl}
          target='_blank'
          leftIcon={<icons.whatsapp size='24px' />}
          colorScheme='teal'
          variant='solid'
        >
          WhatsApp
        </Button>
        <Button
          as='a'
          href={emailUrl}
          target='_blank'
          leftIcon={<icons.email size='24px' />}
          colorScheme='teal'
          variant='outline'
        >
          Email
        </Button>
      </Flex>
    </>
  );
};

export default ContactTourButtons;
