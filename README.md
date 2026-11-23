# 💻 Akash Williyamge — Software Engineering Portfolio

A high-performance portfolio engineered for software engineering leads, hiring managers, and technical recruiters. Built to showcase deep technical competencies across **Distributed Microservices** and **Autonomous Agentic AI**.

---

## 🏛️ Engineering Architecture & Highlights

### 1. Flagship Case Study: TransitFlow (Distributed Transport Microservices)
- **Spring Boot 3.2 Microservices**: Architecture decomposed into 5 dedicated domain microservices (Auth, Transit, Traffic, Ticketing, and Notification) plus Spring Cloud Gateway.
- **Production-Grade Zero-Trust Isolation**: Central gateway handles ingress rate limiting (100 req/min per IP token bucket) and stateless JWT authentication before routing requests via an internal Docker bridge network verified with internal `X-API-KEY` tokens.
- **Polyglot Storage & GPS Telemetry**: Real-time vehicle coordinate updates and immutable QR digital passes stored in containerized MongoDB 5.0 instances.
- **Automated QA & Testing**: Full Postman automated test suites and OpenAPI 3.0 / Swagger UI documentation.

### 2. Flagship Case Study: Smart Farm Hub (Autonomous Multi-Agent AI & RAG)
- **2-Agent Autonomous Pipeline**: Coordination between `SalesOrchestratorAgent` and `FarmOperationsAgent`.
- **Sub-Second Intent Routing**: Ultra-low latency classification powered by Groq (Llama-3.3-70B).
- **Domain RAG Corpus**: 20-document vector agronomy database for tropical fruit preservation protocols and post-harvest shelf-life guidance.
- **Deterministic Python Tool Calling**: Exact mathematical geo-distance logistics calculation for island-wide delivery tariffs.
- **Interactive Workbench Simulator**: Developer console allowing recruiters to execute live multi-agent traces with millisecond step timing and synthesized output.

### 3. Categorized Technical Stack
- **Backend & Distributed Systems**: Java 17/21, Spring Boot 3.x, Spring Cloud Gateway, Spring Security, JWT, BCrypt, RESTful API Design.
- **Agentic AI & Machine Learning**: Python 3.11, RAG, Multi-Agent Systems, LangChain, LangGraph, Groq, OpenAI API, Streamlit.
- **Databases**: MongoDB 5.0, MySQL, PostgreSQL, SQLite.
- **DevOps & Infrastructure**: Docker, Docker Compose, custom Dockerfiles, Nginx, Git feature branch workflows.
- **QA & Verification**: Postman automated collections, Swagger UI / OpenAPI 3.0.

### 4. Verified Education & Credentials
- **BSc. (Hons) in Information Technology** (2023–2027) — Horizon Campus, Sri Lanka.
- **Kingswood College Kandy** — G.C.E. Advanced Level & Ordinary Level.
- **Verified Credentials**: University of Moratuwa CODL Python Programming (`3y3OG3ILCU`), University of Moratuwa Python for Beginners (`DmZdWXeYjY`), Simplilearn Python (`8105560`).
- **Academic References**: Mr. Thilina Samarasinghe & Ms. Naduni Jayathilaka (Horizon Campus).

---

## 🛠️ How to Run Locally

### Option 1: Direct File Open
Open `index.html` directly in any modern browser (Chrome, Edge, Firefox, Brave).

### Option 2: Local HTTP Server
Run from the workspace directory:
```bash
npx serve . -p 3000
```
Then open `http://localhost:3000` in your browser.

---

## 🌐 Deploy to GitHub Pages

1. Push your code to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: launch Akash Williyamge software engineering portfolio"
   git branch -M main
   git remote add origin https://github.com/awiliyamge2001-prog/awiliyamge2001-prog.github.io.git
   git push -u origin main
   ```
2. In GitHub repository settings, go to **Settings** > **Pages** > Select branch `main` and root `/`.
3. Your portfolio will be live at: `https://awiliyamge2001-prog.github.io`!
