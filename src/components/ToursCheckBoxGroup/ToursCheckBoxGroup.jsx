import {
  Checkbox,
  Text,
  Stack,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Box,
  Flex,
} from '@chakra-ui/react';
import { Controller } from 'react-hook-form';

const ToursCheckboxGroup = ({ allTours, control, errors, initialTours }) => {
  // Transformar initialTours para que sea compatible con el componente
  const transformedInitialTours = initialTours.map((tour) => ({
    tourObj: tour._id, // Usamos el _id del tour como identificador
    order: tour.order || '', // Usamos el valor de order, o '' si no está definido
  }));

  return (
    <Box borderWidth='1px' borderRadius='lg' p={4} mb={4}>
      <FormControl isInvalid={errors.tours}>
        <FormLabel>
          <Heading size='lg' mb={4}>
            Tours
          </Heading>
        </FormLabel>
        <Controller
          name='tours'
          control={control}
          defaultValue={transformedInitialTours} // Usamos la lista transformada
          render={({ field }) => (
            <Stack spacing={2}>
              {allTours?.map((tour) => {
                // Determinamos si el checkbox debe estar marcado
                const isChecked = field.value.some((t) => t.tourObj === tour._id);
                // Obtenemos el valor de 'order' si el tour está en la lista seleccionada
                const orderValue = field.value.find((t) => t.tourObj === tour._id)?.order || '';

                return (
                  <Flex key={tour._id} borderWidth='1px' borderRadius='lg' p={2}>
                    <Checkbox
                      flex={5}
                      value={tour._id}
                      isChecked={isChecked}
                      onChange={(e) => {
                        if (e.target.checked) {
                          // Agregamos el tour al estado cuando se selecciona
                          field.onChange([...field.value, { tourObj: e.target.value, order: '' }]);
                        } else {
                          // Removemos el tour del estado cuando se deselecciona
                          field.onChange(field.value.filter((t) => t.tourObj !== e.target.value));
                        }
                      }}
                    >
                      <Text fontWeight='bold'>{tour.name}</Text>
                      <Text fontSize='sm'>{tour.heading}</Text>
                    </Checkbox>
                    <Input
                      w='60px'
                      required={isChecked}
                      type='number'
                      placeholder='Order'
                      value={orderValue}
                      onChange={(e) => {
                        const newOrder = parseInt(e.target.value, 10);
                        // Actualizamos el valor de 'order' en el estado
                        const updatedFieldValue = field.value.map((t) => {
                          if (t.tourObj === tour._id) {
                            return {
                              ...t,
                              order: isNaN(newOrder) ? null : newOrder,
                            };
                          }
                          return t;
                        });
                        field.onChange(updatedFieldValue);
                      }}
                    />
                  </Flex>
                );
              })}
            </Stack>
          )}
        />
        <FormErrorMessage>{errors.tours && errors.tours.message}</FormErrorMessage>
      </FormControl>
    </Box>
  );
};

export default ToursCheckboxGroup;
