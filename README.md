# MeetAI

MeetAI is a modern web application that provides AI-powered meeting and video calling capabilities. Built with Next.js and featuring real-time communication, it's designed to enhance virtual meetings with AI assistance.

## Features

### Free Tier
- 🎥 Real-time video calling with high-quality streaming
- 🤖 Up to 3 AI agents
- 📅 Schedule up to 3 meetings
- 📝 Basic meeting summaries and transcripts
- 🎨 Modern, responsive UI with dark/light mode

### Premium Tier (via Polar)
- 🚀 Unlimited meetings and AI agents
- 🎯 Advanced AI-powered meeting assistants
- 📝 Enhanced meeting summaries and transcripts
- 🧠 AI chat with full meeting context
- 📊 Detailed meeting analytics and insights
- ⚡ Priority background processing with Inngest
- 🔄 Seamless payment management via Polar

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI
- **State Management**: TanStack Query
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: BetterAuth with Polar
- **Payments**: Polar Subscriptions & Billing
- **Real-time**: Stream Chat & Video
- **AI**: OpenAI Integration (GPT-4o)
- **Background Jobs**: Inngest for async processing
- **Deployment**: Vercel (compatible)
- **Testing**: Jest, React Testing Library

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL database
- OpenAI API key (for GPT-4o)
- Stream API credentials (for video/chat)
- Inngest account (for background jobs)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/meetai.git
   cd meetai
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```
   # Database
   DATABASE_URL=your_database_connection_string
   
   # Authentication & Payments (Polar)
   AUTH_SECRET=your_auth_secret
   POLAR_ACCESS_TOKEN=your_polar_access_token
   
   # OpenAI (for AI features)
   OPENAI_API_KEY=your_openai_api_key
   
   # Stream (for video/chat)
   NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
   STREAM_API_SECRET=your_stream_api_secret
   
   # Inngest (for background jobs)
   INNGEST_EVENT_KEY=your_inngest_event_key
   INNGEST_SIGNING_KEY=your_inngest_signing_key
   ```

## Pricing

MeetAI offers a flexible pricing model through Polar:

### Free Tier
- Up to 3 AI agents
- Up to 3 meetings
- Basic features included

### Premium Tiers
Upgrade through our Polar integration to unlock:
- Unlimited meetings and agents
- Advanced AI features
- Priority support
- And more!

Manage your subscription and billing directly through our secure Polar integration.

4. Run database migrations:
   ```bash
   npm run db:push
   ```

5. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema
- `npm run db:studio` - Open Drizzle Studio

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Authenticated dashboard routes
│   │   ├── agents/        # AI agents management
│   │   │   └── [agentId]/ # Individual agent details
│   │   ├── meetings/      # User meetings
│   │   │   └── [meetingId]/ # Individual meeting details
│   │   ├── upgrade/       # Premium upgrade page
│   │   ├── layout.tsx     # Dashboard layout
│   │   └── page.tsx       # Dashboard home
│   │
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication API
│   │   ├── inngest/       # Inngest webhook handlers
│   │   └── trpc/          # tRPC router
│   └── call/              # Video call pages
│
├── components/            # Reusable UI components
│   ├── ui/                # Shadcn/ui components
│   ├── error-state.tsx    # Error boundary component
│   └── loading-state.tsx  # Loading state component
│
├── db/                    # Database layer
│   ├── index.ts           # Database client
│   ├── schema.ts          # Database schema
│   └── migrations/        # Database migrations
│
├── hooks/                 # Custom React hooks
│   ├── use-confirm.tsx    # Confirmation dialog hook
│   └── use-mobile.ts      # Mobile detection hook
│
├── inngest/               # Background job processing
│   ├── functions.ts       # Inngest function definitions
│   └── client.ts          # Inngest client configuration
│
├── lib/                   # Shared utilities
│   ├── auth.ts            # Authentication helpers
│   ├── polar.ts           # Polar SDK client
│   └── utils.ts           # Utility functions
│
├── modules/               # Feature modules
│   ├── agents/            # AI agents functionality
│   │   ├── server/        # Server-side logic
│   │   └── ui/            # Agent UI components
│   │
│   ├── auth/              # Authentication logic
│   │   ├── components/    # Auth components
│   │   └── server/        # Auth server utilities
│   │
│   ├── call/              # Video call functionality
│   │   ├── components/    # Call UI components
│   │   └── hooks/         # Call-related hooks
│   │
│   ├── dashboard/         # Dashboard views
│   │   ├── components/    # Dashboard components
│   │   └── views/         # Dashboard page views
│   │
│   ├── home/              # Landing page
│   │   └── components/    # Home page components
│   │
│   ├── meetings/          # Meeting management
│   │   ├── server/        # Server-side meeting logic
│   │   ├── ui/            # Meeting UI components
│   │   └── types.ts       # Shared types
│   │
│   └── premium/           # Premium features
│       ├── components/    # Premium UI components
│       ├── constants.ts   # Premium-related constants
│       ├── server/        # Server-side premium logic
│       └── ui/            # Premium UI views
│
└── trpc/                  # tRPC configuration
    ├── client.ts          # tRPC client
    ├── router.ts          # Main router
    └── utils.ts           # tRPC utilities
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Stream](https://getstream.io/)
- [OpenAI](https://openai.com/)
