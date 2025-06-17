# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server on port 3066
- `npm run build` - Build for production
- `npm run start` - Start production server

### Testing
- `npm run test` - Run all tests
- `npm run test:watch` - Run tests in watch mode
- `npm test __tests__/specific-test.js` - Run a single test file

## Architecture

### Project Structure
This is a Next.js 15 App Router application for **BeechTree**, an educational AI platform. The app uses client-side rendering throughout with the `"use client"` directive.

### Key Routes & Features
- `/` - Landing page with feature highlights and modals
- `/software` - Catalog of 9 educational AI tools (Kansha, Picture Books, Writing Universe, etc.)
- `/contact` - Contact form with validation and API submission
- `/payment` - Invoice creation and payment for custom amounts
- `/subscription` - Stripe checkout integration for $99/month subscription
- `/api/contact` - Contact form handler with Resend email integration
- `/api/create-checkout-session` - Stripe payment processing (handles both subscriptions and one-time payments)

### Tech Stack
- **Frontend**: React 18, Next.js 15, Semantic UI React
- **Styling**: Custom CSS (globals.css) with blue color scheme (#2563eb)
- **Payment**: Stripe integration
- **Email**: Resend for contact form submissions
- **Testing**: Jest with React Testing Library
- **AI Integration**: Flowise chatbot and VectorShift iframe widgets

### Key Patterns
- **Modal System**: Reusable modal components for feature details
- **Form Handling**: Controlled components with loading states and validation
- **API Integration**: Fetch-based with comprehensive error handling
- **Responsive Design**: Mobile-first approach with breakpoints

### Environment Variables
- `STRIPE_SECRET_KEY` - For payment processing
- `NEXT_PUBLIC_BASE_URL` - For payment redirects
- `RESEND_API_KEY` - For sending contact form emails via Resend

### Development Notes
- Development server runs on port 3066 (not standard 3000)
- All pages use client-side rendering
- Tailwind is configured in package.json but config file is missing
- PostCSS config exists but may need updates
- Email service uses Resend (requires domain verification for production)