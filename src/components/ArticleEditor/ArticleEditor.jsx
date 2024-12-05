import { Box, Button, Container, Heading, Input, Text } from '@chakra-ui/react';
import ReactQuill from 'react-quill';
import './ArticleEditor.css';
import 'react-quill/dist/quill.snow.css';
import { useForm, Controller } from 'react-hook-form';
import ImagesForm from '../ImagesForm/ImagesForm';

const ArticleEditor = ({ onSubmit, articleData, title }) => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: articleData?.title || '',
      subtitle: articleData?.subtitle || '',
      content: articleData?.content || '',
      images: articleData?.images || [],
    },
  });

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <Container maxW='928px' px={{ base: 4, md: 6 }}>
      <Heading mb={6}>{title}</Heading>
      <Box as='form' onSubmit={handleSubmit(handleFormSubmit)}>
        {errors.title && <Text color='red.500'>{errors.title.message}</Text>}
        <Input
          id='title'
          placeholder='Título'
          {...register('title', { required: 'El título es obligatorio' })}
          mb={4}
        />

        {errors.subtitle && <Text color='red.500'>{errors.subtitle.message}</Text>}
        <Input placeholder='Subtítulo' {...register('subtitle', { required: 'El subtítulo es obligatorio' })} mb={4} />

        <Box mb={4}>
          <Controller
            name='content'
            control={control}
            render={({ field }) => <ReactQuill theme='snow' value={field.value} onChange={field.onChange} />}
          />
        </Box>

        <ImagesForm
          control={control}
          register={register}
          errors={{}} // Puedes añadir validación más avanzada aquí si es necesario
          usingFor='articles'
          prevImages={articleData.images}
        />

        <Button colorScheme='teal' mt={4} type='submit'>
          Guardar Artículo
        </Button>
      </Box>
    </Container>
  );
};

export default ArticleEditor;
