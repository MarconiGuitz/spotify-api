const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { users } = require('../models/user.models');

async function register({ username, email, password }) {
  // Verifica si el usuario ya existe
  const userExists = users.find(u => u.username === username);
  if (userExists) throw new Error('El usuario ya existe');

  const hashed = await bcrypt.hash(password, 10);
  const user = { id: Date.now(), username, email, password: hashed };
  users.push(user);

  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return { user: { id: user.id, username: user.username, email: user.email }, token };
}

async function login({ username, password }) {
  const user = users.find(u => u.username === username);
  if (!user) throw new Error('Credenciales inválidas');

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error('Credenciales inválidas');

  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return { user: { id: user.id, username: user.username, email: user.email }, token };
}

module.exports = { register, login };