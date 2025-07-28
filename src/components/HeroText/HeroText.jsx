import { useTranslation } from 'react-i18next';
import { Box, Button, Text, Flex } from '@chakra-ui/react';
import MyLink from '../MyLink/MyLink';

const HeroText = () => {
  const { t } = useTranslation('Home');

  return (
    <Box
      className='hero-text-wrapper'
      zIndex='2'
      w={{ base: '100vw', md: '100%' }}
    >
      <Flex
        direction='column'
        textAlign='center'
        spacing={6}
        w='100%'
        mt='2'
      >
        <Text
          as='h1'
          className='yeseva-one-regular'
          fontWeight='100'
          lineHeight='relaxed'
          color='gray.800'
          mb='12px'
          fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
        >
          {t('HeroTitle')}
        </Text>
        <MyLink to='/coaching'>
            <Button
              size='md'
              px={8}
              variant='transparent'
              bgColor={'whiteAlpha.400'}
              _hover={{ bgColor: 'whiteAlpha.600', color: '#000000d0' }}
              borderRadius='full'
              border={'1px solid #FFFFFF'}
            >
              {t('CoachingButton')}
            </Button>
          </MyLink>
      </Flex>
    </Box>
  );
};
export default HeroText;
