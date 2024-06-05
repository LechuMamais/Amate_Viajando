import "./Header.css";
import { Box, Flex, IconButton, Spacer } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";

import { Button, ButtonGroup } from "@chakra-ui/react";
import {
Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
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
              <MenuGroup title="Profile">
                <MenuItem>My Account</MenuItem>
                <MenuItem>Payments </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Help">
                <MenuItem>Docs</MenuItem>
                <MenuItem>FAQ</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </header>
  );
};

export default Header;
