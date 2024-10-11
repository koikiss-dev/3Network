# 3network

## Inspiración
La falta de confianza en las plataformas centralizadas de donaciones inspiró la creación de 3network. Queríamos proporcionar una solución transparente, directa y segura para que los donantes vean el impacto real de sus contribuciones.

## Qué hace
3network es una plataforma basada en blockchain que permite a los donantes contribuir directamente a causas benéficas. Elimina intermediarios y garantiza la transparencia en el uso de los fondos.

## Cómo lo creamos
Utilizamos tecnología blockchain para registrar todas las transacciones de donaciones de manera pública y transparente. También implementamos Web3 para descentralizar la gestión de fondos y reducir costos operativos.

## Retos que tuvimos
Enfrentamos desafíos relacionados con la integración de tecnología blockchain y la creación de una experiencia de usuario simple. También tuvimos que optimizar la escalabilidad y seguridad de la plataforma.

## Lo que aprendimos
Aprendimos a utilizar tecnologías emergentes como blockchain y Web3 para resolver problemas de confianza y transparencia. Además, descubrimos la importancia de crear una interfaz intuitiva para maximizar la accesibilidad.

## Qué es lo siguiente
Nos enfocaremos en expandir la plataforma globalmente, integrando más causas internacionales y explorando la implementación de NFTs como recompensas para los donantes.

---

## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.18)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-ETH 2, follow the steps below:

1. Install dependencies if it was skipped in CLI:

```
cd my-dapp-example
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `packages/hardhat/hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```