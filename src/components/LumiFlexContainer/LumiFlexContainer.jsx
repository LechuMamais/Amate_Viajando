import { Box } from '@chakra-ui/react';
import { Lumiflex } from 'uvcanvas';

const LumiFlexContainer = ({
  className,
  ...props
}) => {
  return (
    <Box
      className={className}
      overflow="hidden"
      position="absolute"
      {...props}
    >
      <Lumiflex />
    </Box>
  );
};

export default LumiFlexContainer;
