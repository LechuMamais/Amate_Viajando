import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

const MyLink = ({children, to}) => {
  return (
    <ChakraLink as={ReactRouterLink} to={to}>
    {children}
  </ChakraLink>
  )
}

export default MyLink
