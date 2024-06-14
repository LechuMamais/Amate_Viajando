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
  if(loading) {return ("Loading tours...")}

  return (
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
                <Checkbox key={tour._id} value={tour._id}>
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
  );
};

export default ToursCheckboxGroup;
