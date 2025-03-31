# nextjs-structure

A modern, scalable folder structure for Next.js applications, based on best practices for 2025.

## Installation

```bash
npm install nextjs-folder-structure-boilerplate
```

Or with yarn:

```bash
yarn add nextjs-folder-structure-boilerplate
```

The package automatically creates the folder structure in your project when installed and then removes itself from your dependencies. No CLI or additional commands needed.

## Generated Structure

The package creates the following folder structure:

```
/your-project
  ├── /public/
  │   └── /images/
  ├── /src/
  │   ├── /assets/        # Static assets (images, fonts, etc.)
  │   ├── /components/    # Reusable components
  │   ├── /features/      # Feature-specific logic and components
  │   │   ├── /auth/
  │   │   ├── /dashboard/
  │   │   └── /profile/
  │   ├── /hooks/         # Custom React hooks
  │   ├── /layouts/       # Layout components
  │   ├── /pages/         # Page components (routes)
  │   │   └── /Auth/
  │   ├── /services/      # API requests, utilities, integrations
  │   ├── /store/         # State management
  │   │   ├── /auth/
  │   │   └── /user/
  │   ├── /styles/        # Global styles
  │   ├── /types/         # TypeScript types
  │   ├── /utils/         # Utility functions and helpers
  │   └── /config/        # Environment variables and configurations
  ├── .gitignore          # (Empty file)
  ├── README.md           # Basic project README
  ├── tsconfig.json       # (Empty file)
  ├── .eslintrc.json      # (Empty file)
  └── next.config.js      # (Empty file)
```

## How it Works

1. When installed, the package creates the complete folder structure in your project
2. After successful creation, it automatically removes itself from your dependencies
3. No leftover dependencies or unused packages in your project

## Why This Structure?

This structure is designed to provide:

- **Modularity**: Organize by features or domains
- **Reusability**: Components, hooks, and utilities can be easily shared
- **Scalability**: Structure allows for easy addition of new features or pages
- **Separation of Concerns**: Each part of the app has its dedicated space

## License

MIT
