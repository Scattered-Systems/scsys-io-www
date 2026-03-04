# @pzzld

[![GitHub License](https://img.shields.io/github/license/FL03/pzzld-js?style=for-the-badge&logo=github)](LICENSE)
![Docker Image Version](https://img.shields.io/docker/v/jo3mccain/pzzld-js/latest?style=for-the-badge&logo=docker)

[![TypeScript](https://img.shields.io/badge/TypeScript-latest-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

---

Welcome to the `pzzld-js` monorepo! This repository contains a collections of packages, applications, components, and contracts that combine to form the basis of the `pzzld` ecosystem.

## Structure

### Monorepo

#### _Applications_

All applications are located in the `apps` directory. Each application is a standalone project that can be developed, built, and deployed independently. The applications include:

- `@pzzld/app`: A complete application template for creating modern web applications using NextJS, Bun, and Tailwind CSS.

#### _Packages_

All reusable packages are located in the `packages` directory. Each package is designed to be shared across multiple applications and can be published to npm. The packages include:

- `@pzzld/ui`: A collection of reusable React components styled with Tailwind CSS.
- `@pzzld/types`: A collection of TypeScript types and interfaces
- `@pzzld/utils`: A collection of utility functions and hooks for common tasks.
- `@pzzld/pzzld-js`: Core logic and services for the `pzzld` ecosystem, such as authentication, data fetching, and state management
