# Member App — Group 1 "Team Spirit"

A simple 3-screen mobile and web app that introduces our group and its members. Built with **React Native**, **Expo**, and **Expo Router**.

## Features

- **Home screen** with a live clock, the group name, a short team description, and a "View Members" button.
- **Members screen** listing every member (name and role) in a scrollable list, with a "Back to Home" button under the list.
- **Member Details screen** showing one member's name, role, email, and phone number, with a Back button.
- **Loading screen** shown for a short moment when moving between pages.
- **Dark theme** (navy background, slate navy header and card, also blue buttons).

## Screens and Flow

```
Home  ──(View Members)──▶  Members  ──(tap a member)──▶  Member Details
  ▲                           │                                │
  └──────(Back to Home)───────┘                                │
                              ◀─────────────(Back)─────────────┘
```

| Screen | Route | What it does |
|---|---|---|
| Home | `/` | Shows a live clock, group name, description, and the "View Members" button |
| Our Members | `/members` | Lists all members using a `FlatList`; tapping a card opens that member's details |
| Member Details | `/members/[id]` | Reads the `id` from the route and shows that member's information |

## Project Structure

```
src/
├── app/
│   ├── _layout.tsx          # Stack navigation and header styling
│   ├── index.tsx            # Home screen
│   └── members/
│       ├── index.tsx        # Members list screen
│       └── [id].tsx         # Member Details screen (dynamic route)
└── data/
    └── members.ts           # List of members (id, name, role, email, phone)
```

## How It Works

- **Routing:** Expo Router uses the file names inside `src/app` as routes. `[id].tsx` is a *dynamic route*, so `/members/1` and `/members/2` both open the same screen with a different `id`.
- **Navigation:** `useRouter()` provides `router.push()` to open a page and `router.back()` or `router.dismissTo()` to leave it. Back buttons check or use a safe fallback so the app does not crash if the page was opened directly.
- **Data:** All members live in one array in `data/members`. The Members screen loops over it with `FlatList`, and the details screen finds the matching member by `id`.
- **Live clock (Home):** `useState` holds the time, and `useEffect` updates it every second with `setInterval`. The interval is cleared when the screen closes.
- **Loading:** a `loading` state is set to `true` before navigating. While it is `true`, the screen shows a full-screen spinner, then `router.push()` runs after about 0.8 seconds.
- **Header:** `_layout.tsx` sets the header color, title color, and screen titles for every page.

## Members

| Name | Role |
|---|---|
| Lyndon Colonia | Leader |
| Krishna Paul Quisora | Graphic Designer |
| Orlie Dela Pena | Frontend Dev |
| Harry Dorong | Backend Dev |
| Evewin Colita | QA Lead |
| Christian Ortega | Tester |

## Design

| Use | Color |
|---|---|
| Page background | `#0f172a` (dark navy) |
| Header and cards | `#1e293b` (slate navy) |
| Buttons | `#2563eb` (blue) |
| Button glow | `#3b82f6` (light blue) |
| Main text | white |
| Secondary text | gray |

## Getting Started

Run these commands in order in your terminal:

```bash
node -v
```
Checks that Node.js is installed. It should print a version number.

```bash
npx create-expo-app@latest
```
Creates a new Expo project with the starter files and installs the packages.

```bash
npm run reset-project
```
Clears the example screens and leaves a two file(_layout and index).

```bash
npx expo start
```
Starts the app. Press the `URL(http://localhost:8081)` to open it in the browser, or scan the QR code with Expo Go App on your phone.

## Tech Stack

- React Native
- Expo
- Expo Router
- TypeScript

## Notes

- The loading screen is a short, simulated delay because the member data is stored locally.
