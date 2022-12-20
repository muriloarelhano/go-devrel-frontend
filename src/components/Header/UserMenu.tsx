import {
  Avatar,
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { FaUser, FaUserLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { AuthenticationWrapper } from "../AuthenticationWrapper";

export const NavBarUserButtons: React.FC = () => {
  const { userInfo, handleLogout } = useContext(AuthContext);

  return (
    <AuthenticationWrapper>
      <HStack>
        <Menu>
          <MenuButton as={"button"}>
            <Avatar />
          </MenuButton>
          <MenuList>
            <HStack px={"3"} py={"2"} align={"center"}>
              <Avatar />
              <Box>
                <Text fontWeight={"semibold"}>
                  {userInfo?.first_name ? userInfo?.first_name : ""}
                </Text>
                <Text fontSize={"sm"}>{userInfo?.last_name}</Text>
              </Box>
            </HStack>
            <MenuGroup title="Profile">
              <Link to="/dashboard">
                <MenuItem icon={<FaUser />}>Minha Conta</MenuItem>
              </Link>
            </MenuGroup>
            <MenuDivider />
            <MenuItem icon={<FaUserLock />} onClick={() => handleLogout()}>
              Sair
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </AuthenticationWrapper>
  );
};
