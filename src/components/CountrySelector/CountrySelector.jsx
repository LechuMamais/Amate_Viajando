import { Image, Menu, MenuButton, MenuItem, MenuList, Button, Text, Flex, MenuDivider } from '@chakra-ui/react';

const CountrySelector = ({ countries, selectedCountry, setSelectedCountry }) => {
  const selectedCountryName =
    countries.find((country) => country.iso2Code === selectedCountry)?.name || 'Todos los países';

  return (
    <Menu>
      <MenuButton
        as={Button}
        leftIcon={
          selectedCountry ? <Image src={`https://flagsapi.com/${selectedCountry}/shiny/32.png`} w='28px' /> : <> </>
        }
        w='full'
      >
        <Text marginLeft={selectedCountry ? '-36px' : '0px'}>{selectedCountryName}</Text>
      </MenuButton>
      <MenuList maxH='300px' overflowY='auto' minW={{ base: 'calc(100svw - 32px)', sm: '280px' }}>
        <MenuItem onClick={() => setSelectedCountry(null)}>
          <Flex alignItems='center' w='100%' h='100%'>
            <Image src='../../../public/assets/planet-earth.png' alt='World' w='28px' mr='8px' ml='2px' />
            Todos los países del mundo
          </Flex>
        </MenuItem>
        <MenuDivider />
        {countries.map((country) => (
          <MenuItem key={country.iso2Code} onClick={() => setSelectedCountry(country.iso2Code)}>
            <Flex alignItems='center' w='100%' h='100%'>
              <Image
                src={`https://flagsapi.com/${country.iso2Code}/shiny/32.png`}
                w='28px'
                mr='8px'
                ml='2px'
                alt={country.iso2Code}
              />
              <Text>{country.name}</Text>
            </Flex>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CountrySelector;

/* marginLeft={selectedCountry ? '-44px' : '0px'}*/
