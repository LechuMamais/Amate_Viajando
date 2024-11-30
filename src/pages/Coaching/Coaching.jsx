import { Container, Flex } from '@chakra-ui/react';
import ContactTourButtons from '../../components/ContactTourButtons/ContactTourButtons';
import { CoachingText } from '../../resources/coachingTexts';
import LocalizedHeaderAndText from '../../components/LocalizedHeaderAndText/LocalizedHeaderAndText';
import { useLocalizedContent } from '../../customHooks/useLocalizedContent/useLocalizedContent';

const Coaching = () => {
  const { heading, text } = useLocalizedContent(CoachingText);

  return (
    <Container maxW='928px' px={{ base: 4, md: 6 }} py={{ base: 12, md: 24, lg: 32 }}>
      <Flex direction='column' gap={8}>
        <LocalizedHeaderAndText heading={heading} text={text} />
        <ContactTourButtons coaching={true} />
      </Flex>
    </Container>
  );
};

export default Coaching;
