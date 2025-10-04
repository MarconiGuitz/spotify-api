# Spotify Clone API

API RESTful para gestión de música, artistas, álbumes y playlists, inspirada en Spotify.

## Instalación

```bash
git clone https://github.com/bytedeveloopers/spotify-clone-api.git
cd spotify-clone-api
npm install
cp .env.example .env
# Edita tus variables de entorno
npm run dev
```

## Endpoints principales

- `POST /api/auth/register` — Registro de usuario
- `POST /api/auth/login` — Login, retorna JWT
- `GET /api/me` — Perfil usuario autenticado
- `GET /api/artists` — Listar artistas
- `POST /api/playlists` — Crear playlist

## Documentación interactiva
Disponible en `/api/docs` con Swagger.

## Testing
```bash
npm test
```