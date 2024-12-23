import { Box, Flex, IconButton, Image, Spacer } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuList, MenuItem, MenuGroup, MenuDivider } from '@chakra-ui/react';
import MyLink from '../MyLink/MyLink';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Header = React.memo(() => {
  const [logged, setLogged] = useState(false);
  const isHome = useLocation().pathname === '/';
  const logo_url = '/assets/logo_header.png';

  useEffect(() => {
    if (localStorage.getItem('AmateViajandoLogged') == 'true') {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, []);

  return (
    <Flex as='header' zIndex='100' h='72px'>
      {!isHome && (
        <Link to={'/'} w='72px' h='72px'>
          <Image
            px={4}
            pb={2}
            w='88px'
            h='72px'
            src={logo_url}
            alt='Amate Viajando'
            objectFit='cover'
            position='absolute'
          />
        </Link>
      )}

      <Spacer />
      <Box p='4'>
        <Menu>
          <MenuButton as={IconButton} aria-label='Options' icon={<HamburgerIcon />} variant='outline' />
          <MenuList className='header-menu-list' border='none' bgColor='#ffffffce'>
            <MenuGroup title='Viaja'>
              <MyLink to='/destinations'>
                <MenuItem bgColor='transparent' _hover={{ bgColor: '#ffffffab' }}>
                  Destinos
                </MenuItem>
              </MyLink>
              <MyLink to='/tours'>
                <MenuItem bgColor='transparent' _hover={{ bgColor: '#ffffffab' }}>
                  Tours
                </MenuItem>
              </MyLink>
              <MyLink to='/articles'>
                <MenuItem bgColor='transparent' _hover={{ bgColor: '#ffffffab' }}>
                  Artículos
                </MenuItem>
              </MyLink>
              <MenuDivider />
              <MenuGroup title='Perfil'>
                {logged ? (
                  <>
                    <MyLink to={'/profile'}>
                      <MenuItem bgColor='transparent' _hover={{ bgColor: '#ffffffab' }}>
                        Mi cuenta
                      </MenuItem>
                    </MyLink>
                    {/*
                    <MyLink to={"/carrito"}>
                      <MenuItem bgColor="transparent" _hover={{bgColor:"#ffffffab"}}>Ver carrito</MenuItem>
                    </MyLink>
                    */}
                    <LanguageSelector />

                    <MyLink to={'/logout'}>
                      <MenuItem bgColor='transparent' _hover={{ bgColor: '#ffffffab' }} color={'red.400'} pl={4}>
                        Cerrar Sesión
                      </MenuItem>
                    </MyLink>
                  </>
                ) : (
                  <MyLink to={'/login'}>
                    <MenuItem bgColor='transparent' _hover={{ bgColor: '#ffffffab' }}>
                      Login
                    </MenuItem>
                  </MyLink>
                )}
              </MenuGroup>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
});

Header.displayName = 'Header';

export default Header;
