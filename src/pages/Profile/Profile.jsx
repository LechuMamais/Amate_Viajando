import "./Profile.css";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { Box, Button, Container, Text, Flex } from "@chakra-ui/react";
import MyLink from "../../components/MyLink/MyLink";
import CardsList from "../../components/CardsList/CardsList";
import { useState } from "react";
import { useEffect } from "react";
import { fetchDestinations } from "../../services/fetchDestinations";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDestinations(setDestinations, setLoading);
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
                Administrador
              </Text>
            </Box>

            <Flex direction="column" gap={6} borderWidth="1px" p={4}>
              <Text fontSize="2xl" fontWeight="bold">
                Editar Destinos
              </Text>
              {loading ? (
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

              <MyLink to="/destinations">
                <Button
                  mt={4}
                  colorScheme="teal"
                  w={{ base: "100%", md: "300px" }}
                >
                  Ver Destinos
                </Button>
              </MyLink>

              <MyLink to="/create-destination">
                <Button
                  mt={4}
                  colorScheme="teal"
                  w={{ base: "100%", md: "300px" }}
                >
                  Crear Nuevo Destino
                </Button>
              </MyLink>
            </Flex>

            <Flex direction="column" gap={6} borderWidth="1px" p={4}>
              <Text fontSize="2xl" fontWeight="bold">
                Editar Tours
              </Text>
              <MyLink to="/tours">
                <Button
                  mt={4}
                  colorScheme="teal"
                  w={{ base: "100%", md: "300px" }}
                >
                  Ver Tours
                </Button>
              </MyLink>
              <MyLink to="/create-tour">
                <Button
                  mt={4}
                  colorScheme="teal"
                  w={{ base: "100%", md: "300px" }}
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
