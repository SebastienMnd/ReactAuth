// src/LoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";
import { Flex, Box } from "@chakra-ui/react";

import { Login as FormLogin } from "../components/Forms/FormLogin";
import { Header } from "../components/Header";

export const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login, authenticated } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mail, password }),
      });

      if (response.ok) {
        login();
        navigate("/");
      } else {
        console.error(await response.json().message);
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  };

  // Redirige l'utilisateur vers le tableau de bord s'il est déjà authentifié
  if (authenticated) {
    navigate("/");
  }

  return (
    <>
      <Header />
      <Flex align="center" justify="center" minHeight="100vh" bg="gray.100">
        <Box>
          <FormLogin
            mail={mail}
            setMail={setMail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
          />
        </Box>
      </Flex>
    </>
  );
};
