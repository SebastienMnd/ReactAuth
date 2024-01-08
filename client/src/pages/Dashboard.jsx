// DashboardPage.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Header } from "../components/Header";
import { Heading, Box, Text, Flex } from "@chakra-ui/react";

export const Dashboard = () => {
  const { authenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Header />
      <Flex
        align="center"
        justify="center"
        minHeight="100vh"
        bg="gray.100"
        direction={"column"}
      >
        <Box w="100%" maxW="100%" h="100%" minH="100vh" bg="red.500" p={8}>
          <Heading>Dashboard</Heading>
          <Text> Bienvenue sur la page de suivi </Text>
        </Box>
      </Flex>
    </>
  );
};
