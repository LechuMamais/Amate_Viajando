import { Box, Button, Container, Heading } from '@chakra-ui/react';
import './ArticleEditor.css';
import ImagesForm from '../ImagesForm/ImagesForm';
import TourDestinationLangTab from '../TourDestinationLangTab/TourDestinationLangTab';

const ArticleEditor = ({ handleSubmit, onSubmit, title, register, control, errors, prevImages }) => {
  return (
    <Container maxW='928px' px={{ base: 4, md: 6 }}>
      <Heading mb={6}>{title}</Heading>
      <Box as='form' onSubmit={handleSubmit(onSubmit)}>
        <TourDestinationLangTab control={control} register={register} errors={errors} article={true} />

        <ImagesForm control={control} register={register} errors={errors} usingFor='articles' prevImages={prevImages} />

        <Button colorScheme='teal' mt={4} type='submit'>
          Guardar Artículo
        </Button>
      </Box>
    </Container>
  );
};

export default ArticleEditor;
