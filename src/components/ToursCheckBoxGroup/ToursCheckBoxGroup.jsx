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
} from "@chakra-ui/react";
import { Controller } from "react-hook-form";

const ToursCheckboxGroup = ({ loading, allTours, control, errors, initialTours }) => {
  if (loading) return <Text>Loading...</Text>;

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
      <FormControl isInvalid={errors.tours}>
        <FormLabel>
          <Heading size="lg" mb={4}>
            Tours
          </Heading>
        </FormLabel>
        <Controller
          name="tours"
          control={control}
          defaultValue={initialTours.map((tour) => ({
            tourObj: tour.tourObj,
            order: tour.order,
          }))}  
          render={({ field }) => (
            <Stack spacing={2}>
              {allTours?.map((tour, index) => {
                const isChecked = field.value.some(
                  (t) => t.tourObj === tour._id
                );
                const orderValue =
                  field.value.find((t) => t.tourObj === tour._id)?.order || "";
                return (
                  <Flex key={tour._id} borderWidth="1px" borderRadius="lg" p={2}>
                    <Checkbox
                    flex={5}
                      value={tour._id}
                      isChecked={isChecked}
                      onChange={(e) => {
                        if (e.target.checked) {
                          field.onChange([
                            ...field.value,
                            { tourObj: e.target.value, order: "" },
                          ]);
                        } else {
                          field.onChange(
                            field.value.filter(
                              (t) => t.tourObj !== e.target.value
                            )
                          );
                        }
                      }}
                    >
                      <Text fontWeight="bold">{tour.name}</Text>
                      <Text fontSize="sm">{tour.heading}</Text>
                    </Checkbox>
                    <Input
                    w="60px"
                    required={isChecked}
                      type="number"
                      placeholder="Order"
                      value={orderValue}
                      onChange={(e) => {
                        const newOrder = parseInt(e.target.value, 10);
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
        <FormErrorMessage>
          {errors.tours && errors.tours.message}
        </FormErrorMessage>
      </FormControl>
    </Box>
  );
};

export default ToursCheckboxGroup;
