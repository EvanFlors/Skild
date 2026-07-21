# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into Skild, a TanStack Start + Clerk authentication skills registry. The integration adds client-side event tracking, user identification via Clerk, and a reverse proxy for reliable event ingestion.

**Changes made:**

- **`package.json`** — added `posthog-js`, `posthog-node`, and `@posthog/react` packages.
- **`.env.local`** — added `VITE_PUBLIC_POSTHOG_PROJECT_TOKEN` and `VITE_PUBLIC_POSTHOG_HOST` environment variables.
- **`vite.config.ts`** — added a reverse proxy routing `/ingest/static`, `/ingest/array`, and `/ingest` to PostHog's ingestion servers to bypass ad-blockers.
- **`src/routes/__root.tsx`** — wrapped the app in `PostHogProvider` (inside the body, outside `ClerkProvider`) and added a `ClerkPostHogSync` component that calls `posthog.identify()` when a Clerk user is authenticated and `posthog.reset()` on sign-out.
- **`src/components/SkillCard.tsx`** — added `skill_install_command_copied` capture in the copy button handler, including `skill_title` and `skill_category` properties.
- **`src/routes/index.tsx`** — added `browse_registry_clicked` and `publish_skill_clicked` captures on the two hero CTA links.
- **`src/routes/__auth/sign-in.$.tsx`** — added `sign_in_viewed` capture on mount (funnel entry point).
- **`src/routes/__auth/sign-up.$.tsx`** — added `sign_up_viewed` capture on mount (registration funnel entry).

## Events

| Event name | Description | File |
|---|---|---|
| `skill_install_command_copied` | User copies an install command from a skill card in the registry. | `src/components/SkillCard.tsx` |
| `browse_registry_clicked` | User clicks the 'Browse Registry' CTA on the home page hero section. | `src/routes/index.tsx` |
| `publish_skill_clicked` | User clicks the 'Publish Skill' CTA on the home page hero section. | `src/routes/index.tsx` |
| `sign_in_viewed` | User views the sign-in page, marking entry into the authentication conversion funnel. | `src/routes/__auth/sign-in.$.tsx` |
| `sign_up_viewed` | User views the sign-up page, marking entry into the registration conversion funnel. | `src/routes/__auth/sign-up.$.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/521057/dashboard/1877720)
- [Auth funnel: Sign in → Sign up (wizard)](https://us.posthog.com/project/521057/insights/fUHecpgn)
- [Skill install commands copied (wizard)](https://us.posthog.com/project/521057/insights/HHpz1XVV)
- [Registry CTAs: Browse vs Publish (wizard)](https://us.posthog.com/project/521057/insights/13aBkaOM)
- [Install copies by skill category (wizard)](https://us.posthog.com/project/521057/insights/sVypPf71)
- [Auth page views: Sign in vs Sign up (wizard)](https://us.posthog.com/project/521057/insights/Wu0pH2QI)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `VITE_PUBLIC_POSTHOG_PROJECT_TOKEN` and `VITE_PUBLIC_POSTHOG_HOST` to `.env.example` and any bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.
- [ ] Confirm the returning-visitor path also calls `identify` — `ClerkPostHogSync` runs on every render cycle when a user is already authenticated, but verify it fires correctly on hard refreshes and SSR-hydrated sessions.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
