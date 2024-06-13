import "./Profile.css";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

import {
  Box,
  Button,
  Container,
  Text,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  useToast,
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
        <MyLink to={"/create-tour"}>
          <Button mt={4} colorScheme="teal">
            Crear Tour
          </Button>
        </MyLink>
      </Container>
    </Box>
  );
};

export default Profile;
