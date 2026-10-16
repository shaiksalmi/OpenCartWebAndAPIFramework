# 🎭 OpenCart Web & API Automation Framework

A production-ready test automation framework built with **Playwright + TypeScript**, covering UI, API, and OAuth2 testing for an e-commerce application. Integrated into a full **Master CI/CD Pipeline** using GitHub Actions with DEV, QA, STAGE, and PROD environments.

---

## 🚀 Master CI/CD Pipeline — All Stages Green

<img width="1071" alt="Master CI/CD Pipeline" src="https://github.com/user-attachments/assets/facba955-f0fc-4d73-9626-6c52b490709e" />

The pipeline runs automatically and deploys through each environment in sequence:

| Stage | Tests | Type |
|---|---|---|
| 🔨 Build | Maven Unit Tests | Always runs |
| 🟢 DEV | Sanity `@smoke` | Always runs |
| 🔵 QA | Regression `@regression` | QA, STAGE, PROD |
| 🟡 STAGE | Sanity `@smoke` | STAGE, PROD |
| 🔴 PROD | Smoke `@smoke` | PROD only |

---

## 📊 Test Reports — 100% Pass Rate

### Allure Graphs
<img width="1440" alt="Allure Graphs" src="https://github.com/user-attachments/assets/d443fe77-497b-4cdc-8eec-2a52c4482c4f" />

### Allure Behaviors — All 16 Tests
<img width="852" alt="Allure Behaviors" src="https://github.com/user-attachments/assets/0d4c1fc5-b3d6-47f3-ba33-cac6ae40a012" />

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| Playwright + TypeScript | UI & API test automation |
| Page Object Model | Framework structure |
| GitHub Actions | CI/CD pipeline |
| Allure | Test reporting |
| HTML Reporter | Built-in Playwright reports |
| Docker | Containerized test execution |
| Postman / Newman | API testing & automation |
| REST Assured | Backend API validation (BDD) |
| JIRA | Test & defect management |

---

## 📁 Project Structure

```
├── src/
│   ├── fixtures/          # Playwright fixtures (page & API)
│   ├── pages/             # Page Object Model classes
│   │   ├── BasePage.ts
│   │   ├── LoginPage.ts
│   │   ├── HomePage.ts
│   │   └── RegistrationPage.ts
│   └── api/
│       └── ApiHelper.ts   # Reusable API helper
├── tests/
│   ├── ui/                # UI test specs
│   │   ├── loginpagefix.spec.ts
│   │   └── homepagex.spec.ts
│   └── api/               # API test specs
│       ├── user.api.spec.ts
│       ├── user.api.schema.spec.ts
│       └── spotify.Oauth2.spec.ts
├── config/
│   ├── .env.qa            # QA environment config
│   ├── .env.dev           # DEV environment config
│   └── .env.stage         # STAGE environment config
├── .github/
│   └── workflows/
│       └── master-pipeline.yml
├── playwright.config.ts
├── package.json
└── README.md
```

---

## ✅ Test Coverage

### UI Tests
| Test | Tag |
|---|---|
| Login page title test | `@regression` |
| Forgot password link exist test | `@regression` |
| Home page headers exist test | `@regression` |
| Login with invalid credentials (3 scenarios) | `@regression` |
| Verify product added to cart | `@regression` |
| Verify product images count | `@regression` |
| Verify product information/data | `@regression` |

### API Tests
| Test | Tag |
|---|---|
| GET all users | `@smoke` `@regression` |
| POST create a user | `@regression` |
| PUT update a user | `@regression` |
| DELETE a user | `@regression` |
| GET deleted user | `@regression` |
| Create a user test | `@regression` |
| Delete a user test | `@regression` |
| Spotify OAuth2 — get albums data | `@regression` |

---

## ⚙️ How to Run

### Prerequisites
```bash
node -v    # v18+
npm -v
```

### Install dependencies
```bash
npm install
npx playwright install chromium
```

### Run all tests
```bash
npx playwright test
```

### Run smoke tests only
```bash
npx playwright test --grep @smoke
```

### Run regression tests only
```bash
npx playwright test --grep @regression
```

### Run specific environment
```bash
ENV=qa npx playwright test
ENV=dev npx playwright test
```

### Generate Allure report
```bash
npm run allure:clean
npx playwright test
npm run allure:report
```

---

## 🔐 Environment Variables

Create `config/.env.qa` with:

```dotenv
BASE_URL=your_base_url
USERNAME=your_username
PASSWORD=your_password
FIRSTNAME=your_firstname
LASTNAME=your_lastname
TELEPHONE=your_telephone
REGPASSWORD=your_password
CONFIRMPASSWORD=your_password
API_BASE_URL=your_api_base_url
API_TOKEN=your_api_token
OAUTH_CLIENT_ID=your_client_id
OAUTH_CLIENT_SECRET=your_client_secret
GRANT_TYPE=client_credentials
```

---

## 🔄 CI/CD Pipeline

The master pipeline supports **environment-based deployment control**:

- Select **DEV** → runs build + DEV sanity tests only
- Select **QA** → runs through QA regression tests
- Select **STAGE** → runs through STAGE sanity tests
- Select **PROD** → runs full pipeline including PROD smoke tests

Each stage generates:
- ✅ Allure Report (artifact)
- ✅ HTML Report (artifact)
- ✅ GitHub Pages live report

---

## 📈 Key Highlights

- **16 automated test cases** — 100% pass rate
- **Shift left testing** — QA involved from sprint planning through deployment
- **Multi-environment pipeline** — DEV, QA, STAGE, PROD
- **Dual reporting** — Allure + Playwright HTML reports per environment
- **OAuth2 API testing** — Spotify token generation and validation
- **Schema validation** — AJV library for API response structure validation
- **Page Object Model** — clean, maintainable, scalable framework
- **Data-driven testing** — environment-based config with dotenv

---

## 👩‍💻 Author

**Salma Shaik** — QA Engineer  
[LinkedIn](https://www.linkedin.com/in/shaik-salma29/) | [GitHub](https://github.com/shaiksalmi)