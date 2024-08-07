import "./Profile.css";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { Box, Button, Container, Text, Flex } from "@chakra-ui/react";
import AdminProfile from "../../components/AdminProfile/AdminProfile";

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
          <AdminProfile user={user}/>
        )}
      </Container>
    </Box>
  );
};

export default Profile;
