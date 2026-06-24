# School Transport Frontend

This repository contains a production-grade frontend scaffold for a School Transport Management System.

Tech: React 19, Vite, Tailwind, Redux Toolkit, React Query, TanStack Table, React Hook Form, Zod, Axios.

Quick start:

1. npm install
2. npm run dev

Swap mock -> real backend:
- src/services/api.js: set baseURL and add auth interceptors.
- src/services/transportService.js: replace mock responses with API calls.
