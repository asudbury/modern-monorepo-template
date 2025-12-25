# API App

A Node.js REST API built with Express and TypeScript, providing backend services for the web and admin applications.

## Features

- 🟢 **Node.js** with Express framework
- 🟦 **TypeScript** with strict mode
- 🔥 **Hot Reload** with ts-node-dev in development
- 🧪 **Vitest** for testing
- 🔧 Uses shared **@repo/utils** package
- 📋 **Zod** for request validation
- ✅ Example REST endpoints included

## Development

```bash
# Run in development mode (with hot reload)
pnpm --filter @repo/api dev

# Build for production
pnpm --filter @repo/api build

# Start production server
pnpm --filter @repo/api start

# Run tests
pnpm --filter @repo/api test
```

## Project Structure

```
src/
├── index.ts          # Server entry point and routes
├── example.test.ts   # Example tests
└── README.md         # This file
```

## API Endpoints

### Example Endpoints

- `GET /` - Health check endpoint
- `GET /api/health` - API health status
- Add your endpoints in `src/index.ts`

## Environment Variables

Create a `.env` file:

```env
API_PORT=3000
NODE_ENV=development
```

## Adding New Endpoints

1. Define your route in `src/index.ts`:
```typescript
app.get('/api/users', (req, res) => {
  res.json({ users: [] });
});
```

2. Add validation using Zod:
```typescript
import { z } from 'zod';

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});
```

3. Write tests in `src/*.test.ts`

## Technologies

- Node.js 20+
- Express 4.x
- TypeScript 5.9.x
- ts-node-dev for development
- Zod for validation
- Vitest for testing

