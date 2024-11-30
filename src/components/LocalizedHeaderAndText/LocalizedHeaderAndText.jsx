import { Box, Heading, Stack, Text } from '@chakra-ui/react';

const LocalizedHeaderAndText = ({ heading, text }) => {
  return (
    <Box px={{ base: 4, sm: 6, md: 0 }}>
      <Heading size='xl' fontWeight='bold' textAlign='center'>
        {heading}
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
  );
};

export default LocalizedHeaderAndText;
