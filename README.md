# Smart-Examination-Section-Management-System

## Run locally

```sh
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

Create a production build with `corepack pnpm build`. Vite writes the deployable
site to `dist/`.

## Deploy to Vercel

Import this repository into Vercel and select the `frontend` branch. Use the
Vite framework preset, `pnpm build` as the build command, and `dist` as the
output directory. The root `vercel.json` configures SPA fallback routing for
the client-side routes.

## Demo access

The current frontend uses in-memory sample data and a demo-only sign-in form.
Any valid email and password with at least six characters can enter a role.
Authentication and data are not connected to a production backend; do not use
this demo with real student or examination data.