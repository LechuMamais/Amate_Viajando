import "./Profile.css";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { Box, Button, Container, Text, Flex } from "@chakra-ui/react";
import MyLink from "../../components/MyLink/MyLink";
import CardsList from "../../components/CardsList/CardsList";
import { useState } from "react";
import { useEffect } from "react";
import { fetchSetDestinations } from "../../services/fetchSetDestinations";
import { fetchSetTours } from "../../services/fetchSetTours";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [destinations, setDestinations] = useState([]);
  const [loadingDestinations, setLoadingDestinations] = useState(true);

  const [tours, setTours] = useState([]);
  const [loadingTours, setLoadingTours] = useState(true);

  useEffect(() => {
    fetchSetDestinations(setDestinations, setLoadingDestinations);
    fetchSetTours(setTours, setLoadingTours);
  }, []);

  return (
    <Box as="main" flex={1}>
      <Container
        maxW="container.lg"
        px={{ base: 4, md: 6 }}
        py={{ base: 12, md: 24, lg: 32 }}
      >
        {user.role === "admin" && (
          <Flex direction="column" gap={8}>
            <Box>
              <Text fontSize="xl" fontWeight="bold">
                {user.userName}{" "}
                <Text as="span" fontSize="md">
                  (admin)
                </Text>
              </Text>
            </Box>

            <Flex direction="column" gap={6} borderWidth="1px" p={4}>
              {loadingDestinations ? (
                <div>Loading...</div>
              ) : (
                <CardsList
                  headingText={"Modificar Destinos"}
                  descriptionText={
                    "Selecciona el destino que quieras modificar"
                  }
                  arrayToRender={destinations}
                  usingFor={"updateDestinations"}
                />
              )}

              <MyLink to="/create-destination">
                <Button
                  mt={4}
                  colorScheme="teal"
                  w={{ base: "100%", md: "300px" }}
                  size="lg"
                >
                  Crear Nuevo Destino
                </Button>
              </MyLink>
            </Flex>

            <Flex direction="column" gap={6} borderWidth="1px" p={4}>
              {loadingTours ? (
                <div>Loading...</div>
              ) : (
                <CardsList
                  headingText={"Modificar Tours"}
                  descriptionText={"Selecciona el tour que quieras modificar"}
                  arrayToRender={tours}
                  usingFor={"updateTours"}
                />
              )}

              <MyLink to="/create-tour">
                <Button
                  mt={4}
                  colorScheme="teal"
                  w={{ base: "100%", md: "300px" }}
                  size="lg"
                >
                  Crear Nuevo Tour
                </Button>
              </MyLink>
            </Flex>
          </Flex>
        )}
      </Container>
    </Box>
  );
};

export default Profile;
