---
layout: ../../layouts/Project.astro
title: 'Spotilite'
description: 'A React music player using the Spotify API, Supabase authentication, and fuzzy search'
client: 'Music Enthusiasts'
updatedAt: '2026-03-20'
image:
  url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80'
  alt: 'Music player interface'
tags: ['react', 'supabase', 'spotify', 'context-api', 'css-modules', 'fuse.js', 'react-router-dom']
---

# Music Player & Discovery Platform

Spotilite is a React music player that leverages the Spotify API to retrieve audio data and enable effortless discovery. The app uses Context API for state management, CSS Modules for clean and scoped styling, and Supabase for authentication and user-specific data. With an intuitive, responsive interface, users can search, listen, and explore music in a smooth way.

## Features

1. **Spotify-powered playback data** — pull audio and discovery information from the Spotify API
2. **Fuzzy search and discovery** — fast, user-friendly searching powered by Fuse.js
3. **Account & user data** — authentication and persisted user data handled via Supabase
4. **Global state with Context API** — manage player and UI state across the application
5. **Routing & navigation** — structured navigation using React Router

## Engineering Capabilities

**Spotify API Integration** — fetch audio-related data from Spotify to power playback and discovery.

**Supabase Authentication & User Data** — role-independent auth flows and user-specific storage for a personalized experience.

**Fuzzy Search with Fuse.js** — improve search relevance for queries that users type imperfectly.

**Context API State Management** — centralize app state (player/UI) without prop drilling.

**CSS Modules** — keep styles modular and reduce unintended style leakage across components.

**Local Development Support** — use mock JSON data (via `json-server`) to develop against realistic structures without relying on external services.

## Testimonial

> "Spotilite strikes the perfect balance between a polished UI and practical engineering. The search feels fast and forgiving, and the auth flow makes user data feel genuinely personal."
>
> — **Product Tester**, Music Enthusiast Group

