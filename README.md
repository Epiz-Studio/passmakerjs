# PassMaker Worker.js

# Deploying PassMaker on Cloudflare

Everything below is done in the Cloudflare web dashboard at [dash.cloudflare.com](https://dash.cloudflare.com). No command line or Node.js required. No skills required.

**Requirements:**

- A Cloudflare account (free tier is fine)
- Your domain's DNS on Cloudflare (optional, but recommended for a custom URL)

---

## 1. Create the D1 database

1. In the dashboard sidebar, go to **Storage & Databases** → **D1 SQL databases**.
2. Click **Create database**.
3. Give it a name, e.g. `passmaker`.
4. Click **Create**.

Leave this tab open — you'll need the database ID in a moment.

> The database name can be anything. What matters is that you bind it to the Worker with the variable name **`DB`** in step 3 — the Worker refuses to start otherwise.

---

## 2. Create the Worker

1. Go to **Compute (Workers)** → **Workers & Pages**.
2. Click **Create** → **Create Worker**.
3. Name it, e.g. `passmaker` (the name becomes part of your URL: `passmaker.<your-subdomain>.workers.dev`).
4. Click **Deploy** to create it with the default "hello world" code — we'll replace that next.

---

## 3. Bind the D1 database

1. Open your new Worker → **Settings** tab → **Bindings** → **Add** → **D1 database**.
2. Fill in:
   - **Variable name**: `DB` — must be exactly this, uppercase.
   - **D1 database**: pick `passmaker` (the one you created in step 1).
3. Click **Deploy**.

---

## 4. Paste in the PassMaker code

1. Still in the Worker, go to the **Code** tab.
2. Click **Edit** (in the online editor).
3. Delete the default `hello world` code and paste the entire contents of `worker.js`.
4. Click **Deploy**.

That's it — the Worker is live. Open `https://passmaker.<your-subdomain>.workers.dev` in a browser; the first request creates all tables (`servers`, `codes`, `jobs`, `sessions`, `attempts`) automatically.

### Verify it works

1. On the home page, click **Create server** and make a test server. You should receive a token.
2. If you see *"PassMaker: no D1 database is bound"*, the binding's variable name isn't `DB` — fix it in **Settings → Bindings**.
3. If something breaks, check **Workers & Pages → your Worker → Logs** (or **Observability → Tail Workers**) for the error output.

---

## 5. Custom domain (optional)

To serve PassMaker from your own domain, e.g. `pass.yourdomain.com`:

1. Open the Worker → **Settings** tab → **Domains & Routes** → **Add** → **Custom Domain**.
2. Enter `pass.yourdomain.com`.
3. Click **Add Custom Domain**.

Cloudflare creates the DNS record automatically (the zone must be on the same Cloudflare account). SSL is provisioned automatically. Players will then visit `https://pass.yourdomain.com/<serverid>`.

---

## 6. Day-2 operations

All of these are done in the dashboard.

### Update the Worker

1. Worker → **Code** tab → **Edit**.
2. Paste the updated `worker.js` and click **Deploy**.

Deployments are atomic — no downtime. No schema migration is needed: new tables are added automatically on the first request after the deploy, and existing tables are untouched (`CREATE TABLE IF NOT EXISTS`).

### View logs

- Worker → **Observability** (or **Logs**) → **Tail Workers** to watch requests live.
- Any unhandled errors appear here with stack traces (`PassMaker error ...`).

### Back up the database

1. Go to **Storage & Databases → D1 SQL databases** → `passmaker`.
2. Open the **Console** tab.
3. (Optional) To export everything, use **Export** if shown in your dashboard version, or run a `SELECT` per table and download the results as CSV/JSON.

### Run SQL manually

1. `passmaker` database → **Console** tab.
2. Type a query and press **Run**, for example:

   ```sql
   SELECT COUNT(*) FROM servers;
   ```

### Wipe test data (destructive)

In the D1 Console:

```sql
DELETE FROM servers;
DELETE FROM codes;
DELETE FROM jobs;
DELETE FROM sessions;
```

---

## 7. How it fits together

```text
Player browser ──► Worker (pages + /api/*) ──► D1 (DB binding)
                                                    ▲
Minecraft server plugin ──► /api/plugin/* ──────────┘
  (polls with Bearer token; outbound only, works
   behind Aternos / playit.gg)
```

- **Players** visit `/<serverid>` and enter a sign-up code; the Worker queues a job in D1.
- The **PassMaker plugin** polls `/api/plugin/poll` with the server token, picks up jobs, creates the account in-game, and reports back via `/api/plugin/result`.
- **Owners** sign in at `/login` (username = server ID) to manage codes, password, and token in `/panel`.

Because the plugin only makes outbound HTTP requests, no port forwarding or inbound access to your Minecraft server is required.

---

## 8. Troubleshooting

| Symptom | Cause / fix |
|---|---|
| `500: no D1 database is bound` | The binding's variable name isn't `DB`, or you never added it. Fix it in **Settings → Bindings**. |
| Tables missing / SQL errors | The binding points at the wrong database, or the first request hasn't run yet. Visit the homepage once and check you picked `passmaker` in the binding. |
| Paste in the editor didn't save | You edited but never clicked **Deploy** — edits aren't live until deployed. |
| Plugin says "Invalid token" | The token in-game doesn't match. Regenerate it in `/panel` → **Server token**, then run `/pass token <new token>` in the server console. |
| "This server is offline right now" | The plugin hasn't polled in the last 90 seconds. Make sure the Minecraft server is running and the plugin is installed. |
| Stuck "waiting for the server" | Jobs time out after 60 seconds if the plugin never answers; the reserved code use is refunded automatically. |
| Rate-limit errors (429) | Built-in per-IP limits (logins, code attempts, server creation). They clear automatically within their window. |

### Quick checklist

- [ ] D1 database created (`passmaker`)
- [ ] Worker created (`passmaker`)
- [ ] D1 bound with variable name exactly `DB`
- [ ] `worker.js` pasted in and **Deployed**
- [ ] Home page loads and a test server can be created
- [ ] (Optional) Custom domain added
