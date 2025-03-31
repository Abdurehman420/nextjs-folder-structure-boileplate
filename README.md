# nextjs-structure

A modern, scalable folder structure for Next.js applications, based on best practices for 2025.

## Installation

```bash
npm install nextjs-structure
```

Or with yarn:

```bash
yarn add nextjs-structure
```

The package automatically creates the folder structure in your project when installed. No CLI or additional commands needed.

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

## Why This Structure?

This structure is designed to provide:

- **Modularity**: Organize by features or domains
- **Reusability**: Components, hooks, and utilities can be easily shared
- **Scalability**: Structure allows for easy addition of new features or pages
- **Separation of Concerns**: Each part of the app has its dedicated space

## License

MIT
