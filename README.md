# Yafa Cloud Platform

## Environment Variables

This project uses environment variables for configuration. Before running the application, you need to set up these variables.

### Setup

1. Copy the example environment file:
   ```
   cp .env.example .env
   ```

2. Edit the `.env` file and fill in your specific values:
   - `DATABASE_URL`: Your MySQL database connection string
   - `GEMINI_API_KEY`: Your Google Gemini AI API key
   - `NODE_ENV`: Set to "development" for local development
   - `VITE_API_URL`: The URL for your API (usually "http://localhost:5000/api" for local development)

### Environment Variables Reference

#### Backend Variables
- `DATABASE_URL`: Required for database connection
- `GEMINI_API_KEY`: Required for AI chat functionality
- `NODE_ENV`: Sets the environment mode (development/production)

#### Frontend Variables
- `VITE_API_URL`: Base URL for API requests

### Database Configuration

This project uses MySQL as the database backend. The connection string format is:

```
mysql://username:password@hostname:3306/database_name
```

#### Database Migration

If you're migrating from PostgreSQL to MySQL, make sure to:

1. Update your DATABASE_URL to the MySQL format
2. Run database migrations to create the tables in MySQL:
   ```
   npm run db:push
   ```

### Note on Security
Always keep your `.env` file private and never commit it to version control. 