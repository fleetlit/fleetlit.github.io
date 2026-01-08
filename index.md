---
layout: default
title: Home
---

<!-- Hero Section -->
<section class="hero">
  <div class="container hero-content">
    <h1>⚡ Fleetlit</h1>
    <p class="hero-subtitle">AI-Native Backend Platform</p>
    <p class="hero-description">
      The Supabase alternative built for the AI era. Ship AI applications faster with vector databases,
      conversation memory, token metering, and multi-provider AI integration.
    </p>
    <div class="hero-buttons">
      <a href="/docs/" class="btn btn-primary">🚀 Get Started</a>
      <a href="https://github.com/fleetlit/fleetlit" class="btn btn-secondary">📦 View on GitHub</a>
    </div>
  </div>
</section>

<!-- Features Section -->
<section class="features">
  <div class="container">
    <div class="section-header">
      <h2>Powerful Features for AI Applications</h2>
      <p>Everything you need to build production-ready AI applications, without the infrastructure overhead.</p>
    </div>

    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">🤖</div>
        <h3>AI-Native Architecture</h3>
        <p>Built from the ground up for AI workloads with vector storage, embeddings, and conversation management.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">🧠</div>
        <h3>Conversation Memory</h3>
        <p>Advanced threading system for AI chatbots with context window management and memory summarization.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">📊</div>
        <h3>Vector Database</h3>
        <p>Native vector search and storage with pgvector integration for semantic search and RAG applications.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">🔄</div>
        <h3>Event Streaming</h3>
        <p>Kafka-based event system for real-time AI processing and async model inference.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h3>Token Metering</h3>
        <p>Built-in usage tracking for AI tokens, API calls, and compute resources with quota management.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">🔐</div>
        <h3>AI Security</h3>
        <p>Enterprise-grade security with API key management, rate limiting, and audit logging for AI apps.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">💾</div>
        <h3>Model Storage</h3>
        <p>S3-compatible storage for AI models, datasets, and outputs with Cloudflare R2 integration.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">🌐</div>
        <h3>Multi-Provider AI</h3>
        <p>Unified API for OpenAI, Anthropic, Cohere and more with automatic fallback and load balancing.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">🚀</div>
        <h3>High Performance</h3>
        <p>Built with Go for ultra-low latency, perfect for real-time AI applications at scale.</p>
      </div>
    </div>
  </div>
</section>

<!-- API Section -->
<section class="api-section">
  <div class="container">
    <div class="section-header">
      <h2>Three API Layers for Every Use Case</h2>
      <p>Comprehensive APIs designed for different scenarios with appropriate security and authentication.</p>
    </div>

    <div class="api-types">
      <div class="api-type">
        <h3>
          Public API (/api)
          <span class="api-badge public">Client</span>
        </h3>
        <p>For web dashboards, mobile apps, and client applications. Uses JWT authentication via X-Forwarded-User header.</p>
        <div class="code-block">POST /api/users/me
POST /api/teams/list
POST /api/projects/create
POST /api/filestorage/upload</div>
      </div>

      <div class="api-type">
        <h3>
          Admin API (/api/admin)
          <span class="api-badge admin">Admin</span>
        </h3>
        <p>For admin dashboard, user management, and system administration. Requires JWT + SuperAdmin role verification.</p>
        <div class="code-block">POST /api/admin/users/list
POST /api/admin/users/create
POST /api/admin/users/update
POST /api/admin/stats</div>
      </div>

      <div class="api-type">
        <h3>
          SDK API (/ssapi/v1)
          <span class="api-badge sdk">SDK</span>
        </h3>
        <p>For SDK integrations, server-to-server communication, telemetry, and metering. Uses API Key authentication.</p>
        <div class="code-block">POST /ssapi/v1/meters/collect
POST /ssapi/v1/threads/messages/add
POST /ssapi/v1/threads/get
POST /ssapi/v1/events/track</div>
      </div>
    </div>

    <div class="comparison-section">
      <h3>API Comparison</h3>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>/api (Public)</th>
              <th>/api/admin (Admin)</th>
              <th>/ssapi/v1 (SDK)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Target</strong></td>
              <td>Client Apps</td>
              <td>Admin Dashboard</td>
              <td>SDK/Servers</td>
            </tr>
            <tr>
              <td><strong>Auth Method</strong></td>
              <td>JWT Token</td>
              <td>JWT + Role Check</td>
              <td>API Key</td>
            </tr>
            <tr>
              <td><strong>Header</strong></td>
              <td>X-Forwarded-User</td>
              <td>X-Forwarded-User</td>
              <td>X-API-Key</td>
            </tr>
            <tr>
              <td><strong>Rate Limits</strong></td>
              <td>Per-user</td>
              <td>Admin-specific</td>
              <td>Per-key</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

<!-- Quick Start Section -->
<section class="quick-start">
  <div class="container">
    <div class="section-header">
      <h2>Quick Start</h2>
      <p>Get up and running with Fleetlit in minutes.</p>
    </div>

    <div class="step-list">
      <div class="step">
        <div class="step-number">1</div>
        <div class="step-content">
          <h3>Prerequisites</h3>
          <p>Ensure you have Go 1.24+, Docker, Docker Compose, PostgreSQL 14+, and Redis 6+ installed.</p>
        </div>
      </div>

      <div class="step">
        <div class="step-number">2</div>
        <div class="step-content">
          <h3>Start Development Environment</h3>
          <div class="code-block">task local-dev-up</div>
        </div>
      </div>

      <div class="step">
        <div class="step-number">3</div>
        <div class="step-content">
          <h3>Run Database Migrations</h3>
          <div class="code-block">task db-migrate-local</div>
        </div>
      </div>

      <div class="step">
        <div class="step-number">4</div>
        <div class="step-content">
          <h3>Generate Code</h3>
          <div class="code-block">task wire-all
task generate-ent
task generate-protocol</div>
        </div>
      </div>

      <div class="step">
        <div class="step-number">5</div>
        <div class="step-content">
          <h3>Build and Run</h3>
          <div class="code-block">make build
./bin/server</div>
        </div>
      </div>

      <div class="step">
        <div class="step-number">6</div>
        <div class="step-content">
          <h3>Create Admin User</h3>
          <div class="code-block">task create-default-admin
# Default: username=admin, email=admin@admin.com, password=11111111</div>
        </div>
      </div>
    </div>

    <div style="text-align: center; margin-top: 3rem;">
      <a href="/docs/" class="btn btn-primary">Read Full Documentation</a>
    </div>
  </div>
</section>

<!-- Tech Stack Section -->
<section class="features" style="background: white;">
  <div class="container">
    <div class="section-header">
      <h2>Built with Modern Technology</h2>
      <p>Leveraging the best tools for high-performance, scalable backend infrastructure.</p>
    </div>

    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">🔷</div>
        <h3>Go 1.24+</h3>
        <p>High-performance, type-safe language for building scalable backend services.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">🗃️</div>
        <h3>PostgreSQL</h3>
        <p>Powerful relational database with advanced features and excellent performance.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">🔄</div>
        <h3>Redis</h3>
        <p>Fast in-memory data store for caching, sessions, and real-time features.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">📨</div>
        <h3>Kafka</h3>
        <p>Distributed event streaming platform for scalable, asynchronous processing.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">🌐</div>
        <h3>Traefik</h3>
        <p>Modern API gateway with automatic service discovery and load balancing.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">🐘</div>
        <h3>Ent ORM</h3>
        <p>Schema-driven ORM with code generation for type-safe database operations.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">🔌</div>
        <h3>Wire DI</h3>
        <p>Compile-time dependency injection for clean, maintainable code architecture.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">📡</div>
        <h3>Protocol Buffers</h3>
        <p>Efficient binary serialization for high-performance API communication.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">🐳</div>
        <h3>Docker</h3>
        <p>Container-based deployment for consistent environments across development and production.</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="hero" style="background: linear-gradient(135deg, #764ba2 0%, #667eea 100%); padding: 4rem 0;">
  <div class="container">
    <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Ready to Build?</h2>
    <p class="hero-description" style="margin-bottom: 2rem;">
      Start building your AI application with Fleetlit today. Join our community and contribute to the future of backend-as-a-service.
    </p>
    <div class="hero-buttons">
      <a href="/docs/" class="btn btn-primary">Get Started</a>
      <a href="https://github.com/fleetlit/fleetlit" class="btn btn-secondary">Star on GitHub</a>
    </div>
  </div>
</section>
