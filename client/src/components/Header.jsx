// src/components/Header.js
import React from "react";
import { Box, Flex, Heading, Spacer, Link } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const Header = () => {
  const { authenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Box p={4} bg="blue.500" color="white">
      <Flex>
        <Heading as="h1" size="lg">
          Mon Application
        </Heading>
        <Spacer />
        <Box>
          <Link as={NavLink} to="/" mr={4} fontWeight="bold">
            Dashboard
          </Link>
          {authenticated ? (
            <Link onClick={handleLogout} cursor="pointer">
              Déconnexion
            </Link>
          ) : (
            <>
              <Link as={NavLink} to="/login" mr={4}>
                Connexion
              </Link>
              <Link as={NavLink} to="/register">
                Inscription
              </Link>
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
};
