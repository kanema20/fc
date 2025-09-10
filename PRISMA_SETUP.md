# Prisma Database Setup

## Environment Variables

Add to your `.env.local` file:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/alphafc_db?schema=public"
```

## Database Options

### Option 1: Local PostgreSQL

```bash
# Install PostgreSQL locally
brew install postgresql

# Start PostgreSQL
brew services start postgresql

# Create database
createdb alphafc_db

# Update .env.local
DATABASE_URL="postgresql://postgres:@localhost:5432/alphafc_db?schema=public"
```

### Option 2: Railway (Recommended for deployment)

1. Go to [Railway](https://railway.app)
2. Create new project → Add PostgreSQL
3. Copy the DATABASE_URL from the Variables tab
4. Add to `.env.local`

### Option 3: Supabase

1. Go to [Supabase](https://supabase.com)
2. Create new project
3. Go to Settings → Database
4. Copy the connection string
5. Add to `.env.local`

## Setup Commands

```bash
# Generate Prisma client
npx prisma generate

# Create and apply migration
npx prisma migrate dev --name init

# View database in Prisma Studio
npx prisma studio
```

## Schema

The `EmailSignup` model will create a table with:

- `id` (auto-increment primary key)
- `email` (unique string)
- `source` (string, defaults to "cakeshop_landing")
- `created_at` (timestamp)
