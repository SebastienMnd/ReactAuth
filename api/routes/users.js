const express = require("express");
const bcrypt = require("bcrypt");
const { readUsersFile, writeUsersFile } = require("../functions/users");

const router = express.Router();

// Middleware pour vérifier les informations d'identification
router.post("/login", async (req, res) => {
  const { mail, password } = req.body;

  try {
    const users = await readUsersFile();

    // Recherche de l'utilisateur par adresse e-mail
    const user = users.find((u) => u.mail === mail);

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({ message: "Authentification réussie" });
    } else {
      res
        .status(401)
        .json({ message: "Adresse e-mail ou mot de passe incorrect" });
    }
  } catch (error) {
    console.error(
      "Erreur lors de la vérification des informations d'identification :",
      error
    );
    res.status(500).json({ message: "Erreur du serveur" });
  }
});

// Middleware pour créer un nouvel utilisateur
router.post("/register", async (req, res) => {
  const { mail, password } = req.body;

  try {
    const users = await readUsersFile();

    // Vérifie si l'utilisateur existe déjà
    if (users.some((u) => u.mail === mail)) {
      return res.status(400).json({ message: "L'utilisateur existe déjà" });
    }

    // Hache le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Ajoute le nouvel utilisateur
    users.push({ mail, password: hashedPassword });
    await writeUsersFile(users);

    res.json({ message: "Utilisateur créé avec succès" });
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur :", error);
    res.status(500).json({ message: "Erreur du serveur" });
  }
});

module.exports = router;
