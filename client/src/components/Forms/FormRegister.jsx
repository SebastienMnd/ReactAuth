// src/components/Forms/FormRegister.js
import React from "react";
import { Box, Heading, Input, Button } from "@chakra-ui/react";

export const Register = ({
  mail,
  setMail,
  password,
  setPassword,
  handleRegister,
}) => {
  return (
    <Box
      w="sm"
      borderWidth="1px"
      borderRadius="lg"
      p={8}
      bg="gray.100"
      boxShadow="lg"
    >
      <Heading mb={4} color="blue.500">
        S'enregistrer
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
        onClick={handleRegister}
        mb={4}
        _hover={{ bg: "blue.600" }}
      >
        Créer un compte
      </Button>
    </Box>
  );
};
