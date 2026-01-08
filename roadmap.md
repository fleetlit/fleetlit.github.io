---
layout: page
title: Roadmap
subtitle: What's coming next for Fleetlit
---

# Fleetlit Roadmap

**Supabase for AI Era** - Product Roadmap

---

## Vision

Build a comprehensive Backend-as-a-Service platform specifically designed for AI applications, providing the essential infrastructure that AI/SaaS applications need.

---

## Current Features ✅

### Core Infrastructure

- ✅ **Multi-tenant Architecture** - Users, Teams, Projects
- ✅ **User Management** - Authentication, JWT, Refresh Tokens
- ✅ **File Storage** - S3-compatible, Cloudflare R2
- ✅ **Event-Driven** - Kafka-based
- ✅ **Asset Exchange** - AssetFlow framework
- ✅ **Runtime Variables** - Dynamic configuration
- ✅ **Collections & Threads** - Data organization

---

## Roadmap by Priority

### 🚀 Phase 1: Essential AI/SaaS Features (High Priority)

#### 1. Realtime / 实时通信 🔴

**Status:** Planned | **Effort:** 3-4 weeks

AI applications need real-time capabilities for:
- Live chat and AI assistant interactions
- Real-time collaboration features
- Live updates and notifications

**Implementation:**
- WebSocket server integration
- Real-time database subscription (PostgreSQL Logical Replication)
- Presence and online status tracking
- Room-based messaging for multi-user scenarios
- Event broadcasting system

**Tech Stack:**
- WebSocket (Go: `gorilla/websocket`)
- Redis Pub/Sub for horizontal scaling
- PostgreSQL NOTIFY/LISTEN
- Connection management and reconnection handling

**API Endpoints:**
```
WS /realtime/v1/subscribe        - WebSocket connection
GET /realtime/v1/presence         - Get online users
POST /realtime/v1/broadcast       - Broadcast message
```

---

#### 2. Notification System / 通知系统 🔴

**Status:** Planned | **Effort:** 3-4 weeks

Multi-channel notifications for user engagement:
- Email notifications (SMTP/SendGrid)
- SMS notifications (Twilio)
- Push notifications (Firebase/APNs)
- In-app notifications
- Webhook notifications

**Implementation:**
- Notification service with queue-based delivery
- Template management for different notification types
- User notification preferences
- Notification history and delivery status
- Rate limiting and cost control

**Tech Stack:**
- Kafka for async delivery
- SMTP provider (SendGrid/Mailgun)
- SMS provider (Twilio)
- Push service (Firebase Cloud Messaging)

---

#### 3. Task Queue & Background Jobs / 任务队列 🔴

**Status:** Planned | **Effort:** 3-4 weeks

Essential for async processing in AI applications:
- AI model inference tasks
- Batch data processing
- Scheduled jobs (cron-like)
- Long-running background tasks
- Retry mechanism with exponential backoff
- Dead letter queue

**Implementation:**
- Task queue system (Redis-based or RabbitMQ)
- Worker pool management
- Task scheduling and cron jobs
- Task status tracking
- Priority queues
- Task chaining and workflows

**API Endpoints:**
```
POST /tasks/v1/create           - Create task
GET  /tasks/v1/:id              - Get task status
POST /tasks/v1/:id/cancel       - Cancel task
GET  /tasks/v1/:id/result       - Get task result
```

---

#### 4. Subscription & Billing / 订阅与计费 🔴

**Status:** Planned | **Effort:** 4-5 weeks

Essential for SaaS business model:
- Subscription plan management
- Payment processing (Stripe, PayPal, Alipay, WeChat Pay)
- Usage-based billing and quota management
- Invoice generation and management
- Trial and promotion management

**Payment Providers:**
- Stripe (Global cards, international)
- PayPal (Global)
- Alipay (China)
- WeChat Pay (China)

**Key Features:**
1. **Flexible Billing Models**
   - Subscription-based: Recurring charges
   - Usage-based: Pay-as-you-go
   - Hybrid: Base + usage overages
   - Tiered pricing

2. **Subscription Lifecycle**
   - Trial periods
   - Automatic renewal
   - Grace periods
   - Cancellation (immediate or end of period)
   - Plan changes (upgrade/downgrade)

3. **AI-Specific Features**
   - Token quotas per plan
   - API rate limits per tier
   - Storage quotas
   - Feature-based pricing

**API Endpoints:**
```
# Plans
GET  /billing/v1/plans              - List plans
POST /billing/v1/plans              - Create plan (admin)
GET  /billing/v1/plans/:id          - Get plan details

# Subscriptions
POST /billing/v1/subscriptions      - Create subscription
GET  /billing/v1/subscriptions      - List subscriptions
PUT  /billing/v1/subscriptions/:id  - Update (upgrade/downgrade)
POST /billing/v1/subscriptions/:id/cancel - Cancel subscription

# Payment Methods
POST /billing/v1/payment_methods     - Add payment method
GET  /billing/v1/payment_methods     - List payment methods
DELETE /billing/v1/payment_methods/:id - Remove payment method

# Invoices
GET  /billing/v1/invoices           - List invoices
GET  /billing/v1/invoices/:id       - Get invoice
GET  /billing/v1/invoices/:id/pdf   - Download invoice PDF
```

---

### 🎯 Phase 2: AI-Specific Features (Medium Priority)

#### 5. Vector Database & Embeddings / 向量数据库 🟡

**Status:** Planned | **Effort:** 4-5 weeks

Core infrastructure for AI applications:
- Vector storage and indexing
- Similarity search (cosine, Euclidean)
- Vector operations and transformations
- Integration with embedding providers
- Hybrid search (vector + keyword)

**Implementation:**
- Vector extension for PostgreSQL (pgvector)
- Vector similarity search API
- Embedding generation service
- Vector indexing strategies
- Batch embedding operations

**API Endpoints:**
```
POST /vectors/v1/upsert         - Insert/update vectors
POST /vectors/v1/search         - Similarity search
GET  /vectors/v1/:id            - Get vector
DELETE /vectors/v1/:id          - Delete vector
POST /vectors/v1/embed          - Generate embeddings
```

---

#### 6. AI Model Integration / AI 模型集成 🟡

**Status:** Planned | **Effort:** 3-4 weeks

Unified API for multiple AI providers:
- LLM providers (OpenAI, Anthropic, Cohere)
- Embedding providers
- Image generation providers
- Model routing and load balancing
- Cost tracking and quota management

**Providers:**
- OpenAI (GPT-4, GPT-3.5, Embeddings)
- Anthropic (Claude)
- Cohere (Command, Embed)
- Azure OpenAI
- Local models (Ollama)

**API Endpoints:**
```
POST /ai/v1/completions        - Text completion
POST /ai/v1/chat              - Chat completion
POST /ai/v1/embeddings        - Generate embeddings
POST /ai/v1/images/generate   - Image generation
GET  /ai/v1/models            - List available models
```

---

#### 7. Prompt Management / Prompt 管理 🟡

**Status:** Planned | **Effort:** 2-3 weeks

Manage and version prompts for AI applications:
- Prompt templates with variables
- Version control and A/B testing
- Prompt performance analytics
- Collaboration and sharing
- Prompt testing playground

**API Endpoints:**
```
POST /prompts/v1/create        - Create prompt
GET  /prompts/v1/:id           - Get prompt
PUT  /prompts/v1/:id           - Update prompt
POST /prompts/v1/:id/test      - Test prompt
GET  /prompts/v1/:id/versions  - List versions
```

---

#### 8. Conversation & Memory Management / 对话与记忆 🟡

**Status:** Planned | **Effort:** 3-4 weeks

Support for AI chat applications:
- Conversation history storage
- Message threading
- Context window management
- Memory summarization
- RAG (Retrieval Augmented Generation) support

**API Endpoints:**
```
POST /conversations/v1/create   - Create conversation
GET  /conversations/v1/:id      - Get conversation
POST /conversations/v1/:id/send - Send message
GET  /conversations/v1/:id/memory - Get context memory
```

---

### 🔧 Phase 3: Developer Experience & DevOps (Medium Priority)

#### 9. Auto-generated REST API / 自动生成 REST API 🔵

**Status:** Planned | **Effort:** 2-3 weeks

Generate RESTful APIs from database schema:
- CRUD operations for all tables
- Filtering, sorting, pagination
- Relationship handling
- Row Level Security (RLS)
- API authentication

**Inspired by:** PostgREST, Supabase API

**API Pattern:**
```
GET    /tables/:table           - List records
POST   /tables/:table           - Create record
GET    /tables/:table/:id       - Get record
PUT    /tables/:table/:id       - Update record
DELETE /tables/:table/:id       - Delete record
```

---

#### 10. Row Level Security (RLS) / 行级安全 🔵

**Status:** Planned | **Effort:** 3-4 weeks

Fine-grained access control at database level:
- Policy-based access control
- User/team/project isolation
- Dynamic policy evaluation
- Policy inheritance
- Performance optimization

**Example Policies:**
```sql
-- Users can only see their own data
CREATE POLICY user_isolation ON users
  FOR ALL USING (user_id = current_user_id());

-- Team members can access team data
CREATE POLICY team_access ON projects
  FOR ALL USING (
    team_id IN (
      SELECT team_id FROM team_members
      WHERE user_id = current_user_id()
    )
  );
```

---

#### 11. API Key Management / API 密钥管理 🔵

**Status:** Planned | **Effort:** 2 weeks

API key system for external integrations:
- API key generation and management
- Key types (public, secret, publishable)
- Key permissions and scopes
- Usage quotas and rate limits
- Key expiration and rotation

**API Endpoints:**
```
POST /keys/v1/create           - Create API key
GET  /keys/v1                  - List keys
DELETE /keys/v1/:id            - Delete key
POST /keys/v1/:id/rotate       - Rotate key
```

---

#### 12. Webhooks / Webhook 支持 🔵

**Status:** Planned | **Effort:** 2-3 weeks

Webhook system for event notifications:
- Webhook registration and management
- Event type subscription
- Retry mechanism with backoff
- Signature verification (HMAC)
- Delivery status tracking

**API Endpoints:**
```
POST /webhooks/v1/create       - Create webhook
GET  /webhooks/v1              - List webhooks
DELETE /webhooks/v1/:id        - Delete webhook
GET  /webhooks/v1/:id/logs     - Delivery logs
```

---

### 📊 Phase 4: Monitoring & Analytics (Lower Priority)

#### 13. Analytics & Insights / 分析与洞察 🟢

**Status:** Planned | **Effort:** 4-5 weeks

Built-in analytics for applications:
- Event tracking and analytics
- User behavior analytics
- Funnel analysis
- Retention analysis
- Custom dashboards
- Export and reporting

**API Endpoints:**
```
POST /analytics/v1/track       - Track event
GET  /analytics/v1/query       - Query analytics
GET  /analytics/v1/funnel      - Funnel analysis
GET  /analytics/v1/retention   - Retention analysis
```

---

#### 14. Logging & Monitoring / 日志与监控 🟢

**Status:** Planned | **Effort:** 3-4 weeks

Comprehensive observability:
- Structured logging
- Log aggregation and search
- Metrics collection (Prometheus)
- Distributed tracing (OpenTelemetry)
- Alert management
- Performance monitoring

**Tech Stack:**
- Loki (log aggregation)
- Prometheus (metrics)
- Grafana (dashboards)
- OpenTelemetry (tracing)

---

### 🛡️ Phase 5: Security & Compliance (Lower Priority)

#### 16. Rate Limiting / 速率限制 🟢

**Status:** Planned | **Effort:** 2 weeks

Protect API from abuse:
- Request rate limiting
- Concurrent request limiting
- Per-user/per-key limits
- Sliding window algorithm
- Distributed rate limiting

---

#### 17. Audit Logging / 审计日志 🟢

**Status:** Planned | **Effort:** 2-3 weeks

Comprehensive audit trail:
- Data access logging
- Data modification tracking
- User activity logging
- Compliance reporting
- Log export and archival

---

#### 18. Data Encryption / 数据加密 🟢

**Status:** Planned | **Effort:** 2-3 weeks

Enhanced data security:
- Field-level encryption
- Encryption at rest
- Encryption in transit
- Key management
- PCI DSS compliance support

---

### 🌐 Phase 6: Edge & Performance (Future)

#### 19. Edge Functions / 边缘函数 🟢

**Status:** Planned | **Effort:** 4-5 weeks

Serverless functions at the edge:
- Function deployment
- Multi-region deployment
- Edge caching
- Function scheduling
- Version management

**Tech Stack:**
- WebAssembly (Wasm)
- Cloudflare Workers integration
- Edge runtime

---

#### 20. CDN Integration / CDN 集成 🟢

**Status:** Planned | **Effort:** 2 weeks

Global content delivery:
- Static asset CDN
- API response caching
- Image optimization
- Video streaming
- Multi-region deployment

---

## Implementation Timeline

### Q1 2025
- ✅ Asset Flow optimization
- ✅ Logout implementation
- 🚀 Realtime / 实时通信
- 🚀 Notification System / 通知系统
- 🚀 Task Queue / 任务队列
- 🚀 Subscription & Billing / 订阅与计费

### Q2 2025
- 🎯 Vector Database / 向量数据库
- 🎯 AI Model Integration / AI 模型集成
- 🎯 Prompt Management / Prompt 管理
- 🎯 Conversation & Memory / 对话与记忆

### Q3 2025
- 🔧 Auto-generated REST API / 自动生成 REST API
- 🔧 Row Level Security / 行级安全
- 🔧 API Key Management / API 密钥管理
- 🔧 Webhooks / Webhook 支持

### Q4 2025
- 📊 Analytics / 分析
- 📊 Logging & Monitoring / 监控与日志
- 🛡️ Rate Limiting / 速率限制
- 🛡️ Audit Logging / 审计日志

---

## Contributing

This roadmap is a living document. We welcome:
- Feature requests
- Priority feedback
- Implementation contributions
- Bug reports and fixes

Please open an issue or PR to discuss roadmap changes.

---

**Last Updated:** 2025-01-08
