# PokAImon Generator🎨

**PokAImon Generator** - An AI-powered creature creator app with:

- 🎨 Canvas drawing interface
- 🤖 AI-generated creatures from your doodles
- 📸 Gallery with filtering and sorting
- ❤️ Like functionality
- 🌙 Dark mode toggle
- 🚀 Modern React patterns and best practices

## 🛠️ Tech Stack

**Frontend**

- React 19 (Vite)
- React Router
- Tailwind CSS

**Backend**

- Node.js + Express
- PostgreSQL 16
- Gemini AI (optional)

## 🗂️ Project Structure

```
PokemonGen/
├── frontend/    # React app (Vite + Tailwind)
├── slides/            # Presentation slides
├── server/            # Express API + Postgres
└── docker-compose.yml # Database setup
```

## 🚦 Quick Start

### 1. Start the Database

```bash
docker compose up -d
```

This starts a PostgreSQL database with the schema pre-configured.

### 2. Configure Environment

Create environment files:

**Backend** (`server/.env`):

```env
DATABASE_URL=postgres://postgres:postgres@localhost:5432/pokegen
```

**Frontend** (`frontend/.env`):

```env
VITE_BACKEND_URL=http://localhost:3001
```

### 3. Start the Backend

```bash
cd server
npm install
npm start
```

Backend runs at `http://localhost:3001`

### 4. Start the Frontend

```bash
cd client-tutorial
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`

## 📖 API Endpoints

Base URL: `http://localhost:3001`

| Method  | Endpoint                 | Description           |
| ------- | ------------------------ | --------------------- |
| `GET`   | `/api/health`            | Health check          |
| `GET`   | `/api/gallery`           | Get all PokAImon      |
| `POST`  | `/api/generate`          | Generate new PokAImon |
| `PATCH` | `/api/pokaimon/:id/like` | Like a PokAImon       |

### Example: Generate PokAImon

```bash
curl -X POST http://localhost:3001/api/generate \
  -H "Content-Type: application/json" \
  -d '{"doodle_data": "<base64-encoded-image>"}'
```

Response:

```json
{
  "id": 1,
  "name": "Scribblet",
  "type": "Fire/Dragon",
  "characteristics": "Cheerful and imaginative",
  "image_url": "data:image/png;base64,...",
  "like_count": 0
}
```

## 🤖 AI Integration (Optional)

The app can generate AI-powered creatures using Google's Gemini API:

1. Get an API key from [Google AI Studio](https://aistudio.google.com/)
2. Add it to `server/.env` as `GEMINI_API_KEY`
3. The app will use AI to generate unique creatures!

Without the API key, the app uses simulated placeholder generation.

## 🐛 Troubleshooting

**Database connection issues?**

- Ensure Docker is running: `docker compose ps`
- Reset database: `docker compose down -v && docker compose up -d`

**Port conflicts?**

- Backend: Change `PORT` in `server/.env`
- Frontend: Update `VITE_BACKEND_URL` to match

**CORS errors?**

- Verify `CORS_ORIGIN` in `server/.env` matches your frontend URL

## 📝 Learning Material

[Tutorial from AhsanAyaz](https://github.com/AhsanAyaz/react-in-90ish/tree/main/client-tutorial)

---
