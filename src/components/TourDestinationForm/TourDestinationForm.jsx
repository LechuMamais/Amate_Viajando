import { Box, FormControl, FormLabel, Input, Textarea, Text, Select } from '@chakra-ui/react';
import { ISO2 } from '../../resources/countriesISOCode';

const TourDestinationForm = ({ register, errors, setValue, country = false }) => {
  const handleCountryChange = (event) => {
    const selectedCode = event.target.value;
    const selectedCountry = ISO2.find((country) => country.code === selectedCode);

    if (selectedCountry) {
      setValue('country_name', selectedCountry.name);
      setValue('country_iso2code', selectedCountry.code);
    }
  };

  return (
    <Box borderWidth='1px' borderRadius='lg' p={4} mb={4} bg='gray.100'>
      <Box borderWidth='1px' borderRadius='lg' p={4} mt={4} mb={4} bg='white'>
        <FormControl isInvalid={errors.name} mt={4}>
          <FormLabel htmlFor='name'>
            <Text fontSize='lg'>Nombre</Text>
          </FormLabel>
          <Input id='name' placeholder='Nombre' {...register('name', { required: 'Este campo es requerido' })} />
          {errors.name && <Text color='red.500'>{errors.name.message}</Text>}
        </FormControl>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p={4} mt={4} mb={4} bg='white'>
        <FormControl isInvalid={errors.heading} mt={4}>
          <FormLabel htmlFor='heading'>
            <Text fontSize='lg'>Encabezado/Heading</Text>
          </FormLabel>
          <Input
            id='heading'
            placeholder='Encabezado'
            {...register('heading', { required: 'Este campo es requerido' })}
          />
          {errors.heading && <Text color='red.500'>{errors.heading.message}</Text>}
        </FormControl>
      </Box>

      {country && (
        <Box borderWidth='1px' borderRadius='lg' p={4} mt={4} mb={4} bg='white'>
          <FormControl isInvalid={errors.country_iso2code} mt={4}>
            <FormLabel htmlFor='country_iso2code'>
              <Text fontSize='lg'>País</Text>
            </FormLabel>
            <Select
              id='country_iso2code'
              placeholder={`${country.length >= 2 ? country : 'Selecciona un país'}`}
              onChange={handleCountryChange}
            >
              {ISO2.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </Select>
            {errors.country_iso2code && <Text color='red.500'>{errors.country_iso2code.message}</Text>}
          </FormControl>
        </Box>
      )}

      <Box borderWidth='1px' borderRadius='lg' p={4} mt={4} mb={4} bg='white'>
        <FormControl isInvalid={errors.description} mt={4}>
          <FormLabel htmlFor='description'>
            <Text fontSize='lg'>Descripción corta</Text>
          </FormLabel>
          <Textarea
            id='description'
            placeholder='Descripción corta'
            {...register('description', { required: 'Este campo es requerido' })}
          />
          {errors.description && <Text color='red.500'>{errors.description.message}</Text>}
        </FormControl>
      </Box>

      <Box borderWidth='1px' borderRadius='lg' p={4} mt={4} mb={4} bg='white'>
        <FormControl isInvalid={errors.longDescription} mt={4}>
          <FormLabel htmlFor='longDescription'>
            <Text fontSize='lg'>Descripción Larga</Text>
          </FormLabel>
          <Textarea
            id='longDescription'
            placeholder='Descripción larga'
            {...register('longDescription', {
              required: 'Este campo es requerido',
            })}
          />
          {errors.longDescription && <Text color='red.500'>{errors.longDescription.message}</Text>}
        </FormControl>
      </Box>
    </Box>
  );
};

export default TourDestinationForm;
