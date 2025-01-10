# Cryptocurrency Price Tracking API

A Node.js backend service that tracks cryptocurrency prices using the CoinGecko API. The service periodically fetches and stores cryptocurrency prices, making them available through a RESTful API.

## Features

- Real-time cryptocurrency price tracking
- MongoDB integration for price history storage
- RESTful API endpoints for data retrieval
- Automated price updates using cron jobs
- Error handling and logging
- Production-ready configuration

## Prerequisites

- Node.js 20.x
- npm or yarn
- MongoDB Atlas account
- CoinGecko API key

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=3000 # Optional, defaults to 3000
NODE_ENV=development
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Pranav322/koinX-backend.git
cd koinX-backend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

For production:

```bash
npm start
```

## API Endpoints

### GET /api/crypto/prices

Get the latest cryptocurrency prices

### GET /api/crypto/history/:symbol

Get historical price data for a specific cryptocurrency

## Scripts

- `npm start`: Start the production server
- `npm run dev`: Start the development server with hot reload
- `npm run lint`: Run ESLint
- `npm run format`: Run Prettier
- `npm run lint:fix`: Fix ESLint issues
- `npm run format:fix`: Fix Prettier issues

## Project Structure

```
src/
├── app.js          # Express app configuration
├── server.js       # Server startup
├── routes/         # API routes
├── models/         # MongoDB models
├── services/       # Business logic
└── jobs/           # Cron jobs
```

## Contributing

Please don't

## Background Job

The service includes a background job that:

- Runs every 2 hours
- Fetches latest prices from CoinGecko
- Stores data in MongoDB
- Maintains price history for standard deviation calculations

## Rate Limits

- CoinGecko API: 10-30 calls/minute (depends on your API key)
- Our API: Currently no rate limiting implemented

## Contact

For any queries regarding this project, please open an issue or reach out to the maintainers.
