import { Box, Button, Container, Heading, Input, Text } from '@chakra-ui/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm, Controller } from 'react-hook-form';
//import ImagesForm from '../ImagesForm/ImagesForm';

const ArticleEditor = ({ onSubmit, articleData, title }) => {
  // Inicializa React Hook Form
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

  // Función de envío del formulario
  const handleFormSubmit = (data) => {
    onSubmit(data); // Pasar todos los datos del formulario al padre
  };

  return (
    <Container maxW='928px' px={{ base: 4, md: 6 }} py={{ base: 12, md: 24, lg: 32 }}>
      <Heading mb={6}>{title}</Heading>
      <Box as='form' onSubmit={handleSubmit(handleFormSubmit)}>
        {/* Campo de título */}
        {errors.title && <Text color='red.500'>{errors.title.message}</Text>}
        <Input
          id='title'
          placeholder='Título'
          {...register('title', { required: 'El título es obligatorio' })}
          mb={4}
        />

        {/* Campo de subtítulo */}
        {errors.subtitle && <Text color='red.500'>{errors.subtitle.message}</Text>}
        <Input placeholder='Subtítulo' {...register('subtitle', { required: 'El subtítulo es obligatorio' })} mb={4} />

        {/* Editor de contenido */}
        <Box mb={4}>
          <Controller
            name='content'
            control={control}
            render={({ field }) => <ReactQuill theme='snow' value={field.value} onChange={field.onChange} />}
          />
        </Box>

        {/* Formulario de imágenes 
        <ImagesForm
          control={control}
          register={register}
          errors={{}} // Puedes añadir validación más avanzada aquí si es necesario
          usingFor='articles'
        />*/}

        {/* Botón para enviar el formulario */}
        <Button colorScheme='teal' mt={4} type='submit'>
          Guardar Artículo
        </Button>
      </Box>
    </Container>
  );
};

export default ArticleEditor;
