import "./Header.css";
import { Box, Flex, IconButton, Spacer } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <header>
      <Flex>
        <Box p="4">
          <Link to={"/"}>Logo</Link>
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
            <MenuList>
              <MenuGroup title="Viaja">
                <MenuItem>
                  <NavLink to="/destinations">Destinos</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/tours">Tours</NavLink>
                </MenuItem>
                <MenuDivider />
                <MenuGroup title="Perfil">
                  <MenuItem>Cuenta</MenuItem>
                  <MenuItem>Carrito</MenuItem>
                </MenuGroup>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </header>
  );
};

export default Header;
