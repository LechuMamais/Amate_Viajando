import "./Header.css";
import { Box, Flex, IconButton, Image, Spacer } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
import MyLink from "../MyLink/MyLink";
import React, { useEffect, useState } from "react";

const Header = React.memo(() => {
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    if ((localStorage.getItem("AmateViajandoLogged") == "true")) {
      setLogged(true);
    } else {setLogged(false)}
  }, []);

  return (
    <Flex as="header" zIndex="100" bgColor="white">
      <Box id="home-gradient-container">
        <Box className="home-link-container">
          <Link to={"/"} w="72px" h="72px">
            <Image
              px={4}
              pb={2}
              w="88px"
              h="72px"
              src="/assets/logo_header.jpg"
              alt="Amate Viajando"
              objectFit="cover"
              position="absolute"
            />
          </Link>
        </Box>
      </Box>
      <Spacer />
      <Box p="4">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList className="header-menu-list">
            <MenuGroup title="Viaja">
              <MyLink to="/destinations">
                <MenuItem>Destinos</MenuItem>
              </MyLink>
              <MyLink to="/tours">
                <MenuItem>Tours</MenuItem>
              </MyLink>
              <MenuDivider />
              <MenuGroup title="Perfil">
                {logged ? (
                  <>
                    <MyLink to={"/profile"}>
                      <MenuItem>Mi cuenta</MenuItem>
                    </MyLink>
                    {/*
                    <MyLink to={"/carrito"}>
                      <MenuItem>Ver carrito</MenuItem>
                    </MyLink>
                    */}

                    <MyLink to={"/logout"}>
                      <MenuItem color={"red.400"} pl={4}>
                        Cerrar Sesión
                      </MenuItem>
                    </MyLink>
                  </>
                ) : (
                  <MyLink to={"/login"}>
                    <MenuItem>Login</MenuItem>
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

export default Header;
