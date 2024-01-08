const path = require("path");
const { readFile, writeFile } = require("fs/promises");

const filePath = path.join(__dirname, "..", "database", "users.json");

// Fonction pour lire le fichier JSON d'utilisateurs
const readUsersFile = async () => {
  try {
    const usersData = await readFile(filePath, "utf-8");
    return JSON.parse(usersData);
  } catch (error) {
    console.error("Erreur lors de la lecture du fichier JSON :", error);
    return [];
  }
};

// Fonction pour écrire le fichier JSON d'utilisateurs
const writeUsersFile = async (users) => {
  try {
    await writeFile(filePath, JSON.stringify(users, null, 2), "utf-8");
  } catch (error) {
    console.error("Erreur lors de l'écriture du fichier JSON :", error);
  }
};

module.exports = { readUsersFile, writeUsersFile };
