## Setup

Make sure to install dependencies:

```bash
pnpm install
```

## Setting Up Environment Variables

To configure your Nuxt development environment, ensure you create a `.env` file in the root of your project.

### Example .env File:

```bash
NUXT_DEVELOPMENT_PORT=8000 # I recommend using port `8000` for consistency and avoiding conflicts with other services.
```

### Using .env.example

It is recommended to use a `.env.example` file to serve as a template for environment variables in your project. This helps developers understand which variables are needed.

## Development Server

Start the development server on `http://localhost:8000` (or based on the `NUXT_DEVELOPMENT_PORT` value in your `.env` file).

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```
