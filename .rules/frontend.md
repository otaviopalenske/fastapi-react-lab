---
paths:
  - "Frontend/**/*"
---

# Frontend (React JS / Vite)

Componentização e tipagem estrita são fundamentais.

## Estrutura de Pastas Obrigatória (src/)
O código nunca deve ser jogado de forma desorganizada na raiz do src.
- components/: Altamente modularizado em subpastas (form/, modals/, header/, footer/, cards/, skeleton/).
- interfaces/ e types/: Interfaces e tipos do TypeScript extraídos dos componentes e isolados aqui.
- dataMappers/: Funções puras para transformar dados da API antes de irem ao componente.
- services/: Camada de chamadas HTTP (Axios/Fetch).
- hooks/: Custom hooks (useSomething).
- pages/: Telas que agregam os componentes (com layout/ se necessário).
- context/: Provedores de estado global.
- constants/: Valores fixos e configurações constantes.
- routes/: Definição do roteamento (React Router).

## Regras Gerais
- Escreva código em TypeScript sempre que possível.

## Next.js (App Router) — se aplicável
Se o projeto for Next.js em vez de Vite:
- App Router obrigatório (src/app/).
- Tailwind CSS por padrão.
- Funções utilitárias centralizadas em src/lib/utils.ts.
- Componentes reutilizáveis em src/components/, mantendo organização semântica.
