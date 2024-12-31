import { Box, FormControl, FormLabel, Input, Textarea, Text } from '@chakra-ui/react';
import { useEffect } from 'react';

const TourDestinationForm = ({ register, errors, lang, setValue, defaultValues }) => {
  useEffect(() => {
    if (defaultValues) {
      setValue(`${lang.iso3code}.name`, defaultValues.name || '');
      setValue(`${lang.iso3code}.heading`, defaultValues.heading || '');
      setValue(`${lang.iso3code}.description`, defaultValues.description || '');
      setValue(`${lang.iso3code}.longDescription`, defaultValues.longDescription || '');
    }
  }, [defaultValues, setValue, lang]);

  return (
    <Box borderWidth='1px' borderRadius='lg' p={4} mb={4} bg='gray.100'>
      <Box borderWidth='1px' borderRadius='lg' p={4} mt={4} mb={4} bg='white'>
        <FormControl isInvalid={errors.name} mt={4}>
          <FormLabel htmlFor='name'>
            <Text fontSize='lg'>Nombre</Text>
          </FormLabel>
          <Input id={`name-${lang.iso3code}`} placeholder='Nombre' {...register(`${lang.iso3code}.name`, {})} />
          {errors[lang.iso3code]?.name && <Text color='red.500'>{errors[lang.iso3code].name.message}</Text>}
        </FormControl>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p={4} mt={4} mb={4} bg='white'>
        <FormControl isInvalid={errors.heading} mt={4}>
          <FormLabel htmlFor='heading'>
            <Text fontSize='lg'>Encabezado/Heading</Text>
          </FormLabel>
          <Input
            id={`heading-${lang.iso3code}`}
            placeholder='Encabezado'
            {...register(`${lang.iso3code}.heading`, {})}
          />
          {errors[lang.iso3code]?.heading && <Text color='red.500'>{errors.heading.message}</Text>}
        </FormControl>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p={4} mt={4} mb={4} bg='white'>
        <FormControl isInvalid={errors.description} mt={4}>
          <FormLabel htmlFor='description'>
            <Text fontSize='lg'>Descripción corta</Text>
          </FormLabel>
          <Textarea
            id={`description-${lang.iso3code}`}
            placeholder='Descripción corta'
            {...register(`${lang.iso3code}.description`, {})}
          />
          {errors[lang.iso3code]?.description && <Text color='red.500'>{errors.description.message}</Text>}
        </FormControl>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p={4} mt={4} mb={4} bg='white'>
        <FormControl isInvalid={errors.longDescription} mt={4}>
          <FormLabel htmlFor='longDescription'>
            <Text fontSize='lg'>Descripción Larga</Text>
          </FormLabel>
          <Textarea
            minH='280px'
            id={`longDescription-${lang.iso3code}`}
            placeholder='Descripción larga'
            {...register(`${lang.iso3code}.longDescription`, {})}
          />
          {errors[lang.iso3code]?.longDescription && <Text color='red.500'>{errors.longDescription.message}</Text>}
        </FormControl>
      </Box>
    </Box>
  );
};

export default TourDestinationForm;
