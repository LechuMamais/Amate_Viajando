import { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';
import { Container } from '@chakra-ui/react';
import AdminProfile from '../../components/AdminProfile/AdminProfile';
import UserProfile from '../../components/UserProfile/UserProfile';
import ProfileSkeletonLoader from '../../components/skeletonLoaders/ProfileSkeletonLoader';

const Profile = () => {
  const { user, loading } = useContext(UserContext);

  return (
    <Container maxW='container.lg' px={{ base: 4, md: 6 }} py={{ base: 12, md: 24 }}>
      {loading ? (
        <ProfileSkeletonLoader></ProfileSkeletonLoader>
      ) : (
        <>
          {user.role === 'admin' && <AdminProfile user={user} />}
          {user.role === 'user' && <UserProfile user={user} loading={loading} />}
        </>
      )}
    </Container>
  );
};

export default Profile;
