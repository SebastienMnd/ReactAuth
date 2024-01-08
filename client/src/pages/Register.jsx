// src/RegisterPage.js
import React, { useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Register as FormRegister } from "../components/Forms/FormRegister";
import { Header } from "../components/Header";

export const Register = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mail, password }),
      });

      if (response.ok) {
        navigate("/login");
      } else {
        console.error(await response.json().message); // L'utilisateur existe déjà ou autre erreur
      }
    } catch (error) {
      console.error("Erreur lors de la création de l'utilisateur :", error);
    }
  };

  return (
    <>
      <Header />
      <Flex align="center" justify="center" minHeight="100vh" bg="gray.100">
        <Box>
          <FormRegister
            mail={mail}
            setMail={setMail}
            password={password}
            setPassword={setPassword}
            handleRegister={handleRegister}
          />
        </Box>
      </Flex>
    </>
  );
};
