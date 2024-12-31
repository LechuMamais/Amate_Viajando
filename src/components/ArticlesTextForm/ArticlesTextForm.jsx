import { Box, Input, Text } from '@chakra-ui/react';
import { Controller } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ArticlesTextForm = ({ register, errors, lang, control }) => {
  return (
    <Box borderWidth='1px' borderRadius='lg' p={4} mb={4} bg='gray.100'>
      <Input
        id={`title-${lang.iso3code}`}
        placeholder='Título'
        {...register(`${lang.iso3code}.title`, {})}
        mb={4}
        bg='white'
      />
      {errors?.[lang.iso3code]?.title && <Text color='red.500'>{errors[lang.iso3code].title.message}</Text>}

      <Input placeholder='Subtítulo' {...register(`${lang.iso3code}.subtitle`, {})} mb={4} bg='white' />
      {errors?.[lang.iso3code]?.subtitle && <Text color='red.500'>{errors[lang.iso3code].subtitle.message}</Text>}

      <Box bg='white' borderRadius={4}>
        <Controller
          name={`${lang.iso3code}.content`}
          control={control}
          defaultValue=''
          render={({ field }) => <ReactQuill theme='snow' value={field.value} onChange={field.onChange} />}
        />
      </Box>
    </Box>
  );
};

export default ArticlesTextForm;
