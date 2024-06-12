import "./Header.css";
import { Box, Flex, IconButton, Spacer } from "@chakra-ui/react";
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
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

const Header = () => {
  const { user } = useContext(UserContext);
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
                  {user.logged ? (
                    <>
                      <MyLink to={"/profile"}>
                        <MenuItem>Mi cuenta</MenuItem>
                      </MyLink>
                      <MyLink to={"/carrito"}>
                        <MenuItem>Ver carrito</MenuItem>
                      </MyLink>
                      <MyLink to={"/logout"}>
                        <MenuItem color={'red.400'} pl={4}>Cerrar Sesión</MenuItem>
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
    </header>
  );
};

export default Header;
