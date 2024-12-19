import { Image, Menu, MenuButton, MenuItem, MenuList, Button, Text, Flex } from '@chakra-ui/react';

const CountrySelector = ({ countries, selectedCountry, setSelectedCountry }) => {
  const selectedCountryName =
    countries.find((country) => country.iso2Code === selectedCountry)?.name || 'Todos los países';

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={selectedCountry ? <Image src={`https://flagsapi.com/${selectedCountry}/shiny/32.png`} /> : <> </>}
        w='full'
      >
        {selectedCountryName}
      </MenuButton>
      <MenuList maxH='300px' overflowY='auto' minW={{ base: '100%', md: '280px' }}>
        <MenuItem onClick={() => setSelectedCountry(null)}>
          <Flex alignItems='center' w='100%' h='100%'>
            <Image src='../../../public/assets/planet-earth.png' alt='World' w='32px' mr='8px' />
            Todos los países
          </Flex>
        </MenuItem>
        {countries.map((country) => (
          <MenuItem key={country.iso2Code} onClick={() => setSelectedCountry(country.iso2Code)}>
            <Flex alignItems='center' w='100%' h='100%'>
              <Image src={`https://flagsapi.com/${country.iso2Code}/shiny/32.png`} w='32px' mr='8px' />
              <Text>{country.name}</Text>
            </Flex>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CountrySelector;
