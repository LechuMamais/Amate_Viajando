import React, { useEffect, useState } from "react";
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
} from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import { fetchSetTours } from "../../services/fetchSetTours";

const ToursCheckboxGroup = ({ control, errors, initialTours }) => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);


    useEffect(() => {
      fetchSetTours(setTours, setLoading);
    }, []);


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
          defaultValue={initialTours.map(tour => tour.tourObj._id)}
          render={({ field }) => (
            <Stack spacing={2}>
              {tours?.map((tour, index) => (
                <Box key={tour._id} borderWidth="1px" borderRadius="lg" p={2}>
                  <Checkbox
                    value={tour._id}
                    isChecked={field.value.includes(tour._id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        field.onChange([...field.value, e.target.value]);
                      } else {
                        field.onChange(field.value.filter((id) => id !== e.target.value));
                      }
                    }}
                  >
                    <Text fontWeight="bold">{tour.name}</Text>
                    <Text fontSize="sm">{tour.heading}</Text>
                  </Checkbox>
                  <Input
                    type="number"
                    placeholder="Order"
                    value={tour.order || ""}
                    onChange={(e) => {
                      const newOrder = parseInt(e.target.value, 10);
                      setTours(prevTours => {
                        const updatedTours = [...prevTours];
                        updatedTours[index].order = isNaN(newOrder) ? null : newOrder;
                        return updatedTours;
                      });
                    }}
                  />
                </Box>
              ))}
            </Stack>
          )}
        />
        <FormErrorMessage>{errors.tours && errors.tours.message}</FormErrorMessage>
      </FormControl>
    </Box>
  );
};

export default ToursCheckboxGroup;
