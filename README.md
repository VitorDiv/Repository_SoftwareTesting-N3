
# Projeto N3: Fullstack com Testes de Desempenho e Funcionais

Este projeto demonstra uma aplicação fullstack com API REST, front-end, testes de carga (k6) e testes funcionais (Playwright).

## 🚀 Tecnologias Chave

* **Backend (API REST):** Python (Flask)
* **Frontend:** React
* **Testes de Carga:** Grafana k6
* **Dashboard/Monitoramento:** Prometheus (para métricas e relatórios k6 CLI)
* **Testes Funcionais (E2E):** Playwright

## ✨ Funcionalidades

Implementa um **CRUD** (Criar, Ler, Atualizar, Deletar) de **Tarefas** através de:
* **API REST:** Endpoints GET, POST, PUT, DELETE para `/tasks`.
* **Front-end:** Formulário de cadastro e listagem para interagir com todas as operações da API.

## 🧪 Testes

* **Carga (k6):** Validação de performance das 4 operações da API (`tests/k6_test.js`).
* **Funcionais (Playwright):** Testes end-to-end do fluxo de usuário no front-end (`tests/playwright_test.spec.js`).

## ⚙️ Como Rodar

1.  **Backend (`backend/`):**
    * `python -m venv venv && .\venv\Scripts\activate` (Windows) ou `source venv/bin/activate` (Linux/macOS)
    * `pip install -r requirements.txt` (ou `pip install Flask Flask-CORS`)
    * `python app.py`
2.  **Frontend (`frontend/`):**
    * `npm install`
    * `npm start`
3.  **Testes (`tests/` - com backend e frontend rodando):**
    * **Carga:** `k6 run k6_test.js`
    * **Funcionais:** `npx playwright test playwright_test.spec.js --project=chromium --headed`

