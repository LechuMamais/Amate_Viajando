import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { useEffect } from 'react';
import { scrollTop } from '../../utils/scrollTop';

const MyLink = ({ children, to }) => {
  useEffect(() => {
    scrollTop();
  });

  return (
    <ChakraLink as={ReactRouterLink} to={to} _hover={{ textDecor: 'none' }}>
      {children}
    </ChakraLink>
  );
};

export default MyLink;
