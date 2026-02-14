# WebInsight Social - Base Mini App

Transform website analytics into shareable, Farcaster-native social assets.

## Features

- 🌐 Collaborative website analysis
- 💎 Reputation-based insight gating
- ⚡ Tip & reward system with gasless transactions
- 🔐 Token-gated premium content
- 📊 Real-time analytics dashboard
- 🎨 Modern, sleek UI with Coinbase theme

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster Mini App SDK
- **Styling**: Tailwind CSS with custom design system

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Key Components

- **Dashboard**: Analytics overview with stats and charts
- **Submissions**: Browse and analyze submitted websites
- **Insights**: View and tip community contributions
- **Reputation System**: Earn badges and unlock features

## Base Mini App Integration

This app is fully integrated with:
- ✅ OnchainKit for identity, wallet, and transactions
- ✅ Farcaster Mini App SDK for social features
- ✅ Base network for gasless transactions
- ✅ Coinbase Paymaster for gas sponsorship

## Design System

The app uses a custom design system with:
- **Coinbase Theme**: Dark navy background with blue accents
- **Responsive Layout**: Mobile-first design
- **Smooth Animations**: Fade-in and pulse effects
- **Glass Morphism**: Modern UI elements

## Smart Contract Integration

The app is designed to work with:
- WebsiteRegistry contract
- ReputationNFT contract
- TippingVault contract
- AccessControl contract

## License

MIT
