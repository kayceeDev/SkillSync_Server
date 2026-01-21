## SkillSync_Server 🖥️

_Backend services for the SkillSync platform_

## 📝 Overview

**SkillSync_Server** provides off-chain services that support the SkillSync ecosystem.  
It handles indexing, user metadata, analytics, notifications, and integrations that are not suitable for on-chain execution.

The backend works alongside the Stellar network without custody of user funds.

## ✨ Features

- User metadata management
- Mentorship session records
- Event indexing from Stellar
- Notifications & emails
- API layer for frontend

## 🛠️ Technologies Used

- Node.js
- NestJS
- TypeScript
- PostgreSQL
- Stellar Horizon API

## Setup & Installation

### Prerequisites

- Node.js ≥ 18
- Database (PostgreSQL)
- Environment variables configured

### Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/MentoNest/SkillSync_Server.git
cd SkillSync_Server
```

2. Install dependencies:

```bash
npm install
# or using yarn
yarn install
```

3. Set up environment variables:

```bash
cp .env.example .env
# Edit .env with your configuration details
```

4. Set up the database:

```bash
npm run migration:run
# or using yarn
yarn migration:run
```

5. Start the development server:

```bash
npm run start:dev
# or using yarn
yarn start:dev
```

## 🏥 Health Check

The API includes a health check endpoint for monitoring:

**GET** `/healthz`

Response:

```json
{
  "status": "ok",
  "timestamp": 1234567890
}
```

## 🚀 Usage

### For Mentees

1. Create an account and complete your profile
2. Browse available mentors based on your interests
3. Request mentorship sessions with preferred mentors
4. Attend sessions, provide feedback, and track your progress

### For Mentors

1. Create an account and build your mentor profile
2. Set your availability, hourly rates, and expertise areas
3. Accept mentorship requests
4. Conduct sessions and provide guidance
5. Receive payments and feedback

### Admin Dashboard

Access the admin dashboard at `/admin` with appropriate credentials to:

- Manage users
- Monitor platform activity
- Generate reports
- Configure system settings

## 📂 Project Structure

```
SkillSync_Server/
├── apps/
│   ├── api/                    # Main API application
│   │   ├── src/
│   │   │   ├── modules/       # Feature modules
│   │   │   ├── controllers/   # Route controllers
│   │   │   ├── services/      # Business logic
│   │   │   ├── entities/      # Database entities
│   │   │   ├── guards/        # Auth guards
│   │   │   ├── health/        # Health check
│   │   │   ├── app.module.ts
│   │   │   └── main.ts
│   │   └── test/              # E2E tests
│   └── admin/                  # Admin dashboard (future)
├── libs/
│   ├── common/                 # Shared utilities
│   │   ├── constants/
│   │   ├── interfaces/
│   │   ├── utils/
│   │   └── decorators/
│   ├── stellar/                # Stellar SDK integration
│   └── database/               # Database config & entities
└── package.json
```

## 🔧 Development Guide

### Adding a New Feature Module

1. Generate the module in the API app:

```bash
cd apps/api
nest g module feature-name
nest g controller feature-name
nest g service feature-name
```

2. Import the module in `app.module.ts`

### Creating Shared Utilities

Add reusable code to `libs/common/src`:

```typescript
// libs/common/src/utils/my-util.ts
export class MyUtil {
  static doSomething() {
    // utility logic
  }
}

// libs/common/src/index.ts
export * from './utils/my-util';
```

Use in your app:

```typescript
import { MyUtil } from '@app/common';
```

## 👥 Contributing

We welcome contributions from the community! Please follow these steps:

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request

### Code Style

- Run `npm run lint` before committing
- Use `npm run format` to auto-format code
- Follow TypeScript best practices
- Write tests for new features

## 📚 Project Structure Explained

### `/apps` Directory

Contains deployable applications:

- **api**: Main REST API service
- **admin**: Admin dashboard (future)
- **worker**: Background job processor (future)

### `/libs` Directory

Contains shared libraries:

- **common**: Utilities, constants, interfaces
- **stellar**: Stellar blockchain integration
- **database**: Database configuration and entities

### Path Aliases

Import from shared libraries using aliases:

```typescript
import { StringUtil } from '@app/common';
import { StellarService } from '@app/stellar';
```

Please read our [Contributing Guide](CONTRIBUTING.md) for more details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by the Mentorship Marketplace Team

