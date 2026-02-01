# Marketplace App

[![React Native](https://img.shields.io/badge/React%20Native-0.81-61DAFB?logo=react&logoColor=white)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-54-000020?logo=expo&logoColor=white)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A mobile marketplace application built with React Native and Expo, featuring user authentication, session management, and a clean MVVM architecture.

## Tech Stack

- **Framework**: React Native 0.81 with Expo 54 (New Architecture enabled)
- **Language**: TypeScript 5.9 (strict mode)
- **Navigation**: Expo Router (file-based routing)
- **Styling**: NativeWind 4 (TailwindCSS for React Native)
- **State Management**: Zustand with AsyncStorage persistence
- **HTTP Client**: Axios
- **Server State**: TanStack React Query
- **Forms**: React Hook Form + Yup validation
- **Animations**: React Native Reanimated 4

## Project Structure

```
src/
├── app/                    # Expo Router screens (file-based routing)
│   ├── (private)/          # Authenticated routes
│   │   ├── _layout.tsx
│   │   └── home.tsx
│   ├── _layout.tsx         # Root layout
│   ├── index.tsx           # Entry screen
│   ├── login.tsx           # Login screen
│   └── register.tsx        # Registration screen
├── shared/                 # Shared modules
│   ├── api/                # API client configuration (Axios)
│   ├── interfaces/         # TypeScript interfaces
│   ├── queries/            # TanStack React Query mutations/queries
│   ├── services/           # Business logic services
│   └── store/              # Zustand global state
├── styles/                 # Global styles and theme (NativeWind)
│   ├── colors.ts
│   └── global.css
└── viewModels/             # MVVM view models
    └── Register/           # Register feature (view, viewModel, scheme)
```

## Prerequisites

- Node.js
- Yarn
- Expo CLI
- Android Studio (for Android) or Xcode (for iOS)

## Getting Started

### Installation

```bash
git clone <repo-url>
cd marketplace-app
yarn install
```

### Running

```bash
# Start the Expo development server
yarn start

# Run on Android
yarn android

# Run on iOS
yarn ios

# Run on Web
yarn web
```

The app connects to a local API server at port `3001` (`http://10.0.2.2:3001` on Android, `http://localhost:3001` on iOS).

## Available Scripts

| Command        | Description               |
| -------------- | ------------------------- |
| `yarn start`   | Start the Expo dev server |
| `yarn android` | Build and run on Android  |
| `yarn ios`     | Build and run on iOS      |
| `yarn web`     | Start the web version     |

## Architecture

The project follows the **MVVM (Model-View-ViewModel)** pattern:

- **View** (`*.view.tsx`): React Native components responsible for UI rendering
- **ViewModel** (`use*.viewModel.ts`): Custom hooks containing presentation logic and state
- **Model**: Interfaces, services, and API layer in `shared/`

Form validation uses **Yup schemas** (`*.scheme.ts`) integrated with React Hook Form. Authentication state is persisted globally via Zustand with AsyncStorage.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Authors

- **Marcelo Galdino** - [GitHub](https://github.com/marcelogaldino)
