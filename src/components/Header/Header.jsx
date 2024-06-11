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
import MyLink from "../MyLink/MyLink";

const Header = () => {
  return (
    <header>
      <Flex>
        <Box p="4">
          <Link to={"/"}>Amate</Link>
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
                <MyLink to="/destinations">
                  <MenuItem>Destinos</MenuItem>
                </MyLink>
                <MyLink to="/tours">
                  <MenuItem>Tours</MenuItem>
                </MyLink>
                <MenuDivider />
                <MenuGroup title="Perfil">
                  <MyLink to={"/login"}>
                    <MenuItem>Login</MenuItem>
                  </MyLink>
                  <MyLink to={"/carrito"}>
                    <MenuItem>Carrito</MenuItem>
                  </MyLink>
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
