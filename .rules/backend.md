---
paths:
  - "API/**/*"
  - "database/**/*"
---

# Backend (FastAPI + SQLAlchemy + PostgreSQL)

A regra de ouro do backend é a separação de responsabilidades. O tráfego web (API) nunca deve se misturar com a lógica direta de banco de dados.

## Estrutura de Pastas Obrigatória
O backend é dividido em duas pastas principais: API e database.

**API/** (Camada Web)
- routes/: Controladores (endpoints) do FastAPI. As rotas nunca executam queries de banco diretamente — chamam funções do crud. Deve haver um MainRouter.py que agrupa todas as rotas usando router.include_router().
- requisicoes/: Lógicas de negócio ou chamadas a APIs externas.
- requisicoes/model/: Schemas do Pydantic (validação de dados de request e response).
- middleware/: Interceptadores de requisições.
- utils/: Funções auxiliares genéricas.
- main.py: Ponto de entrada. Configura o CORS e inicializa o app e o MainRouter.py.

**database/** (Camada de Dados)
- cruds/: Toda a lógica pesada de banco de dados (db.query(), add(), commit(), etc). Cada domínio tem seu próprio arquivo CRUD.
- models/: Modelos ORM puros do SQLAlchemy (herdando de Base).
- base.py: Definição do declarative_base(). Configuração do banco sempre via API 2.0 (future=True), PostgreSQL (psycopg2), credenciais lidas de um .env.

## Padrão de Nomenclatura e Dependências
Bibliotecas do ecossistema: fastapi, uvicorn, pydantic, sqlalchemy, psycopg2-binary, python-dotenv.
Nomes de arquivos em snake_case ou camelCase conforme o padrão já estabelecido na pasta.

## Regras Gerais
- Tipagem: use Pydantic rigorosamente para validação de entrada/saída.
- Tratamento de Erros: sempre trate requisições de banco e APIs externas com try/except e retorne mensagens padronizadas.

## Gabaritos
Use estes arquivos como referência de padrão ao criar algo novo:
- API/routes/exemplo.py
- API/requisicoes/exemplo.py
- API/requisicoes/model/exemplo.py
- database/cruds/exemplo.py
- database/models/exemplo.py
