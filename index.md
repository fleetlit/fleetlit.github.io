---
layout: default
title: Home
---

<!-- Hero Section -->
<section class="hero">
  <div class="container">
    <h1>Fleetlit</h1>
    <p class="hero-subtitle">Supabase Alternative in AI Era</p>
    <p class="hero-description">
      Backend-as-a-service platform specifically designed for AI applications.
      Build powerful AI apps with multi-tenant architecture, real-time features, and scalable infrastructure.
    </p>
    <div class="hero-buttons">
      <a href="/docs/" class="btn btn-primary">Get Started</a>
      <a href="https://github.com/fleetlit/fleetlit" class="btn btn-secondary">View on GitHub</a>
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
        <div class="feature-icon">🏢</div>
        <h3>Multi-tenant Architecture</h3>
        <p>Built-in support for Users, Teams, and Projects with proper isolation and scalability.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">🔐</div>
        <h3>User Management</h3>
        <p>Complete authentication system with JWT tokens, refresh tokens, and secure session management.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">📁</div>
        <h3>File Storage</h3>
        <p>S3-compatible storage with Cloudflare R2 integration for scalable and affordable file management.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">💰</div>
        <h3>Asset Exchange</h3>
        <p>Sophisticated transaction framework for asset management with pluggable execution factories.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h3>Event-Driven</h3>
        <p>Kafka-based event system for asynchronous processing and real-time updates.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">⚙️</div>
        <h3>Runtime Variables</h3>
        <p>Dynamic configuration management for real-time updates without deployment.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">💬</div>
        <h3>Collections & Threads</h3>
        <p>Advanced data organization with message threading support for AI conversations.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">🚀</div>
        <h3>High Performance</h3>
        <p>Built with Go and modern architecture for maximum performance and scalability.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">🔌</div>
        <h3>Three API Layers</h3>
        <p>Public API, Admin API, and SDK API for different use cases and security levels.</p>
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
