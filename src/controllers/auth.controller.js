const { register, login } = require('../services/auth.service');

async function registerController(req, res) {
  const { username, email, password } = req.body;
  try {
    const result = await register({ username, email, password });
    res.json(result);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
}

async function loginController(req, res) {
  const { username, password } = req.body;
  try {
    const result = await login({ username, password });
    res.json(result);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
}

module.exports = { registerController, loginController };