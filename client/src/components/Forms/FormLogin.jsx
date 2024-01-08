import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Heading,
  Input,
  Button,
  Link,
  VStack,
  Text,
} from "@chakra-ui/react";

export const Login = ({
  mail,
  setMail,
  password,
  setPassword,
  handleLogin,
}) => {
  return (
    <VStack spacing={8} align="center">
      <Box
        w="sm"
        borderWidth="1px"
        borderRadius="lg"
        p={8}
        bg="gray.100"
        boxShadow="lg"
      >
        <Heading mb={4} color="blue.500">
          Connexion
        </Heading>
        <Input
          type="text"
          placeholder="E-mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          mb={4}
        />
        <Input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          mb={4}
        />
        <Button
          colorScheme="blue"
          onClick={handleLogin}
          mb={4}
          _hover={{ bg: "blue.600" }}
        >
          Connexion
        </Button>
        <Text>
          Nouveau sur notre site ?{" "}
          <Link as={RouterLink} to="/register" color="blue.500">
            Créer un compte
          </Link>
        </Text>
      </Box>
    </VStack>
  );
};
