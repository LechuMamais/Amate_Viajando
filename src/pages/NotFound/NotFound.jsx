import { Box, Text, Button, VStack, Image } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const goBack = () => {
    window.history.back();
  };
  const { t } = useTranslation('NotFound');

  return (
    <Box textAlign='center' py={10} px={6} minH='100vh' bgColor='#F8F8F8'>
      <VStack spacing={6} alignItems='center'>
        <Image src='/assets/err_404.png' alt='ERROR 404 - Not found' maxW='300px' />

        <Text fontSize='2xl' mt={3}>
          {t('NotFoundTitle')}
        </Text>
        <Text fontSize='lg' maxW='lg' mt={2}>
          {t('NotFoundMessage')}
        </Text>

        <Link to='/'>
          <Button colorScheme='teal' bg='teal.600' color='white' size='lg' px={8} _hover={{ bg: 'teal.700' }} w='200px'>
            {t('BackHomeButton')}
          </Button>
        </Link>

        <Button onClick={goBack} colorScheme='gray' size='lg' px={8} w='200px'>
          {t('BackButton')}
        </Button>
      </VStack>
    </Box>
  );
};

export default NotFound;
