import MyLink from '../MyLink/MyLink';
import { Button } from '@chakra-ui/react';

const BackButton = ({ text = 'Back', to }) => {
  return (
    <MyLink to={to}>
      <Button size='sm' variant='link'>
        {text}
      </Button>
    </MyLink>
  );
};

export default BackButton;
