import { VStack, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const CompanyMantra = () => {
  const { t } = useTranslation('Home');
  const paragraphs = t('IntroText', { returnObjects: true });

  return (
    <VStack px={{ base: 4, sm: 6, md: 8 }} spacing={4} mt={6} mb={4} align="start" maxW={'660px' } mx={'auto'}>
      {paragraphs.map((text, index) => (
        <Text key={index} whiteSpace="pre-line">
          {text}
        </Text>
      ))}
    </VStack>
  );
};

export default CompanyMantra;
