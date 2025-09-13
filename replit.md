# Replit.md

## Overview

This is a modern, responsive personal portfolio website for Mridul Goyal, an AI Engineer. The application is built using React, TypeScript, and TailwindCSS with a focus on flashy, creative interactions including typing effects, smooth animations, and modern design elements. The portfolio showcases personal information, skills, work experience, projects, education, achievements, and contact details in a professionally designed single-page application.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework Stack**: React 18 with TypeScript running on Vite for fast development and optimized builds. The application uses a single-page architecture with client-side routing via Wouter.

**Styling System**: TailwindCSS with custom CSS variables for theming, supporting both light and dark modes. The design follows modern portfolio aesthetics with glassmorphism effects, animated backgrounds, and smooth transitions.

**Component Library**: Radix UI primitives with shadcn/ui components for consistent, accessible UI elements. Components are organized in a modular structure with reusable UI components in `@/components/ui/`.

**State Management**: React Query (TanStack Query) for server state management, with React's built-in state for local component state. No global state management library is implemented.

**Animation System**: Custom CSS animations with intersection observer for scroll-based animations, typing effects, and floating geometric shapes.

### Backend Architecture

**Server Framework**: Express.js with TypeScript for the API layer. The server uses middleware for request logging, error handling, and development tooling.

**Development Setup**: Vite integration for hot module replacement in development, with separate build processes for client and server code.

**File Structure**: Monorepo structure with separate `client/`, `server/`, and `shared/` directories for organized code separation.

### Data Storage Solutions

**Database**: PostgreSQL configured with Drizzle ORM for type-safe database operations. Database schema is defined in `shared/schema.ts` with user management capabilities.

**Session Storage**: Connect-pg-simple for PostgreSQL-backed session storage, though the current implementation uses in-memory storage for development.

**Migration System**: Drizzle Kit for database migrations with configuration pointing to `./migrations` directory.

### Authentication and Authorization

**Current Implementation**: Basic user schema with username/password fields, though authentication flows are not fully implemented in the current codebase.

**Session Management**: Express session configuration ready for implementation with PostgreSQL session store.

**User Model**: Zod schemas for type validation with Drizzle ORM integration for database operations.

### External Dependencies

**Database Provider**: Neon Database Serverless for PostgreSQL hosting, configured via `DATABASE_URL` environment variable.

**UI Components**: Extensive use of Radix UI primitives for accessible, unstyled components including dialogs, dropdowns, tooltips, and form elements.

**Development Tools**: 
- TypeScript for type safety across client and server
- ESBuild for server bundling
- PostCSS with Autoprefixer for CSS processing
- Various Lucide React icons for consistent iconography

**Asset Management**: Custom asset aliasing system for images and static files, with generated placeholder images for project showcases.

**Form Handling**: React Hook Form with Hookform Resolvers for form validation and management.

**Utility Libraries**: 
- Class Variance Authority for component variant management
- clsx and tailwind-merge for conditional styling
- date-fns for date manipulation
- nanoid for unique ID generation