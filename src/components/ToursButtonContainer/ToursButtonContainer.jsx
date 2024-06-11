import { Flex, Button } from '@chakra-ui/react'
import React from 'react'

const ToursButtonContainer = () => {
  return (
    <Flex direction={{ base: "column", md: "row" }} gap={2}>
    <Button size="lg" className="w-full">
      Reservar Ahora
    </Button>
    <Button variant="outline" size="lg" className="w-full">
      Agregar al Carrito
    </Button>
  </Flex>
  )
}

export default ToursButtonContainer
