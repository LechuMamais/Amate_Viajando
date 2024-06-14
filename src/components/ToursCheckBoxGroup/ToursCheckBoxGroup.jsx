// ToursCheckboxGroup.jsx
import { useEffect, useState } from "react";
import {
  Checkbox,
  Text,
  CheckboxGroup,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Box,
} from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import { getTours } from "../../services/api/tours";
import { fetchSetTours } from "../../services/fetchSetTours";

const ToursCheckboxGroup = ({
  control,
  register,
  errors,
  initialTours,
  user,
}) => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSetTours(setTours, setLoading);
  }, []);
  if (loading) {
    return "Loading tours...";
  }

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
          defaultValue={initialTours.map((tour) => tour._id)}
          render={({ field }) => (
            <CheckboxGroup {...field}>
              <Stack>
                {tours.map((tour) => (
                  <Checkbox key={tour._id} value={tour._id} borderWidth="1px" borderRadius="lg" p={2} transition="all 0.2s ease-out" _hover={{bg: "gray.50"}}>
                    <Text fontWeight="bold">{tour.name}</Text>
                    <Text fontSize="sm">{tour.heading}</Text>
                  </Checkbox>
                ))}
              </Stack>
            </CheckboxGroup>
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
