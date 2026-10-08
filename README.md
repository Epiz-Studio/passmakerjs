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
2. Click **Create** → **Create Worker** → **Start with Hello world!**.
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

That's it — the Worker is live. Open `https://<worker-name>.<your-subdomain>.workers.dev` in a browser; the first request creates all tables (`servers`, `codes`, `jobs`, `sessions`, `attempts`) automatically.

---

## 5. Custom domain (optional)

To serve PassMaker from your own domain, e.g. `pass.yourdomain.com`:

1. Open the Worker → **Settings** tab → **Domains & Routes** → **Add** → **Custom Domain**.
2. Enter `pass.yourdomain.com`.
3. Click **Add Custom Domain**.

Cloudflare creates the DNS record automatically (the zone must be on the same Cloudflare account). SSL is provisioned automatically. Players will then visit `https://pass.yourdomain.com/<serverid>`.

---
