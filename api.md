---
layout: page
title: API Documentation
subtitle: Comprehensive API reference for Fleetlit
---

# Fleetlit API Documentation

Fleetlit provides three distinct API categories for different use cases. Each API has its own authentication method and is designed for specific scenarios.

## API Overview

| API Type | Base Path | Target | Authentication |
|----------|-----------|--------|----------------|
| **Public API** | `/api` | Client Applications | JWT Token (X-Forwarded-User header) |
| **Admin API** | `/api/admin` | Admin Dashboard | JWT + SuperAdmin Role |
| **SDK API** | `/ssapi/v1` | SDK/Servers | API Key (X-API-Key header) |

---

## 1. Public API (`/api`)

**Authentication**: JWT token via `X-Forwarded-User` header

**Use Cases**: Web dashboards, mobile apps, client applications

### User Management

#### Get Current User Profile
```http
POST /api/users/me
Headers:
  X-Forwarded-User: <jwt_token>

Response:
{
  "id": "user_123",
  "username": "john_doe",
  "email": "john@example.com",
  "created_at": "2025-01-08T10:00:00Z"
}
```

#### Update User Profile
```http
POST /api/users/update
Headers:
  X-Forwarded-User: <jwt_token>
Body:
{
  "username": "john_doe_updated",
  "avatar_url": "https://example.com/avatar.jpg"
}
```

### Team Management

#### List Teams
```http
POST /api/teams/list
Headers:
  X-Forwarded-User: <jwt_token>

Response:
{
  "teams": [
    {
      "id": "team_123",
      "name": "Engineering Team",
      "role": "admin",
      "created_at": "2025-01-08T10:00:00Z"
    }
  ]
}
```

#### Create Team
```http
POST /api/teams/create
Headers:
  X-Forwarded-User: <jwt_token>
Body:
{
  "name": "New Team",
  "description": "Team description"
}
```

### Project Management

#### List Projects
```http
POST /api/projects/list
Headers:
  X-Forwarded-User: <jwt_token>

Response:
{
  "projects": [
    {
      "id": "proj_123",
      "name": "AI Assistant",
      "team_id": "team_123",
      "created_at": "2025-01-08T10:00:00Z"
    }
  ]
}
```

#### Create Project
```http
POST /api/projects/create
Headers:
  X-Forwarded-User: <jwt_token>
Body:
{
  "name": "My AI Project",
  "team_id": "team_123",
  "description": "Project description"
}
```

### File Storage

#### Upload File
```http
POST /api/filestorage/upload
Headers:
  X-Forwarded-User: <jwt_token>
Content-Type: multipart/form-data

Form Data:
  - file: <binary>
  - project_id: "proj_123"

Response:
{
  "id": "file_123",
  "url": "https://storage.example.com/file_123.jpg",
  "size": 1024000,
  "mime_type": "image/jpeg"
}
```

#### List Files
```http
POST /api/filestorage/list
Headers:
  X-Forwarded-User: <jwt_token>
Body:
{
  "project_id": "proj_123",
  "limit": 50,
  "offset": 0
}
```

---

## 2. Admin API (`/api/admin`)

**Authentication**: JWT token via `X-Forwarded-User` header + SuperAdmin role verification

**Use Cases**: Admin dashboard, user management, system administration

### User Management

#### List All Users
```http
POST /api/admin/users/list
Headers:
  X-Forwarded-User: <admin_jwt_token>
Body:
{
  "limit": 50,
  "offset": 0,
  "search": "john"
}

Response:
{
  "users": [
    {
      "id": "user_123",
      "username": "john_doe",
      "email": "john@example.com",
      "role": "user",
      "created_at": "2025-01-08T10:00:00Z"
    }
  ],
  "total": 150
}
```

#### Create User
```http
POST /api/admin/users/create
Headers:
  X-Forwarded-User: <admin_jwt_token>
Body:
{
  "username": "jane_doe",
  "email": "jane@example.com",
  "password": "secure_password",
  "role": "user"
}
```

#### Update User Role
```http
POST /api/admin/users/update-role
Headers:
  X-Forwarded-User: <admin_jwt_token>
Body:
{
  "user_id": "user_123",
  "role": "admin"
}
```

### System Statistics

#### Get System Stats
```http
POST /api/admin/stats
Headers:
  X-Forwarded-User: <admin_jwt_token>

Response:
{
  "total_users": 1500,
  "total_teams": 320,
  "total_projects": 850,
  "total_storage_gb": 125.5,
  "active_sessions": 450
}
```

---

## 3. SDK API (`/ssapi/v1`)

**Authentication**: API Key via `X-API-Key` header

**Use Cases**: SDK integrations, server-to-server communication, telemetry, metering

### Metering

#### Collect Metering Data
```http
POST /ssapi/v1/meters/collect
Headers:
  X-API-Key: <api_key>
Body:
{
  "project_id": "proj_123",
  "metrics": [
    {
      "name": "ai_tokens_used",
      "value": 1500,
      "timestamp": "2025-01-08T10:00:00Z"
    },
    {
      "name": "api_requests",
      "value": 50,
      "timestamp": "2025-01-08T10:00:00Z"
    }
  ]
}
```

### Thread Management

#### Add Message to Thread
```http
POST /ssapi/v1/threads/messages/add
Headers:
  X-API-Key: <api_key>
Body:
{
  "thread_id": "thread_123",
  "role": "user",
  "content": "Hello, AI assistant!",
  "metadata": {
    "source": "web"
  }
}

Response:
{
  "message_id": "msg_456",
  "thread_id": "thread_123",
  "created_at": "2025-01-08T10:00:00Z"
}
```

#### Get Thread Details
```http
POST /ssapi/v1/threads/get
Headers:
  X-API-Key: <api_key>
Body:
{
  "thread_id": "thread_123"
}

Response:
{
  "id": "thread_123",
  "project_id": "proj_123",
  "messages": [
    {
      "id": "msg_123",
      "role": "user",
      "content": "Hello!",
      "created_at": "2025-01-08T10:00:00Z"
    }
  ],
  "metadata": {},
  "created_at": "2025-01-08T10:00:00Z"
}
```

### Event Tracking

#### Track Event
```http
POST /ssapi/v1/events/track
Headers:
  X-API-Key: <api_key>
Body:
{
  "event_name": "user_interaction",
  "properties": {
    "action": "button_click",
    "page": "/dashboard",
    "user_id": "user_123"
  },
  "timestamp": "2025-01-08T10:00:00Z"
}
```

---

## Authentication

### JWT Token Structure

Fleetlit uses JWT tokens for authentication. Tokens are issued during login and must be included in the `X-Forwarded-User` header.

```json
{
  "header": {
    "alg": "HS256",
    "typ": "JWT"
  },
  "payload": {
    "user_id": "user_123",
    "email": "user@example.com",
    "role": "user",
    "exp": 1704700800,
    "iat": 1704697200
  }
}
```

### Token Expiration

- **Access Token**: 5 minutes
- **Refresh Token**: 30 days

### API Key Format

API keys for the SDK API follow this format:

```
flsk_<project_id>_<random_key>
```

Example: `flsk_proj_abc123_xyz789`

---

## Error Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 400 | Bad Request - Invalid input parameters |
| 401 | Unauthorized - Missing or invalid authentication |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource does not exist |
| 409 | Conflict - Resource already exists |
| 429 | Too Many Requests - Rate limit exceeded |
| 500 | Internal Server Error - Server error |

### Error Response Format

```json
{
  "error": {
    "code": "INVALID_INPUT",
    "message": "Invalid email address format",
    "details": {
      "field": "email",
      "value": "invalid-email"
    }
  }
}
```

---

## Rate Limiting

### Public API
- **Per-user**: 100 requests/minute
- **Burst**: 200 requests

### Admin API
- **Per-admin**: 200 requests/minute
- **Burst**: 400 requests

### SDK API
- **Per-API key**: 1000 requests/minute
- **Burst**: 2000 requests

Rate limit headers are included in all responses:

```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1704700800
```

---

## SDK Examples

### Go SDK
```go
import "github.com/fleetlit/sdk-go"

client := fleetlit.NewClient("flsk_proj_abc123_xyz789")

// Add message to thread
msg, err := client.Threads.AddMessage(&AddMessageInput{
    ThreadID: "thread_123",
    Role:     "user",
    Content:  "Hello, AI!",
})

// Collect metrics
err := client.Meters.Collect(&MetricsInput{
    ProjectID: "proj_123",
    Metrics: []Metric{
        {Name: "tokens_used", Value: 1500},
    },
})
```

### Python SDK
```python
from fleetlit import FleetlitClient

client = FleetlitClient(api_key="flsk_proj_abc123_xyz789")

# Add message to thread
message = client.threads.add_message(
    thread_id="thread_123",
    role="user",
    content="Hello, AI!"
)

# Collect metrics
client.meters.collect(
    project_id="proj_123",
    metrics=[
        {"name": "tokens_used", "value": 1500}
    ]
)
```

### JavaScript SDK
```javascript
import { FleetlitClient } from '@fleetlit/sdk';

const client = new FleetlitClient('flsk_proj_abc123_xyz789');

// Add message to thread
const message = await client.threads.addMessage({
  threadId: 'thread_123',
  role: 'user',
  content: 'Hello, AI!'
});

// Collect metrics
await client.meters.collect({
  projectId: 'proj_123',
  metrics: [
    { name: 'tokens_used', value: 1500 }
  ]
});
```

---

## WebSocket Support (Coming Soon)

Fleetlit will support WebSocket connections for real-time features:

```javascript
const ws = new WebSocket('wss://api.fleetlit.com/realtime/v1/subscribe?token=<jwt_token>');

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Real-time update:', data);
};
```

---

## Need Help?

- 📖 [Documentation](/docs/)
- 💬 [Community Forum](https://github.com/fleetlit/fleetlit/discussions)
- 🐛 [Bug Reports](https://github.com/fleetlit/fleetlit/issues)
- 📧 [Email Support](mailto:support@fleetlit.io)
