import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import CardsList from "../CardsList/CardsList";

const UserProfile = ({ user }) => {
    const transformedFavouriteTours = user.favouriteTours.map((favTour) => ({
        tour_id: favTour.tourId._id,
        destinationId: favTour.destinationId,
        ...favTour.tourId
      }));
  return (
    <Flex direction="column" gap={8}>
      <Box>
        <Text fontSize="xl" fontWeight="bold">
          {user.userName}
        </Text>
      </Box>
      <CardsList
        headingText={"Tours Favoritos"}
        descriptionText={""}
        arrayToRender={transformedFavouriteTours}
        usingFor={{favTours: true, destinationId: user.favouriteTours.destinationId}}
      />
    </Flex>
  );
};

export default UserProfile;
