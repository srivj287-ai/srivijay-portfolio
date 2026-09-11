# Srivijay B — Portfolio

Full-stack developer portfolio built with React + Express.

## Structure

```
portfolio/
├── frontend/   # React + Vite + Tailwind CSS + Framer Motion
└── backend/    # Node.js + Express REST API
```

---

## Getting Started

### 1. Backend

```bash
cd backend
npm install
npm run dev        # starts on http://localhost:5000
```

The backend exposes:
- `GET  /api/health`       — health check
- `POST /api/contact`      — saves contact messages to `data/messages.json`
- `GET  /api/contact`      — lists all received messages

### 2. Frontend

```bash
cd frontend
npm install
cp .env.example .env      # configure API URL if needed
npm run dev               # starts on http://localhost:5173
```

The Vite dev server proxies `/api` requests to `localhost:5000` automatically.

---

## Contact API

### POST /api/contact

**Body:**
```json
{
  "name":    "Alice",
  "email":   "alice@example.com",
  "subject": "Hello",
  "message": "Love the portfolio!"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Your message has been received. I'll get back to you soon!"
}
```

Messages are stored in `backend/data/messages.json`.

---

## Tech Stack

| Layer     | Stack                              |
|-----------|------------------------------------|
| Frontend  | React 18, Vite, Tailwind CSS, Framer Motion |
| Backend   | Node.js, Express                   |
| Storage   | Local JSON file                    |
| Fonts     | Space Grotesk, Inter, JetBrains Mono |

---

## Production Build

```bash
# Build frontend
cd frontend && npm run build

# Serve backend
cd backend && npm start
```

Point your reverse proxy (nginx / Vercel / Railway) at the `frontend/dist` folder for static files, and the backend at port 5000.
