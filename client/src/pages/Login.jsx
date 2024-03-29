// src/LoginPage.js
import React, { useEffect, useState } from "react";
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
  
  // Redirige l'utilisateur vers le tableau de bord s'il est déjà authentifié
  useEffect(() => {
    if (authenticated) {
      navigate("/");
    }
  }, [authenticated, navigate])

  const handleLogin = async () => {
    await login(mail, password)
  };

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
