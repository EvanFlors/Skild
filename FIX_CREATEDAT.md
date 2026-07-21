# 🔧 Fix: createdAt Not Appearing in Frontend

## Problem

The production Data Connect service returns `createdAt`, but the frontend doesn't receive it.

## Root Cause

The generated SDK and the deployed service schema might be out of sync.

## Solution Steps

### Step 1: Verify Query File

✅ Already correct - `queries.gql` includes `createdAt` on line 7

### Step 2: Regenerate SDK

```bash
firebase dataconnect:sdk:generate
```

✅ Done - SDK regenerated with `createdAt: TimestampString`

### Step 3: **Deploy to Production** (CRITICAL)

```bash
firebase deploy --only dataconnect
```

This ensures the cloud service has the latest query definition.

### Step 4: Clear Build Cache

```bash
rm -rf node_modules/.vite node_modules/.tanstack .vinxi
```

✅ Done

### Step 5: Restart Dev Server

```bash
# Stop current server (Ctrl+C in the terminal running npm run dev)
npm run dev
```

---

## Why This Happens

When you connect to **production** (cloud), the Data Connect service runs the queries **that were deployed** to it, not the ones in your local files.

**Local files:**

- `queries.gql` ← Your latest query definition
- Generated SDK ← Types from your local files

**Production service:**

- Deployed schema ← Might be an older version!

**The fix:** Deploy your latest queries to match your local SDK.

---

## Verify It Works

After deploying and restarting:

1. Check browser console:

   ```javascript
   Fetched skills: [{ createdAt: "2026-07-21...", ... }]
   ```

2. The `createdAt` field should now appear!

---

## Quick Commands

```bash
# 1. Deploy to production (REQUIRED!)
firebase deploy --only dataconnect

# 2. Clear cache
rm -rf node_modules/.vite node_modules/.tanstack .vinxi

# 3. Restart dev server
npm run dev
```

---

## Additional Check

If it still doesn't work, verify your `.env`:

```bash
cat .env | grep EMULATOR
```

Should show:

```
VITE_USE_FIREBASE_EMULATOR=false
```

If it's `true`, you're connecting to local emulator (which is stopped).
