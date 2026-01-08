---
layout: page
title: Features
subtitle: Comprehensive feature set for AI applications
---

# Fleetlit Features

Fleetlit provides a comprehensive set of features designed specifically for AI applications. Built from the ground up to handle the unique challenges of AI-powered software.

---

## Core Infrastructure

### 🏢 Multi-tenant Architecture

Built-in support for multi-level resource isolation:

- **User-level**: Personal resources and settings
- **Team-level**: Collaborative workspaces with role-based access
- **Project-level**: Application-specific data and configurations

**Benefits:**
- Complete data isolation between tenants
- Flexible collaboration models
- Scalable resource management
- Fine-grained permission control

---

### 🔐 User Management & Authentication

Complete authentication system with:

- **JWT Tokens**: Secure, stateless authentication
- **Refresh Tokens**: Long-lived sessions with automatic token refresh
- **Role-based Access Control (RBAC)**: User, Admin, SuperAdmin roles
- **Password Security**: BCrypt hashing with salt
- **Session Management**: Secure session handling with Redis

**Authentication Flow:**
1. User logs in with email/password
2. Server returns JWT access token (5min expiry) + refresh token (30 days)
3. Client includes JWT in `X-Forwarded-User` header
4. Server validates token and processes request
5. Client uses refresh token to get new access token when expired

---

### 📁 File Storage

S3-compatible storage system with:

- **Cloudflare R2 Integration**: Zero egress fees
- **Multi-tenant Support**: Files isolated by user/team/project
- **Upload/Download**: Direct URLs with signed access
- **Metadata Support**: Custom metadata for files
- **MIME Type Detection**: Automatic file type detection

**Use Cases:**
- User uploads (avatars, documents)
- AI model outputs (images, audio, video)
- Training data storage
- Model artifacts storage

**API Example:**
```bash
# Upload file
POST /api/filestorage/upload
X-Forwarded-User: <jwt_token>
Content-Type: multipart/form-data

file: <binary>
project_id: proj_123
```

---

### 💰 Asset Exchange Framework

Sophisticated transaction system for digital asset management:

- **Pluggable Execution Factories**: Custom transaction logic
- **Task-based Pipeline**: Multi-step transaction processing
- **State Management**: Track transaction states
- **Multi-tenant Support**: Asset isolation per tenant
- **Audit Trail**: Complete transaction history

**Features:**
- Atomic transactions
- Rollback support
- Transaction hooks
- Event emissions
- Custom validators

**Use Cases:**
- In-app purchases
- Token/gift card management
- Credit systems
- Quota management
- Subscription billing

---

### ⚡ Event-Driven Architecture

Kafka-based event system for asynchronous processing:

- **Event Streaming**: Real-time event propagation
- **Event Handlers**: Pluggable event processing
- **Event Sourcing**: Complete event history
- **CQRS Support**: Separate read/write models
- **Multi-producer/Consumer**: Scalable event processing

**Event Types:**
- User events (signup, login, logout)
- Team events (create, update, member changes)
- Project events (create, delete, settings changes)
- File events (upload, delete, access)
- Transaction events (create, complete, fail)

**Benefits:**
- Loose coupling between services
- Async processing for long tasks
- Event replay for debugging
- Scalable architecture

---

### ⚙️ Runtime Variables

Dynamic configuration management:

- **Real-time Updates**: Change config without deployment
- **Scoped Variables**: User/team/project level
- **Type Safety**: Validated variable types
- **Version Control**: Track configuration changes

**Variable Types:**
- String
- Number
- Boolean
- JSON
- Encrypted

**Use Cases:**
- Feature flags
- A/B testing
- Dynamic pricing
- Rate limiting
- Throttling

---

### 💬 Collections & Threads

Advanced data organization for AI conversations:

- **Collections**: Organize messages by topic
- **Threads**: Conversation threads with message ordering
- **Metadata**: Custom metadata for collections/threads
- **Search**: Full-text search across messages
- **Context Window**: Manage conversation context

**API Example:**
```bash
# Add message to thread
POST /ssapi/v1/threads/messages/add
X-API-Key: <api_key>

{
  "thread_id": "thread_123",
  "role": "user",
  "content": "Hello, AI assistant!",
  "metadata": {
    "source": "web",
    "model": "gpt-4"
  }
}
```

**Use Cases:**
- AI chat applications
- Customer support bots
- Code assistants
- Writing assistants
- Data analysis tools

---

## Technology Stack

### 🔷 Go 1.24+

High-performance, type-safe language:

- **Concurrency**: Goroutines for parallel processing
- **Performance**: Compiled binary, fast execution
- **Type Safety**: Compile-time type checking
- **Standard Library**: Rich built-in packages

---

### 🗃️ PostgreSQL

Powerful relational database:

- **ACID Transactions**: Data integrity guarantees
- **JSON Support**: Flexible data storage
- **Full-text Search**: Built-in search capabilities
- **Extensions**: pgvector (vector search), etc.

---

### 🔄 Redis

Fast in-memory data store:

- **Caching**: Query result caching
- **Sessions**: User session storage
- **Pub/Sub**: Real-time messaging
- **Rate Limiting**: Request throttling

---

### 📨 Kafka

Distributed event streaming:

- **Event Bus**: Async event processing
- **Event Sourcing**: Complete event history
- **Scalability**: Horizontal scaling
- **Durability**: Persistent event log

---

### 🐘 Ent ORM

Schema-driven ORM with code generation:

- **Type Safety**: Generated Go code from schema
- **Migrations**: Automatic migration generation
- **Relations**: Defined relationships
- **Eager Loading**: Optimized queries

---

### 🔌 Wire DI

Compile-time dependency injection:

- **Clean Architecture**: Separation of concerns
- **Testability**: Easy mocking
- **Safety**: Compile-time dependency checking
- **Maintainability**: Clear dependency graph

---

### 🌐 Traefik

Modern API gateway:

- **Service Discovery**: Automatic routing
- **Load Balancing**: Distribute traffic
- **SSL/TLS**: Automatic HTTPS
- **Middleware**: Request/response processing

---

### 📡 Protocol Buffers

Efficient binary serialization:

- **Performance**: Fast serialization/deserialization
- **Schema**: Strongly-typed message definitions
- **Compatibility**: Backward/forward compatible
- **Size**: Smaller message size than JSON

---

## Security Features

### 🔒 Authentication & Authorization

- JWT-based stateless authentication
- Role-based access control (RBAC)
- API key authentication for SDK
- Multi-factor authentication (coming soon)

### 🛡️ Data Security

- Encryption at rest (database)
- Encryption in transit (TLS/SSL)
- Field-level encryption (sensitive data)
- PCI DSS compliance support

### 🚦 Rate Limiting

- Per-user rate limits
- Per-API-key limits
- IP-based throttling
- Distributed rate limiting with Redis

### 📝 Audit Logging

- Complete audit trail
- User activity tracking
- Data modification logs
- Compliance reporting

---

## Scalability Features

### 📈 Horizontal Scaling

- Stateless API servers
- Distributed caching
- Database connection pooling
- Load balancing

### ⚡ Performance Optimization

- Query result caching
- Database indexing
- Connection pooling
- Efficient data structures

### 🔄 High Availability

- Health checks
- Graceful shutdown
- Automatic retries
- Circuit breakers

---

## Developer Experience

### 📚 Comprehensive Documentation

- API reference
- Architecture guides
- Quick start tutorials
- Example code

### 🔧 Developer Tools

- Database migration tools
- Code generation
- CLI tool
- Admin dashboard

### 🧪 Testing Support

- Unit testing framework
- Integration testing
- E2E testing
- Load testing tools

---

## Roadmap Features

### 🚀 Coming Soon

- **Real-time Communication**: WebSocket support
- **Notifications**: Email, SMS, Push, Webhook
- **Task Queue**: Background job processing
- **Vector Database**: pgvector integration
- **AI Model Integration**: OpenAI, Anthropic, Cohere
- **Prompt Management**: Version control for prompts
- **Auto-generated REST API**: PostgREST-style API
- **Row Level Security**: Fine-grained access control
- **Subscription & Billing**: Stripe, PayPal, Alipay
- **Analytics**: Event tracking and insights

---

## Why Fleetlit?

### Built for AI Applications

Unlike generic BaaS platforms, Fleetlit is designed specifically for AI applications:

- **Conversation Management**: Built-in threads and messages
- **Vector Search**: Native support for embeddings
- **Metering**: Track AI token usage
- **Async Processing**: Handle long-running AI tasks
- **Event-driven**: React to AI events in real-time

### Modern Architecture

Built with modern best practices:

- **Clean Architecture**: Separation of concerns
- **Domain-Driven Design**: Business logic focused
- **Event Sourcing**: Complete event history
- **CQRS**: Optimized read/write paths

### Production Ready

Battle-tested features:

- **Multi-tenant**: From day one
- **Scalable**: Horizontal scaling
- **Secure**: Authentication, authorization, encryption
- **Observable**: Logging, metrics, tracing

---

## Get Started

Ready to build your AI application with Fleetlit?

- 📖 [Read the Documentation](/docs/)
- 🚀 [Quick Start Guide](/docs/#quick-start)
- 💻 [View on GitHub](https://github.com/fleetlit/fleetlit)
- 📧 [Contact Us](mailto:hello@fleetlit.io)
