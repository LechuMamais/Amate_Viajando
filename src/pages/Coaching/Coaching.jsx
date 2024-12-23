import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import ContactTourButtons from '../../components/ContactTourButtons/ContactTourButtons';
import { useTranslation } from 'react-i18next';

const Coaching = () => {
  const { t } = useTranslation('Coaching');
  const text = t('text').split('\n');

  return (
    <Container maxW='928px' px={{ base: 4, md: 6 }} py={{ base: 12, md: 24, lg: 32 }}>
      <Flex direction='column' gap={8}>
        <Box px={{ base: 4, sm: 6, md: 0 }}>
          <Heading size='xl' fontWeight='bold' textAlign='center'>
            {t('heading')}
          </Heading>

          <Stack spacing={6} my={8}>
            {Array.isArray(text) &&
              text.map((paragraph, index) => (
                <Text
                  key={index}
                  maxW='90ch'
                  textAlign='justify'
                  color='gray.600'
                  lineHeight='1.5em'
                  letterSpacing={{ base: 0, md: '0.04em' }}
                  fontSize='lg'
                >
                  {paragraph}
                </Text>
              ))}
          </Stack>
        </Box>
        <ContactTourButtons coaching={true} />
      </Flex>
    </Container>
  );
};

export default Coaching;
