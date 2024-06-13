import "./Profile.css";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

import {
  Box,
  Button,
  Container,
  Text,
  ButtonGroup,
} from "@chakra-ui/react";
import MyLink from "../../components/MyLink/MyLink";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <Box as="main" flex={1}>
      <Container
        maxW="container.lg"
        px={{ base: 4, md: 6 }}
        py={{ base: 12, md: 24, lg: 32 }}
      >
        {user.role === "admin" && (
          <Box>
            <Text fontSize="2xl" fontWeight="bold">
              Administrador
            </Text>
          </Box>
        )}
        <ButtonGroup>
          <Button mt={4} colorScheme="teal">
            <MyLink to={"/create-tour"}>Crear Tour</MyLink>
          </Button>
          <Button mt={4} colorScheme="teal">
            <MyLink to={"/create-destination"}>Crear Destino</MyLink>
          </Button>
        </ButtonGroup>
      </Container>
    </Box>
  );
};

export default Profile;
