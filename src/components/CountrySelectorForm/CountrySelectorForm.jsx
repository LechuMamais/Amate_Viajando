import { Box, FormControl, FormLabel, Text, Select, Heading } from '@chakra-ui/react';
import { ISO2 } from '../../resources/countriesISOCode';
import { useEffect } from 'react';

const CountrySelectorForm = ({ errors, setValue, defaultValues = [''] }) => {
  useEffect(() => {
    if (defaultValues) {
      setValue('country_iso2code', defaultValues.country_iso2code || '');
      setValue('country_name', defaultValues.country_name || '');
    }
  }, [defaultValues, setValue]);

  const handleCountryChange = (e) => {
    const selectedCountry = ISO2.find((country) => country.code === e.target.value);
    console.log('Selected country:', selectedCountry);

    if (selectedCountry) {
      setValue('country_name', selectedCountry.name);
      setValue('country_iso2code', selectedCountry.code);
    }
  };
  return (
    <Box borderWidth='1px' borderRadius='lg' p={4} my={4} className='CountrySelectorForm' bg='gray.100'>
      <FormControl isInvalid={errors.country_iso2code} mt={4}>
        <FormLabel htmlFor='country_iso2code'>
          <Heading size='md' mb={4}>
            País
          </Heading>
        </FormLabel>
        <Select
          bg='white'
          id='country_iso2code'
          placeholder='Selecciona un país'
          onChange={handleCountryChange}
          defaultValue={defaultValues?.country_iso2code || ''}
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
  );
};
export default CountrySelectorForm;
