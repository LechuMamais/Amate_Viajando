import { Box, Button, Flex, Text } from "@chakra-ui/react";
import CardsList from "../CardsList/CardsList";
import MyLink from "../MyLink/MyLink";

const UserProfile = ({ user }) => {
  const transformedFavouriteTours = user.favouriteTours?.map((favTour) => ({
    tour_id: favTour.tourId._id,
    destinationId: favTour.destinationId,
    ...favTour.tourId,
  }));
  return (
    <Flex direction='column' gap={8}>
      <Box>
        <Text fontSize='xl' fontWeight='bold'>
          {user.userName}
        </Text>
      </Box>
      <CardsList
        headingText={"Tours Favoritos"}
        descriptionText={""}
        arrayToRender={transformedFavouriteTours}
        usingFor={"favouriteTours"}
      />
      {user.favouriteTours.length === 0 && (
        <Flex direction='column' alignItems='center' gap={4}>
          <Text textAlign='center'>Aún no has agregado tours a tu lista de favoritos</Text>
          <MyLink to='/destinations'>
            <Button size='lg' p={6} mx='auto' my={{ base: 2, md: 3, lg: 4 }} fontWeight={"light"}>
              Ver Destinos
            </Button>
          </MyLink>
        </Flex>
      )}
    </Flex>
  );
};

export default UserProfile;
