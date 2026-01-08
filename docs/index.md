---
layout: doc
title: Getting Started
subtitle: Get up and running with Fleetlit in minutes
---

# Getting Started with Fleetlit

Welcome to Fleetlit! This guide will help you get up and running with Fleetlit quickly.

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Go 1.24+** - [Download](https://golang.org/dl/)
- **Docker** - [Download](https://www.docker.com/get-started)
- **Docker Compose** - Included with Docker Desktop
- **PostgreSQL 14+** - Or use Docker
- **Redis 6+** - Or use Docker
- **Kafka** (Optional) - For event-driven features
- **Make** - Build tool
- **Git** - Version control

### Verify Installations

```bash
# Check Go version
go version

# Check Docker
docker --version
docker-compose --version

# Check PostgreSQL
psql --version

# Check Redis
redis-cli --version
```

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/fleetlit/fleetlit.git
cd fleetlit
```

### 2. Install Dependencies

```bash
# Download Go dependencies
go mod download

# Verify dependencies
go mod verify
```

### 3. Start Local Development Environment

Fleetlit includes a Taskfile that makes it easy to start all required services:

```bash
# Start PostgreSQL, Redis, and Kafka with Docker Compose
task local-dev-up
```

This command will:
- Start PostgreSQL on port 5432
- Start Redis on port 6379
- Start Kafka on port 19092
- Create required databases

---

## Database Setup

### Run Migrations

```bash
# Run all database migrations
task db-migrate-local
```

This will:
- Create all required tables
- Set up indexes
- Create initial schema

### Verify Database Connection

```bash
# Check if database is accessible
task db-ping
```

---

## Code Generation

Fleetlit uses code generation for dependency injection, ORM, and protocol buffers.

### Generate All Code

```bash
# Generate Wire dependency injection
task wire-all

# Generate Ent ORM code
task generate-ent

# Generate Protocol Buffer code
task generate-protocol
```

### What Gets Generated?

- **Wire**: Dependency injection code for server and CLI
- **Ent**: Database models and queries from schema
- **Protobuf**: API message types and services

---

## Building

### Build the Server

```bash
# Build the server binary
make build
```

This creates the binary at `./bin/server`.

### Build Options

```bash
# Build for development (with debug symbols)
make build-dev

# Build for production (optimized)
make build-prod

# Build for different platforms
GOOS=linux GOARCH=amd64 make build
GOOS=darwin GOARCH=arm64 make build
```

---

## Running the Server

### Start the Server

```bash
# Run the server
./bin/server
```

The server will start on **port 9099** by default.

### Configuration

Configuration is loaded from `configs/config.yaml`:

```yaml
server:
  port: 9099
  host: "0.0.0.0"

database:
  host: "localhost"
  port: 5432
  user: "fleetlit"
  password: "fleetlit"
  database: "fleetlit"

redis:
  host: "localhost"
  port: 6379

jwt:
  secret: "your-secret-key"
  access_token_duration: "5m"
  refresh_token_duration: "720h"
```

### Environment Variables

You can override config with environment variables:

```bash
export POSTGRES_HOST=localhost
export POSTGRES_PORT=5432
export REDIS_HOST=localhost
export REDIS_PORT=6379
export JWT_SECRET=your-secret-key

./bin/server
```

---

## Creating Admin User

### Create Default Admin

```bash
# Create admin user with default credentials
task create-default-admin
```

**Default credentials:**
- Username: `admin`
- Email: `admin@admin.com`
- Password: `11111111`

⚠️ **Important**: Change the default password in production!

### Create Custom Admin

```bash
# Create admin with custom credentials
./bin/cli admin create \
  --username myadmin \
  --email admin@example.com \
  --password securepassword
```

---

## Testing the Setup

### 1. Test Health Endpoint

```bash
curl http://localhost:9099/health
```

Response:
```json
{
  "status": "ok",
  "version": "1.0.0"
}
```

### 2. Login as Admin

```bash
curl -X POST http://localhost:9099/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@admin.com",
    "password": "11111111"
  }'
```

Response:
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "refresh_token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "user_admin",
    "username": "admin",
    "email": "admin@admin.com",
    "role": "superadmin"
  }
}
```

### 3. Access Protected Endpoint

```bash
curl -X POST http://localhost:9099/api/users/me \
  -H "X-Forwarded-User: <your_access_token>"
```

---

## Project Structure

Understanding the Fleetlit codebase:

```
fleetlit/
├── cmd/                    # Application entry points
│   ├── server/            # HTTP server
│   └── cli/               # CLI tool
├── internal/              # Internal application code
│   ├── api/              # API layer
│   │   ├── events/       # Event handlers
│   │   ├── http/         # HTTP handlers
│   │   │   ├── admin/    # Admin API endpoints
│   │   │   └── ssapi/    # SDK API endpoints
│   │   └── tasks/        # Background tasks
│   ├── domain/           # Business logic
│   │   ├── user/         # User domain
│   │   ├── team/         # Team domain
│   │   └── project/      # Project domain
│   ├── infra/            # Infrastructure
│   │   ├── db/           # Database
│   │   ├── cache/        # Cache (Redis)
│   │   └── queue/        # Queue (Kafka)
│   └── usecase/          # Use cases
├── pkg/                  # Public packages
│   ├── exchangeflow/    # Asset exchange framework
│   └── genproto/        # Generated protobuf
├── db/migrations/        # Database migrations
├── protocol/             # Protocol definitions
├── configs/             # Configuration files
├── deployments/         # Deployment configs
└── docs/               # Documentation
```

---

## Common Tasks

### Adding a New API Endpoint

1. **Create handler** in `internal/api/http/`:

```go
package http

import "github.com/gin-gonic/gin"

func NewFeatureHandler(c *FeatureController) *gin.Engine {
    router := gin.Default()
    router.POST("/features", c.CreateFeature)
    return router
}
```

2. **Register in provider** (`internal/api/provides.go`):

```go
func NewHTTPController(
    featureHandler *FeatureHandler,
) *HTTPController {
    return &HTTPController{
        FeatureHandler: featureHandler,
    }
}
```

3. **Run Wire**:

```bash
task wire-server
```

### Modifying Database Schema

1. **Edit schema** in `internal/infra/ent/schema/`:

```go
package schema

import "entgo.io/ent/schema/field"

type Feature struct {
    ent.Schema
}

func (Feature) Fields() []ent.Field {
    return []ent.Field{
        field.String("name"),
        field.Text("description"),
    }
}
```

2. **Generate Ent code**:

```bash
task generate-ent
```

3. **Create migration**:

```bash
# Create new migration file
task db-migrate-create name=add_features_table

# Run migration
task db-migrate-local
```

### Running Tests

```bash
# Run all tests
make test

# Run specific package tests
go test ./internal/domain/user/...

# Run with coverage
go test -cover ./...

# Run with race detection
go test -race ./...
```

---

## Docker Deployment

### Build Docker Image

```bash
docker build -t fleetlit:latest .
```

### Run with Docker Compose

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Environment Configuration

Create `.env` file:

```env
POSTGRES_USER=fleetlit
POSTGRES_PASSWORD=fleetlit
POSTGRES_HOST=postgres
POSTGRES_PORT=5432
POSTGRES_DB=fleetlit

REDIS_HOST=redis
REDIS_PORT=6379

KAFKA_BROKERS=kafka:19092

JWT_SECRET=your-production-secret
```

---

## Troubleshooting

### Database Connection Failed

**Error**: `failed to connect to database`

**Solution**:
```bash
# Check if PostgreSQL is running
docker ps | grep postgres

# Start PostgreSQL
task local-dev-up

# Check connection
psql -h localhost -U fleetlit -d fleetlit
```

### Port Already in Use

**Error**: `bind: address already in use`

**Solution**:
```bash
# Find process using port 9099
lsof -i :9099

# Kill the process
kill -9 <PID>

# Or change port in config.yaml
```

### Migration Failed

**Error**: `migration failed`

**Solution**:
```bash
# Check migration status
task db-migrate-status

# Rollback last migration
task db-migrate-rollback

# Re-run migrations
task db-migrate-local
```

### Wire Generation Failed

**Error**: `wire: no matching return type`

**Solution**:
```bash
# Clean wire cache
rm -f cmd/server/wire_gen.go
rm -f cmd/cli/wire_gen.go

# Regenerate
task wire-all
```

---

## Next Steps

Now that you have Fleetlit running:

1. 📖 **Read the Architecture Guide** - Understand the system design
2. 🚀 **Explore APIs** - Learn about the three API layers
3. 🎯 **Build Something** - Create your first AI application
4. 🔧 **Customize** - Add your own features and logic
5. 📦 **Deploy** - Deploy to production

### Additional Resources

- [API Documentation](/api/) - Complete API reference
- [Features](/features/) - Detailed feature overview
- [Roadmap](/roadmap/) - What's coming next
- [GitHub Repository](https://github.com/fleetlit/fleetlit) - Source code
- [Issues](https://github.com/fleetlit/fleetlit/issues) - Report bugs

---

## Getting Help

If you encounter any issues:

- 📖 Check the [Documentation](/docs/)
- 💬 Visit our [Community Forum](https://github.com/fleetlit/fleetlit/discussions)
- 🐛 [Report a Bug](https://github.com/fleetlit/fleetlit/issues)
- 📧 [Email Support](mailto:support@fleetlit.io)

---

## Community

Join our growing community:

- ⭐ **Star us on GitHub** - Show your support
- 🍴 **Fork the repository** - Contribute to the project
- 📢 **Share feedback** - Help us improve
- 🤝 **Contribute** - Submit pull requests

Happy building! 🚀
