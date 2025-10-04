require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const authRoutes = require('./routes/auth.routes');
app.use('/api/auth', authRoutes);

const { authMiddleware } = require('./middlewares/auth.middleware');
app.get('/api/protegido', authMiddleware, (req, res) => {
  res.json({ message: `Bienvenido, ${req.user.username}!` });
});

app.get('/', (req, res) => {
  res.send('API tipo Spotify funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});